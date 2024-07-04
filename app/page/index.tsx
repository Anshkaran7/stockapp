// screens/StockDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const StockDetailScreen = () => {
    const stock = {
        name: 'Tesla, Inc.',
        price: 900.43,
        change: '+2%',
        logo: require('@/assets/images/assets/tesla.png'),
        description: 'Tesla, Inc. engages in the design, manufacture, and sale of fully electric vehicles, energy generation and storage systems.',
        ceo: 'Elon Musk',
        founded: '2003',
        employees: '120,000',
        headquarters: 'Palo Alto, California',
    stats: {
            Open: '783.13',
            Volume: '62.4M',
            High: '784',
            'Avg vol': '73M',
            Low: '782',
            'Mkr cap': '857B',
            '52 Wk high': '171',
            'P/E ratio': '77.14',
            '52 Wk low': '781.69',
            'Div yield': '-',
        },
        similar: [
            { id: '1', name: 'Apple Inc.', change: '+2.3%', logo: require('@/assets/images/assets/apple.png') },
            { id: '2', name: 'Microsoft Corporation', change: '-1.5%', logo: require('@/assets/images/assets/microsoft.png') },
            { id: '3', name: 'Google LLC', change: '+0.8%', logo: require('@/assets/images/assets/google.png') },
        ],
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Text style={styles.backButton}>←</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.iconButton}>⎚</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerText}>{stock.name}</Text>
                <Text style={styles.price}>${stock.price}</Text>
                <Text style={styles.change}>
                    Today{' '}
                    <Text
                        style={{
                            color: stock.change.includes('+') ? '#08872E' : '#FF4B4B',
                            fontFamily: 'WorkSans_Medium',
                        }}>
                        {stock.change}
                    </Text>
                </Text>
                <Image source={require('@/assets/images/assets/chart.png')} style={styles.chart} />
                <View style={styles.timeRange}>
                    {['1D', '1W', '1M', '3M', '1Y'].map((range) => (
                        <Text key={range} style={styles.timeRangeText}>
                            {range}
                        </Text>
                    ))}
                </View>
                <Text style={styles.subHeader}>52-week price range</Text>
                <View style={styles.priceRangeBar}>
                    <View style={styles.priceRangeFill}></View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text style={styles.buyButtonText}>Buy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sellButton}>
                        <Text style={styles.sellButtonText}>Sell</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subHeader2}>About {stock.name}</Text>
                <Text style={styles.description}>{stock.description}</Text>
                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>CEO</Text>
                        <Text style={styles.infoValue}>{stock.ceo}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Founded</Text>
                        <Text style={styles.infoValue}>{stock.founded}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Employees</Text>
                        <Text style={styles.infoValue}>{stock.employees}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Headquarters</Text>
                        <Text style={styles.infoValue}>{stock.headquarters}</Text>
                    </View>
                </View>
                <Text style={styles.subHeader2}>Stats</Text>
                <View style={styles.statsContainer}>
                    {Object.entries(stock.stats).map(([key, value]) => (
                        <View style={styles.statsRow} key={key}>
                            <Text style={styles.statsTitle}>{key}</Text>
                            <Text style={styles.statsValue}>{value}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.subHeader2}>Similar Stocks</Text>
                <View style={styles.similarStocksContainer}>
                    {stock.similar.map((similarStock) => (
                        <View key={similarStock.id} style={styles.similarStockItem}>
                            <Image source={similarStock.logo} style={styles.similarStockImage} />
                            <View style={styles.similarStockInfo}>
                                <Text style={styles.similarStockName}>{similarStock.name}</Text>
                                <Text style={styles.similarStockChange}>{similarStock.change}</Text>
                            </View>
                            <TouchableOpacity style={styles.buyButtonSmall}>
                                <Text style={styles.buyButtonText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backButton: {
        fontSize: 24,
        color: '#45A187',
        fontFamily: 'WorkSans_Bold',
    },
    headerText: {
        fontSize: 16,
        color: '#0D1C17',
        marginTop: 16,
        fontFamily: 'WorkSans_Medium',
    },
    iconButton: {
        fontSize: 24,
        color: '#45A187',
        fontFamily: 'WorkSans_Bold',
    },
    price: {
        fontSize: 32,
        color: '#0D1C17',
        fontFamily: 'WorkSans_Bold',
    },
    change: {
        fontSize: 18,
        color: '#45A187',
        marginBottom: 16,
        fontFamily: 'WorkSans_Reg',
    },
    chart: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    timeRange: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    timeRangeText: {
        fontSize: 16,
        color: '#45A187',
        fontFamily: 'WorkSans_SemiBold',
    },
    subHeader: {
        fontSize: 16,
        color: '#0D1C17',
        marginVertical: 16,
        fontFamily: 'WorkSans_Medium',
    },
    subHeader2: {
        fontSize: 22,
        color: '#0D1C17',
        marginVertical: 16,
        fontFamily: 'WorkSans_Bold',
    },
    priceRangeBar: {
        height: 5,
        backgroundColor: '#E0E0E0',
        borderRadius: 50,
        marginBottom: 16,
    },
    priceRangeFill: {
        width: '50%',
        height: '100%',
        borderRadius: 50,
        backgroundColor: '#00B280',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    buyButton: {
        flex: 1,
        backgroundColor: '#00B280',
        borderRadius: 5,
        padding: 16,
        marginRight: 8,
        alignItems: 'center',
    },
    buyButtonText: {
        fontSize: 16,
        color: '#fff',
        paddingHorizontal: 12,
        fontFamily: 'WorkSans_SemiBold',
    },
    sellButton: {
        flex: 1,
        backgroundColor: '#E5F5F0',
        borderRadius: 5,
        padding: 16,
        marginLeft: 8,
        alignItems: 'center',
    },
    sellButtonText: {
        fontSize: 16,
        color: '#0D1C17',
        fontFamily: 'WorkSans_SemiBold',
    },
    description: {
        fontSize: 16,
        color: '#0D1C17',
        marginBottom: 16,
        fontFamily: 'WorkSans_Reg',
    },
    infoContainer: {
        marginBottom: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    infoTitle: {
        fontSize: 16,
        color: '#45A187',
        fontFamily: 'WorkSans_SemiBold',
    },
    infoValue: {
        fontSize: 16,
        color: '#0D1C17',
        fontFamily: 'WorkSans_Reg',
    },
    statsContainer: {
        marginBottom: 16,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    statsTitle: {
        fontSize: 16,
        color: '#45A187',
        fontFamily: 'WorkSans_SemiBold',
    },
    statsValue: {
        fontSize: 16,
        color: '#0D1C17',
        fontFamily: 'WorkSans_Reg',
    },
    similarStocksContainer: {
        marginTop: 16,
    },
    similarStockItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    similarStockImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    similarStockInfo: {
        flex: 1,
        marginLeft: 10,
    },
    similarStockName: {
        fontSize: 16,
        color: '#0D1C17',
        fontFamily: 'WorkSans_SemiBold',
    },
    similarStockChange: {
        fontSize: 14,
        color: '#45A187',
        fontFamily: 'WorkSans_Reg',
    },
    buyButtonSmall: {
        backgroundColor: '#45A187',
        borderRadius: 5,
        padding: 8,
        alignItems: 'center',
    },
});

export default StockDetailScreen;
