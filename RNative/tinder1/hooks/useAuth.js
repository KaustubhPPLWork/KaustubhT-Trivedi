import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { auth } from '../firebase'
// import * as Google from 'expo-auth-session/providers/google';
// import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, getAuth, signOut } from 'firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { async } from '@firebase/util';

const AuthContext = createContext({})
// WebBrowser.maybeCompleteAuthSession();


export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)
    const [googleUser, setGoogleUser] = useState()
    const [loadingInitial, setLoadingInitial] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    // const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    //     clientId: "35429041629-fkf3ahrr1gktlfgdjd5rkvar0k56enaa.apps.googleusercontent.com",
    // })
    const signIn = async() => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setGoogleUser(userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                return "Cancelled Login Flow"
            }
            else if (error.code === statusCodes.IN_PROGRESS) {
                return "In Progress"
            }
            else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                return "Play Services Not Available"
            }
            else {
                return "Something went wrong"
            }
        }
    }
    useEffect(() => {
        setLoadingInitial(true)
        if (response?.type === 'success') {
            const { id_token } = response.params
            const credential = GoogleAuthProvider.credential(id_token)
            signInWithCredential(auth, credential)
        }
        if (response?.type === 'error') {
            (error) => {
                setError(error)
            }
        }
        else {
            setLoadingInitial(false)
        }
    }, [response])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }
            setLoadingInitial(false)
        })
    }, [])


    const logout = () => {
        setLoadingInitial(true)
        signOut(auth).catch((error) => {
            setError(error)
        }).finally(() => {
            setLoadingInitial(false)
        })
    }
    // console.log(authentication)
    // const memoedValue = useCallback(() => (
    //     {  }
    // )
    //     , [user, loadingInitial, error])


    return (
        <AuthContext.Provider value={{ signIn, error, loadingInitial, user, logout, promptAsync }}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}


export default function useAuth() {
    return useContext(AuthContext)
}