import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router'

const Login = () => {
    useEffect(() => {
        router.push('(tabs)')
    }, [])
    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}

export default Login