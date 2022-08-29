import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'


const Header = () => {
    const navigation = useNavigation()
    return (
        <View>
            {/* Header */}
            <View style={styles.header}>
                {/* For Logo View */}
                <View>
                    <TouchableOpacity>
                        <Text style={styles.headerContent}>Logo</Text>
                    </TouchableOpacity>
                </View>
                {/* For Chat button and Camera Button */}
                <View style={{ display: 'flex', flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                        <Text style={styles.headerContent}>CameraIcon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.headerContent}>Chats</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Main Feed */}
            {/* Navigation */}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: "white",
        alignSelf: "stretch",
        paddingHorizontal: 10
    },
    headerContent: {
        margin: 5,
        padding: 5,
        backgroundColor: "white"
    }
})