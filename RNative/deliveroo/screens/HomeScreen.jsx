/* eslint-disable react-native/no-raw-text */
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import tw from 'twrnc'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
      {/* Header */}
      <View style={tw`flex-row pb-3 items-center mx-4 space-x-2`}>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
        />

        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-xl`}>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View style={tw`flex-row items-center space-x-2 pb-2 mx-4`}>
        <View style={tw`flex-row space-x-2 flex-1 bg-gray-200 p-3`}>
          <SearchIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories Component */}
        <Categories />

        {/* Featured Rows */}

        {/* Featured */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Paid placements from our partners"
        />

        {/* Offers near you */}
        <FeaturedRow
          id="3"
          title="Offers near you"
          description="Paid placements from our partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;