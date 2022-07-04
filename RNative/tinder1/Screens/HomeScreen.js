// React and RN specefic imports
import { View, Text, Button, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
// React Navigation imports
import { useNavigation } from '@react-navigation/native'
// Auth imports
import useAuth from '../hooks/useAuth'
// Tailwind import
import tw from 'twrnc'
// Icons import
// import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import Swiper from 'react-native-deck-swiper'
// Data import
import data from '../userData.json'
import { db } from '../firebase'
import { onSnapshot, doc, collection, setDoc, getDocs, where, query, getDoc } from 'firebase/firestore'





const HomeScreen = () => {

  const userData = data
  const navigation = useNavigation()
  const [profiles, setProfiles] = useState([])
  const { user, logout } = useAuth()
  const swipeRef = useRef()

  useLayoutEffect(() => {
    onSnapshot(doc(db, 'users', user.uid), (snapshot) => {
      if (!snapshot.exists()) {
        navigation.navigate("Modal")
      }
    })
  }, [])

  useEffect(() => {
    let unsub;
    const fetchCards = async () => {

      const passes = await getDocs(collection(db, 'users', user.uid, 'passes')).then(snapshot => snapshot.docs.map(doc => doc.id))
      const swipes = await getDocs(collection(db, 'users', user.uid, 'passes')).then(snapshot => snapshot.docs.map(doc => doc.id))

      const passesUserIds = passes.length > 0 ? passes : ['test']
      const swipedUserIds = swipes.length > 0 ? swipes : ['test']


      unsub = onSnapshot(query(collection(db, 'users'), where("id", "not-in", [...passesUserIds, ...swipedUserIds])), snapshot => {
        setProfiles(snapshot.docs.filter(doc => doc.id !== user.uid).map((doc) => (
          {
            id: doc.id,
            ...doc.data()
          }
        )))
      })
    }

    fetchCards()
    return unsub;
  }, [db])


  const swipeLeft = (cardIndex) => {
    if (!profiles | cardIndex) return
    const userSwiped = profiles[cardIndex]
    // const loggedInProfile = await(await getDoc(db, 'users', user.uid)).data()
    // getDoc(doc(db,'users', userSwiped.id, 'swieps', user.uid).then((documentSnapshot)=>{
    //   if(documentSnapshot.exists()){
    
    //   })
    // })

    console.log(`You swiped PASS on ${userSwiped.displayName}`)
    setDoc(doc(db, 'users', user.uid, 'passes', userSwiped.id), userSwiped)
  }
  const swipeRight = (cardIndex) => {
    if (!profiles | cardIndex) return
    const userSwiped = profiles[cardIndex]
    console.log(`You swiped PASS on ${userSwiped.displayName}`)
    setDoc(doc(db, 'users', user.uid, 'passes', userSwiped.id), userSwiped)
  }

  console.log(profiles)

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
          onSwipedLeft={(cardIndex) => {
            swipeLeft(cardIndex)
            console.log("PASS")
          }}
          onSwipedRight={(cardIndex) => {
            swipeRight(cardIndex)
            console.log("Right Swipe")
          }}
          cards={profiles}
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
          renderCard={(card) => card ? (
            <View key={card.id} style={tw` relative bg-white h-3/4 rounded-xl`}>
              <Image style={tw`h-full w-full rounded-xl absolute top-0`} source={{ uri: card.photoURL }} />
              <View style={[tw`absolute bottom-0 bg-white justify-between flex-row w-full
               h-20 px-6 py-2 rounded-b-xl`, styles.cardShadow]}>
                <View>
                  <Text style={tw`text-xl font-bold`}>{`${card.displayName}`}</Text>
                  <Text>{card.occupation}</Text>
                </View>
                <Text style={tw`text-2xl font-bold`}>{card.age}</Text>
              </View>
            </View>
          ) : (
            <View style={tw` relative bg-white h-3/4 rounded-xl `}>
              <Text style={tw`text-xl font-bold mx-auto my-auto`}>{`Nothing to show 😢`}</Text>
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