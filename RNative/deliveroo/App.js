import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './Hooks/useAuth';
import StackNavigator from './StackNavigator'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer >
  );
}