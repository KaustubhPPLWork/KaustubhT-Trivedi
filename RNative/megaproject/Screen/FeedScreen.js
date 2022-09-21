import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import '../Stories.json'
import React from 'react'
import Header from '../Components/Header'
import Post from '../Components/Post'
import Story from '../Components/Story'
const FeedScreen = () => {

  const navigation = useNavigation()

  return (
    <View>
      <Header />
      {/* Stories */}
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ justifyContent: "center", backgroundColor: "white",paddingBottom:3 }}
        showsHorizontalScrollIndicator={false}
      >
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </ScrollView>
      {/* Posts */}
      <ScrollView>
        <View>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </View>
      </ScrollView>
      {/* <Footer /> */}
    </View>
  )
}

export default FeedScreen


const styles = StyleSheet.create({
  storySegmentation: {
    display: 'flex',
  }
})