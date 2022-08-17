import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import tw from 'twrnc';
import React, {FC, useEffect, useState} from 'react';
import swapi from '../swapi';
type Props = NativeStackScreenProps<RootStackParamList, 'Character'>;

const SwapiMainScreen = ({navigation}: Props) => {
  const [swapiData, setSwapiData] = useState<any[]>([]);
  const fetchData = async () => {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    setSwapiData(data.results);
    console.log(data.results);
  };
  // useEffect(() => {

  // }, []);.

  // const navigateToCharacter = () => {
  //   navigation.navigate('Character');
  // };

  return (
    <View style={tw`relative w-full`}>
      {swapiData == [] ? (
        ''
      ) : (
        <TouchableOpacity onPress={fetchData} style={tw`items-center`}>
          <Text style={tw`px-6 py-3 bg-blue-300 rounded-md absolute mt-60`}>Fetch Data</Text>
        </TouchableOpacity>
      )}
      <ScrollView style={tw`w-full bg-slate-100`}>
        {swapiData.map(data => (
          <TouchableOpacity
            key={data.created}
            onPress={() =>
              navigation.navigate('Character', {
                name: data.name,
                height: data.height,
                mass: data.mass,
                hair_color: data.hair_color,
                skin_color: data.skin_color,
                eye_color: data.eye_color,
                birth_year: data.birth_year,
                gender: data.gender,
              })
            }>
            <Text style={tw`p-5 mx-auto font-bold text-xl`} key={data.created}>
              {data.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SwapiMainScreen;
