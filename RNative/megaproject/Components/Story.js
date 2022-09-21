import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Story = () => {
    return (
        <View horizontal={true}>
            <TouchableOpacity style={styles.storyContainer}>
                {/* <Text style={styles.storyBlock}>Kaustubh Trivedi</Text> */}
            </TouchableOpacity>
        </View>
    )
}

export default Story


const styles = StyleSheet.create({
    storyContainer: {
        margin: 5,
        minWidth: 80,
        maxHeight: 80,
        maxWidth: 80,
        minHeight: 80,
        padding: 10,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: 'black',
        backgroundColor: "red",
        marginBottom: 20,

    },
    storyBlock: {
        top: 6
    }
})