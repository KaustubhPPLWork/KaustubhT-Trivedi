import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../App';
import tw from 'twrnc';
import React, {FC, useEffect, useState} from 'react';
import swapi from '../swapi';
// type Props = NativeStackScreenProps<RootStackParamList, 'SwapiMain'>;

const SwapiMainScreen: FC = () => {
  const [swapiData, setSwapiData] = useState<any[]>([]);
  const [rbl, setRbl] = useState(true);

  const fetchData = async () => {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    setSwapiData(data.results);
  };
  // useEffect(() => {

  // }, []);

  return (
    <View>
      {rbl ? (
        <TouchableOpacity onPress={fetchData}>
          <Text style={tw`px-5 py-3`}>Fetch Data</Text>
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}

      {/* <ScrollView style={tw`w-full bg-slate-100`}>
        {swapiData.map(data => (
          <Text style={tw`p-5 mx-auto font-bold text-xl`} key={data.created}>
            {data.name}
          </Text>
        ))}
      </ScrollView> */}
    </View>
  );
};

export default SwapiMainScreen;
