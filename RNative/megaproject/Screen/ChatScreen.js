import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ChatScreen = () => {
    return (
        <View style={styles.chatScreen}>
            {/* Names of people you have chats with */}
            <TouchableOpacity style={styles.friendsSection}>
                <Image source={require('../Assets/Images/Image.jpg')} style={{ margin: 3, height: 70, width: 70, borderRadius: 50 }} />
                <Text style={{
                    margin: 3,
                    marginRight: 7,
                    top: "6%",
                    fontSize: 20,
                    // fontStyle:""
                }}
                >
                    Kaustubh Trivedi
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChatScreen


const styles = StyleSheet.create({
    chatScreen: {
        backgroundColor: 'white',
        height: '100%',
    },
    friendsSection: {
        display: 'flex',
        margin: 5,
        flexDirection: 'row',
        fontSize: 64
    }
})