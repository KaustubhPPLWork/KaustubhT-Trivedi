import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CameraIcon } from 'react-native-heroicons/mini'
import '../Stories.json'
import React from 'react'
import Header from '../Components/Header'
import Post from '../Components/Post'
const FeedScreen = () => {

  const navigation = useNavigation()

  return (
    <View>
      <Header />
      {/* Stories */}
      <ScrollView horizontal={true}>
        <View style={styles.storyContainer}>
          {/* <Text style={styles.storyBlock}>Kaustubh Trivedi</Text> */}
        </View>
      </ScrollView>
      {/* Posts */}
      <ScrollView>
        <View>
          <Post />
        </View>
      </ScrollView>
      {/* <Footer /> */}
    </View>
  )
}

export default FeedScreen


const styles = StyleSheet.create({
  storyContainer: {
    margin: 10,
    minWidth: 80,
    maxHeight: 80,
    maxWidth: 80,
    minHeight: 80,
    padding: 10,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: "red",

  },
  storyBlock: {
    top: 6
  }
})