import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import * as SolidIcons from 'react-native-heroicons/solid'
import * as OutlineIcons from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import InstagramLogo from '../Assets/Brands/Instagram_Glyph_Black.png'
import SvgImage from 'react-native-svg'
import React from 'react'


const Header = () => {
    const navigation = useNavigation()
    return (
        <View>
            {/* Header */}
            <View style={styles.header}>
                {/* For Logo View */}
                <View style={styles.headerContent}>
                    <TouchableOpacity>
                        <Text>Logo</Text>
                    </TouchableOpacity>
                </View>
                {/* For Chat button and Camera Button */}
                <View style={{ display: 'flex', flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                        <Text style={styles.headerContent}><OutlineIcons.CameraIcon size={25} color="black" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                        <Text style={styles.headerContent}><OutlineIcons.ChatBubbleBottomCenterIcon size={25} color="black" /></Text>
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