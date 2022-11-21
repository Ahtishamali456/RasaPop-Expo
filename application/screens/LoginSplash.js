import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import LoginSheet from '../components/LoginSheet';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function LoginSplash(props) {
  return (
    <View style={Styles.Container}>
      <View style={Styles.View1}>
        <TouchableOpacity
          style={Styles.skip}
          onPress={() => props.navigation.goBack()}>
          <Text style={Styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Image
          source={require('../../assets/logo.png')}
          style={Styles.image}></Image>
      </View>
      <LoginSheet {...props} />
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#97D0E1',
  },
  View1: {
    width: width,
    height: height * 0.55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
  skip: {
    position: 'absolute',
    top: '10%',
    right: '5%',
    width: 70,
    height: 28,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    backgroundColor: '#727473',
  },
  skipText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
});
