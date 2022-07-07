import { View, Text } from 'react-native'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // const [initializing, setInitializing] = useState(false)

    GoogleSignin.configure({
        webClientId: "1031408160350-g6qov12772m82qd2vhe3o3skdlt6soav.apps.googleusercontent.com"
    })

    const onGoogleSignIn = async () => {
        const { idToken } = await GoogleSignin.signIn()
        const googleCredential = auth.GoogleAuthProvider.credential(idToken)
        // setInitializing(true)
        setIsAuthenticated(true)
        return await auth().signInWithCredential(googleCredential)
    }

    const onGoogleSignOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'))

        setIsAuthenticated(false)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    const onAuthStateChanged = (user) => {
        setUser(user);
        // if (initializing) setInitializing(false);
    }


    return (
        <AuthContext.Provider value={{ onGoogleSignIn, user, onGoogleSignOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}