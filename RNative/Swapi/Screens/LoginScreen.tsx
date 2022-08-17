import {View, Text, Button, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {RootStackParamList} from '../App';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import tw from 'twrnc';

type Props = NativeStackScreenProps<RootStackParamList, 'SwapiMain'>;

const LoginScreen = ({navigation}: Props) => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId:
      '676326197305-a0u402susp46kojar6dfio4houqc3aad.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (isInitializing) setIsInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleSignIn = async () => {
    (await onGoogleButtonPress()) && navigation.navigate('SwapiMain');
    console.log(user);
  };

  return (
    <View style={tw` m-auto`}>
      <TouchableOpacity onPress={onGoogleSignIn} style={tw`bg-[#4285F4] px-5 py-2 rounded-lg`}>
        <Text style={tw`font-medium text-2xl text-gray-700`}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
