import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {RootStackParamList} from '../App';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

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
    <View>
      <Text>Login</Text>
      <Button title="Lets get started" onPress={onGoogleSignIn} />
    </View>
  );
};

export default LoginScreen;
