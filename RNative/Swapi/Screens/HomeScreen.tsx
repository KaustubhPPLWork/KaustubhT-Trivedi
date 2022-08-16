import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
interface Styles {
  container: ViewStyle;
}

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={tw`m-auto`}>
      <TouchableOpacity style={tw`p-5 bg-gray-400 rounded-md mb-35`} onPress={() => navigation.navigate('Login')}>
        <Text style={tw`text-white`}>Go to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create<Styles>({
  container: {
    marginHorizontal: 'auto',
  },
});
