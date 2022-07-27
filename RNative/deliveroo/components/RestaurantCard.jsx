import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import React from 'react';
import tw from 'twrnc'
import { urlFor } from '../sanity';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={tw`bg-white mr-3 shadow mt-2`}>
      <Image source={{ uri: urlFor(imgUrl).url()} } style={tw`h-36 w-64 rounded-sm`} />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
        <Text style={tw`max-w-64`}>{short_description}</Text>
        <View style={tw`flex-row items-center`}>
          <StarIcon color={'green'} opacity={0.5} size={22} style={tw`mx-1`} />
          <Text style={tw`text-xs text-gray-500`}>
            <Text style={tw`text-green-500`}>{rating}</Text>
            . {genre}
          </Text>
        </View>

        <View style={tw`flex-row items-center`}>
          <LocationMarkerIcon color={'gray'} opacity={0.4} size={22} />
          <Text style={tw`text-xs text-gray-500 ml-1 max-w-60`}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;