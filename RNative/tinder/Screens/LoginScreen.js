// React Native imports
import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
// React navigation imports
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
// Tailwind Import
import tw from 'twrnc'

const LoginScreen = () => {
  // React navigation hooks
  const navigation = useNavigation()
  // Local state hooks
  const [accessToken, setAccessToken] = useState()
  const [userinfo, setUserInfo] = useState()
  // Auth hooks
  const { promptAsync, loadingInitial, user } = useAuth()


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])


  const signIn = () => {
    promptAsync()
  }
  console.log()

  // console.log(response.authentication)
  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        resizeMode='cover' style={tw`flex-1`} source={{ uri: "https://tinder.com/static/tinder.png " }}>
        <TouchableOpacity style={[tw`absolute bottom-40 w-52 p-4 rounded-2xl `, { marginHorizontal: '25%', backgroundColor: "white" }]} onPress={signIn}>
          <Text style={tw`font-semibold text-center`} >Sign in & get swiping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}
export default LoginScreen