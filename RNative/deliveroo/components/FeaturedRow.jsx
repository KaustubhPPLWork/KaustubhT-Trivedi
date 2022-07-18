import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import tw from 'twrnc'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
                <Text style={tw`font-bold text-lg`}>{title}</Text>
                <ArrowRightIcon color="#00ccbb" />
            </View>

            <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>

            <ScrollView
                horizontal
                StickyHeaderComponent
                contentContainerStyle={{ paddingHorizontal: 15 }} // this is the inner scroll view style
                showsHorizontalScrollIndicator={false}
                style={tw`pt-4`} // this is the overall scroll view style
            />

            {/* Restaurants Cards */}
            <RestaurantCard
                id={123}
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is a test description"
                dishes={[]}
                long={20}
                lat={0}
            />
        </View>
    );
};

export default FeaturedRow;