import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, FlatList, Dimensions, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar, NavigationState, SceneRendererProps } from 'react-native-tab-view';
import { router } from 'expo-router';
import { SearchIcon } from '@/components/navigation/Icon';

interface StockItem {
  id: string;
  name: string;
  symbol: string;
  change: string;
  logo: any;
}

const initialLayout = { width: Dimensions.get('window').width };

const staticLogos: Record<string, any> = {
  'DECAW': require('@/assets/images/assets/tesla.png'),
  'NVDA': require('@/assets/images/assets/nvidia.png'),
  'MSFT': require('@/assets/images/assets/microsoft.png'),
  'AAPL': require('@/assets/images/assets/apple.png'),
  'GOOGL': require('@/assets/images/assets/google.png'),
};

const API_KEY = '75UGI4GTRLP1WBW3';

const StocksScreen: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    { key: 'gainers', title: 'Top Gainers' },
    { key: 'losers', title: 'Top Losers' },
  ]);
  const [gainers, setGainers] = useState<StockItem[]>([]);
  const [losers, setLosers] = useState<StockItem[]>([]);
  const [filteredGainers, setFilteredGainers] = useState<StockItem[]>([]);
  const [filteredLosers, setFilteredLosers] = useState<StockItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`);

        const gainersData = response.data.top_gainers?.map((item: any, index: number) => ({
          id: `${index + 1}`,
          name: item.ticker,
          symbol: item.ticker,
          change: `${item.change_percentage}%`,
          logo: staticLogos[item.ticker] || staticLogos['GOOGL'],
        })) || [];

        const losersData = response.data.top_losers?.map((item: any, index: number) => ({
          id: `${index + 1}`,
          name: item.ticker,
          symbol: item.ticker,
          change: `${item.change_percentage}%`,
          logo: staticLogos[item.ticker] || staticLogos['GOOGL'],
        })) || [];

        setGainers(gainersData);
        setLosers(losersData);
        setFilteredGainers(gainersData);
        setFilteredLosers(losersData);
      } catch (error) {
        console.error('Error fetching stocks data:', error);
      }
    };

    fetchStocks();
  }, []);

  useEffect(() => {
    const filteredGainers = gainers.filter(stock =>
      stock.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredLosers = losers.filter(stock =>
      stock.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredGainers(filteredGainers);
    setFilteredLosers(filteredLosers);
  }, [searchQuery, gainers, losers]);

  const Item: React.FC<StockItem> = ({ name, symbol, change, logo }) => (
    <Pressable onPress={() => router.push({ pathname: '/page' })} style={styles.item}>
      <View style={{
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#dfcfb8', borderRadius: 10, padding: 10, paddingVertical: 20,
      }}>
        <Text style={{
          fontSize: 50,
          color: '#1c430d',
          fontFamily: 'WorkSans_Bold',
          textAlign: 'center',
        }}>
          {name.charAt(0)}
        </Text>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginHorizontal: 4 }}>
        <Text style={styles.name}>{name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 7 }}>
          <Text style={styles.symbol}>{symbol}</Text>
          <Text style={styles.change}>{change}</Text>
        </View>
      </View>
    </Pressable>
  );

  const GainersRoute: React.FC = () => (
    <FlatList
      data={filteredGainers}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
    />
  );

  const LosersRoute: React.FC = () => (
    <FlatList
      data={filteredLosers}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );

  const renderScene = SceneMap({
    gainers: GainersRoute,
    losers: LosersRoute,
  } as any);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginBottom: 16,
      }}>
        <Text style={styles.header}>Stocks</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '60%' }}>
          <TextInput
            style={{
              backgroundColor: '#f2f2f2',
              borderRadius: 10,
              padding: 10,
              width: '80%',
              fontFamily: 'WorkSans_Reg',
              fontSize: 16,
              color: '#0D1C17',
            }}
            placeholder='Search'
            placeholderTextColor='#0D1C17'
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <SearchIcon color='black' />
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props: SceneRendererProps & { navigationState: NavigationState<any> }) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#45A187' }}
            style={{ backgroundColor: 'white' }}
            renderLabel={({ route, focused }) => (
              <Text style={[styles.tabLabel, focused ? styles.activeTabLabel : styles.inactiveTabLabel]}>
                {route.title}
              </Text>
            )}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    margin: 16,
    fontFamily: 'WorkSans_Bold',
  },
  item: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 10,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 16,
    color: '#0D1C17',
    fontFamily: 'WorkSans_Medium',
  },
  symbol: {
    fontSize: 14,
    color: '#45A187',
    fontFamily: 'WorkSans_Reg',
  },
  change: {
    fontSize: 14,
    color: '#45A187',
    fontFamily: 'WorkSans_Reg',
  },
  row: {
    justifyContent: 'space-between',
  },
  tabLabel: {
    fontFamily: 'WorkSans_Bold',
    fontSize: 14,
  },
  activeTabLabel: {
    color: '#45A187',
  },
  inactiveTabLabel: {
    color: '#0D1C17',
  },
});

export default StocksScreen;
