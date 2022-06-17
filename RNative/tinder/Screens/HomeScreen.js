// React and RN specefic imports
import { View, Text, Button, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useRef } from 'react'
// React Navigation imports
import { useNavigation } from '@react-navigation/native'
// Auth imports
import useAuth from '../hooks/useAuth'
// Tailwind import
import tw from 'twrnc'
// Icons import
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import Swiper from 'react-native-deck-swiper'
// Data import
import data from '../userData.json'

const HomeScreen = () => {
  const navigation = useNavigation()
  const { user, logout } = useAuth()
  const swipeRef = useRef()

  return (
    <SafeAreaView style={tw`flex-1 mt-6`}>
      {/* Home Screen */}

      {/* Header */}

      <View style={tw`flex-row px-5 items-center justify-between`}>
        <TouchableOpacity onPress={logout}>
          <Image style={tw`h-10 w-10 rounded-full`} source={{ uri: user.photoURL }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate("Modal")
        }}>
          <Image style={tw`h-14 w-14 rounded-full`} source={require('../assets/tinder-logo.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("Chat") }}>
          <Ionicons name='chatbubbles-sharp' size={30} color='#FD3A73' />
        </TouchableOpacity>
      </View>

      {/* Header Ends */}

      {/* Cards Begin */}
      <View style={tw`flex-1 -mt-6`}>
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: 'transparent' }}
          animateCardOpacity
          stackSize={5}
          cardIndex={0}
          verticalSwipe={false}
          onSwipedLeft={() => {
            console.log("PASS")
          }}
          onSwipedRight={() => {
            console.log("Matched")
          }}
          cards={data}
          overlayLabels={
            {
              left: {
                title: "Nope",
                style: {
                  label: {
                    textAlign: 'right',
                    color: "red"
                  }
                }
              },
              right: {
                title: "Yes",
                style: {
                  label: {
                    textAlign: 'left',
                    color: "green"
                  }
                }
              }
            }
          }
          renderCard={(card) => (
            <View key={card.id} style={tw` relative bg-white h-3/4 rounded-xl`}>
              <Image style={tw`h-full w-full rounded-xl absolute top-0`} source={{ uri: card.imageLink }} />
              <View style={[tw`absolute bottom-0 bg-white justify-between items-between flex-row w-full
               h-20 px-6 py-2 rounded-b-xl`, styles.cardShadow]}>
                <View>
                  <Text style={tw`text-xl font-bold`}>{`${card.first_name} ${card.last_name}`}</Text>
                  <Text>{card.occupation}</Text>
                </View>
                <Text style={tw`text-2xl font-bold`}>{card.age}</Text>
              </View>
            </View>
          )}
        />

      </View>

      <View style={tw`flex flex-row justify-evenly mb-8`}>
        <TouchableOpacity onPress={() => { swipeRef.current.swipeLeft() }} style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}>
          <Entypo name='cross' size={24} color='red' />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { swipeRef.current.swipeRight() }} style={tw`items-center justify-center rounded-full w-16 h-16 bg-green-200`}>
          <Entypo name='heart' size={24} color='green' />
        </TouchableOpacity>

      </View>
      {/* Cards End */}


      {/* <Text>User has logged in</Text>
      <View>
        <Button title='Go to Chat Screen' onPress={() => navigation.navigate('Chat')} />
      </View>
      <View>
        <Button title='Logout' onPress={logout} />
      </View> */}

    </SafeAreaView>

  )
}

export default HomeScreen


const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  }
})