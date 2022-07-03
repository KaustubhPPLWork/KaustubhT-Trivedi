import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { serverTimestamp, setDoc,doc } from 'firebase/firestore';
import { db } from '../firebase';
const ModalScreen = () => {
    const navigation = useNavigation()
    const { user } = useAuth()
    const [image, setImage] = useState()
    const [job, setJob] = useState()
    const [age, setAge] = useState()

    const incompleteForm = !image || !job || !age


    const updateUserProfile = () => {
        setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            displayName: user.displayName,
            photoUrl: image,
            job,
            age,
            timestamp: serverTimestamp()
        }).then(() => { navigation.navigate("Home") }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <View style={tw`flex-1 items-center pt-1`}>
            <Image style={tw`h-20 w-full`} resizeMode="contain" source={{ uri: "https://links.papareact.com/2pf" }} />

            <Text style={tw`text-xl text-gray-500 p-2 font-bold`}>Welcome {user.displayName}</Text>
            <Text style={tw`text-center p-4 font-bold text-red-400`}>
                Step 1: The profile picture
            </Text>
            <TextInput value={image} onChangeText={text => setImage(text)} style={tw`text-center text-xl pb-2`} placeholder='Enter a profile pic URL'></TextInput>

            <Text style={tw`text-center p-4 font-bold text-red-400`}>
                Step 2: The Job
            </Text>
            <TextInput value={job} onChangeText={text => setJob(text)} style={tw`text-center text-xl pb-2`} placeholder='Enter your occupation'></TextInput>

            <Text style={tw`text-center p-4 font-bold text-red-400`}>
                Step 3: The Age
            </Text>
            <TextInput value={age} onChangeText={text => setAge(text)} style={tw`text-center text-xl pb-2`} placeholder='Enter your age'></TextInput>

            <TouchableOpacity
                style={[tw`w-64 p-3 rounded-xl absolute bottom-10`, incompleteForm ? tw`bg-gray-400` : tw`bg-red-400`]}
                disabled={incompleteForm}
                onPress={updateUserProfile}>
                <Text style={tw`text-center text-white text-xl`}>Update Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ModalScreen