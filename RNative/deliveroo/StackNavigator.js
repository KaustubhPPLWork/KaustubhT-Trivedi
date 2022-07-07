import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Fragment } from 'react'
import HomeScreen from './Screens/HomeScreen'
import ChatScreen from "./Screens/ChatScreen"
import LoginScreen from './Screens/LoginScreen'
import useAuth from './Hooks/useAuth'
const Stack = createNativeStackNavigator()

const StackNavigator = () => {

  const { user } = useAuth()
  return (
    <Fragment>
      {
        user ? (<Stack.Group >
          <Stack.Screen name="Home"  component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Group >) : (<Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>)}

    </Fragment>

  )
}

export default StackNavigator