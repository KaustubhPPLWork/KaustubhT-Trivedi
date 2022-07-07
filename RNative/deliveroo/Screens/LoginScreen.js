import { View, Text, TouchableOpacity } from 'react-native'
import useAuth from '../Hooks/useAuth'
import React, { Fragment } from 'react'
import tw from 'twrnc'
const LoginScreen = () => {

  const { onGoogleSignIn, user, onGoogleSignOut } = useAuth()


  return (<Fragment>
    <TouchableOpacity style={tw`mx-auto my-auto bg-slate-100 px-9 py-4 rounded-xl`} onPress={() => onGoogleSignIn()}>
      <Text>Login</Text>
    </TouchableOpacity>
  </Fragment>
  )
}

export default LoginScreen