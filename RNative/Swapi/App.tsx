import React, {FC, type PropsWithChildren} from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SwapiMainScreen from './Screens/SwapiMainScreen';
import CharacterScreen from './Screens/CharacterScreen';

export type RootStackParamList = {
  // Profile: {userId: string};
  Home: undefined;
  Login: undefined;
  SwapiMain: undefined;
  Character: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  };
};
// type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const App: FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SwapiMain" component={SwapiMainScreen} />
          <Stack.Screen name="Character" component={CharacterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};
export default App;
