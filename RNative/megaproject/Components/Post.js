import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import image from '../Assets/Images/Image.jpg'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/avatars-initials-sprites'
import * as IconOutline from 'react-native-heroicons/outline'
import * as IconSolid from 'react-native-heroicons/solid'





const Post = () => {

  const xml = createAvatar(style, {
    seed: "Kaustubh Trivedi"
  })

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        {/* <Text style={{ marginRight: 20, backgroundColor: "red", borderRadius: 10 }}>Dicebear Image</Text> */}
        <Image source={{ uri: 'https://avatars.dicebear.com/api/avataaars/KaustubhTrivedi.png' }} style={styles.userImage} />
        {/* <Image source={"https://avatars.dicebear.com/api/KaustubhTrivedi.png"} /> */}
        <Text style={{ fontSize: 24 }}>Kaustubh Trivedi</Text>
      </View>
      {/* Image */}
      <Image style={styles.image} source={image} />
      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={{ top: 3, marginRight: 10 }}>
          <IconOutline.HeartIcon color={'black'} size={42} />
        </TouchableOpacity>
        <TouchableOpacity style={{ top: 3, marginRight: 10 }}>
          <IconOutline.ChatBubbleBottomCenterIcon color={'black'} size={42} />
        </TouchableOpacity>
        <TouchableOpacity style={{ top: 3 }}>
          <IconOutline.ChevronRightIcon color={'black'} size={42} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: "row",
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
    width: 395,
    alignItems: 'center',
    justifyContent: "flex-start"
  },
  userImage: {
    height: 40,
    width: 40
  },
  image: {
    marginTop: 5,
    height: 400,
    width: 400,
  },
  footer: {
    display: 'flex',
    marginLeft: 10,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "flex-start",
    height: 50,
    minHeight: 40,
    maxHeight: 80
  }
})