import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { auth } from '../firebase'
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, getAuth, signOut } from 'firebase/auth';


const AuthContext = createContext({})
WebBrowser.maybeCompleteAuthSession();


export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)
    const [loadingInitial, setLoadingInitial] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: "35429041629-fkf3ahrr1gktlfgdjd5rkvar0k56enaa.apps.googleusercontent.com",
    })
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
        <AuthContext.Provider value={{ error, loadingInitial, user, logout, promptAsync }}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}


export default function useAuth() {
    return useContext(AuthContext)
}