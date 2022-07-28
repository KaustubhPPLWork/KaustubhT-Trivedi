import { View, Text, ScrollViewComponent, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { ArrowLeftIcon, ChevronRightIcon, LocationMarkerIcon, StarIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from 'twrnc'
import { urlFor } from '../sanity'

const RestaurantScreen = () => {
    const navigation = useNavigation()

    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    } } = useRoute()


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <ScrollView>
            <View style={tw`relative`}>
                <Image source={{ uri: urlFor(imgUrl).url() }} style={tw`w-full h-56 bg-gray-300 p-4`} />
                <TouchableOpacity style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full`} onPress={() => navigation.goBack()}>
                    <Text style={tw`text-xl text-teal-500`}>{"<-"}</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`bg-white`}>
                <View style={tw`px-4 pt-4`}>
                    <Text style={tw`text-xl font-bold`}>{title}</Text>
                    <View style={tw`flex-row my-1`}>
                        <View style={tw`flex-row items-center mr-2`}>
                            <StarIcon color={"green"} opacity={0.5} size={22} style={tw`mr-1`} />
                            <Text style={tw`text-xs text-gray-500`}><Text style={tw`text-green-500`}>{rating}</Text>{genre}</Text>
                        </View>
                        <View style={tw`flex-row items-center`}>
                            <LocationMarkerIcon color={"gray"} opacity={0.4} size={22} style={tw`mr-1`} />
                            <Text style={tw`text-xs text-gray-500 max-w-64`}>{address}</Text>
                        </View>
                    </View>
                    <Text style={tw`text-gray-500 mt-2 pb-4`}>{short_description}</Text>
                </View>
                <TouchableOpacity style={tw`flex-row items-center p-2 border-y border-gray-300`}>
                    <QuestionMarkCircleIcon color={'gray'} opacity={0.6} size={20} style={tw`mr-2`}/>
                    <Text style={tw`pl-2 flex-1 text-md font-bold mr-1`}>Have a food allergy?</Text>
                    <ChevronRightIcon color={'#00CCBB'} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>Menu</Text>
                {/* Dish Rows */}
                {dishes.map(dish=>(
                    <DishRow />
                ))}
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen