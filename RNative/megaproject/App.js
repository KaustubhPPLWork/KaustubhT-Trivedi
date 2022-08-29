import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Screen/Login'
import ChatScreen from './Screen/ChatScreen'
import FeedScreen from './Screen/FeedScreen'
import CameraScreen from './Screen/CameraScreen'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Feed' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='Camera' component={CameraScreen} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Chat' component={ChatScreen} />
        <Stack.Screen name='Feed' component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App