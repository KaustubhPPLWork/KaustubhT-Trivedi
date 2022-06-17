// import { StyleSheet, Text, View, Button } from 'react-native';
// import tw from 'twrnc';
import Stacknavigator from './Stacknavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs()
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stacknavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}