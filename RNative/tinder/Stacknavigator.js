// React and RN specific impor
import React from 'react'
import { View, Text } from 'react-native'
import useAuth from './hooks/useAuth'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screen imports
import HomeScreen from './Screens/HomeScreen';
import ChatScreen from './Screens/ChatScreen';
import LoginScreen from './Screens/LoginScreen';
import ModalScreen from './Screens/ModalScreen';

const Stack = createNativeStackNavigator();

const Stacknavigator = () => {
    const { user } = useAuth()
    // console.log(user);
    return (<>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
                <>
                    <Stack.Group>
                        <Stack.Screen name='Home' component={HomeScreen} />
                        <Stack.Screen name="Chat" component={ChatScreen} />
                    </Stack.Group>
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen name='Modal' component={ModalScreen} />
                    </Stack.Group>
                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
        </Stack.Navigator>
    </>
    )
}
export default Stacknavigator