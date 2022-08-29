import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera'


const CameraScreen = () => {


    const getPermission = async () => {
        const cameraPermission = await Camera.getCameraPermissionStatus()
        const microphonePermission = await Camera.getMicrophonePermissionStatus()
        if (cameraPermission && microphonePermission) {
            const devices = useCameraDevices()
            const device = devices.back
            console.log(device)
        }
    }

    return (
        <View>

        </View>
        // <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    )
}

export default CameraScreen