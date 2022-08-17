import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import tw from 'twrnc';

type Props = NativeStackScreenProps<RootStackParamList, 'Character'>;
const CharacterScreen = ({route, navigation}: Props) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = route.params;
  return (
    <View style={tw`bg-black h-full`}>
      <View style={tw`my-auto`}>
        <Text style={tw`text-yellow-400 font-extrabold text-3xl text-center`}>
          Name: {name}
        </Text>
        <Text style={tw`text-yellow-400 text-3xl mt-5 text-center`}>
          Height: {height}
        </Text>
        <Text style={tw`text-yellow-400 text-3xl mt-5 text-center`}>
          Mass: {mass}
        </Text>
        <Text style={tw`text-yellow-400 text-3xl mt-5 text-center`}>
          Hair Color: {hair_color}
        </Text>
        <Text style={tw`text-yellow-400 text-3xl mt-5 text-center`}>
          Skin Color: {skin_color}
        </Text>
        <Text style={tw`text-yellow-400 text-3xl mt-5 text-center`}>
          Eye Color: {eye_color}
        </Text>
        <Text style={tw`text-yellow-400 text-3xl mt-5 text-center`}>
          Birth Year: {birth_year}
        </Text>
        <Text style={tw`text-yellow-400 text-3xl mt-5 text-center`}>
          Gender: {gender}
        </Text>
      </View>
    </View>
  );
};

export default CharacterScreen;
