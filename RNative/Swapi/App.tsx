import React, {FC, type PropsWithChildren} from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SwapiMainScreen from './Screens/SwapiMainScreen';

export type RootStackParamList = {
  // Profile: {userId: string};
  Home: undefined;
  Login: undefined;
  SwapiMain: undefined;
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
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};
export default App;
