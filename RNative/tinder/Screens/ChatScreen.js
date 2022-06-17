import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import tw from 'twrnc'
const ChatScreen = () => {
  // const {user} = useAuth()
  return (
    <SafeAreaView style={tw`mt-6`}>
      <Text>Hey the user can chat here😊</Text>
    </SafeAreaView>
  )
}

export default ChatScreen