import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import ColorsApp from '../config/ColorsApp';

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export default function ProfileSeller(props) {
  const [selected, setSelected] = useState(true);
  return (
    <SafeAreaView style={Styles.Container}>
      <StatusBar backgroundColor="transparent" style="light" />

      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <ImageBackground
          source={require('../../assets/adaptive-icon.png')}
          resizeMode={'cover'}
          style={Styles.headerBackground}>
          <View style={StylesHeader.Container}>
            <View style={StylesHeader.view1}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Ionicons name="chevron-back" size={22} color={'white'} />
              </TouchableOpacity>
            </View>
            <View style={StylesHeader.view2}>
              <Text style={StylesHeader.heading}>Earnings</Text>
            </View>
            <View style={StylesHeader.view3}>
              <TouchableOpacity>
                <AntDesign name="edit" size={22} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={Styles.main}>
          <Image
            source={require('../../assets/icon.png')}
            style={Styles.image}
          />

          <View style={Styles.view1}>
            <Text style={Styles.title}>Ahtisham Abid</Text>
            <View style={Styles.view2}>
              <View style={Styles.view3}>
                <Text style={Styles.text1}>423</Text>
                <Text style={Styles.text2}>Followers</Text>
              </View>

              <View style={Styles.view3}>
                <Text style={Styles.text1}>123</Text>
                <Text style={Styles.text2}>Following</Text>
              </View>
            </View>
            <Text style={[Styles.text2, {textAlign: 'center'}]}>
              An application programming interface is a way for two or more
              computer programs to communicate with each other.
            </Text>
          </View>

          <View style={StylesSelecter.Container}>
            <TouchableOpacity
              onPress={() => setSelected(true)}
              style={[
                StylesSelecter.btn,
                {backgroundColor: selected ? 'white' : 'transparent'},
              ]}>
              <Text
                style={[
                  StylesSelecter.btnText,
                  {
                    color: selected ? ColorsApp.PRIMARY : 'white',
                  },
                ]}>
                Posts
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected(false)}
              style={[
                StylesSelecter.btn,
                {backgroundColor: !selected ? 'white' : 'transparent'},
              ]}>
              <Text
                style={[
                  StylesSelecter.btnText,
                  {color: !selected ? ColorsApp.PRIMARY : 'white'},
                ]}>
                Shop
              </Text>
            </TouchableOpacity>
          </View>
          <Post />
          <Post />
          <Post />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Post = () => {
  return (
    <View style={StylesPost.Container}>
      <View style={{width: '88%', height: '100%'}}>
        <View style={StylesPost.view1}>
          <Text style={StylesPost.textdate}>Jan 17,2021</Text>
          <SimpleLineIcons name="options" size={12} color={'lightgray'} />
        </View>
        <Text style={StylesPost.title}>Health Benifits</Text>
        <Text style={StylesPost.description}>
          An API is a way for two or more computer programs to communicate with
          each other.
        </Text>

        <Image
          source={require('../../assets/header.jpg')}
          style={StylesPost.image}
        />
        <View style={StylesPost.socialIcons}>
          <View style={StylesPost.socialIcons2}>
            <TouchableOpacity>
              <AntDesign name="message1" size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="hearto" size={20} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Entypo name="direction" size={20} />
            </TouchableOpacity>
          </View>
          <View style={StylesPost.socialIcons3}>
            <TouchableOpacity>
              <Fontisto name="bookmark" size={22} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  headerBackground: {
    width: '100%',
    height: Height * 0.38,
  },
  main: {
    flex: 1,
    width: Width,
    marginTop: '-5%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 90,
    elevation: 20,
    marginTop: '-15%',
    borderRadius: 15,
  },
  view1: {
    width: Width * 0.8,
    height: Height * 0.18,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  view2: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text1: {
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
  },
  text2: {
    color: 'black',
    fontSize: 12,
    fontWeight: '200',
  },
  view3: {
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '45%',
  },
});

const StylesHeader = StyleSheet.create({
  Container: {
    top: '10%',
    height: Height * 0.06,
    width: Width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  view1: {
    width: '20%',
    alignItems: 'flex-start',
    paddingStart: '5%',
  },
  view2: {width: '60%', alignItems: 'center'},
  view3: {width: '20%', alignItems: 'flex-end', paddingEnd: '5%'},
});

const StylesSelecter = StyleSheet.create({
  Container: {
    width: Width * 0.8,
    height: 40,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: ColorsApp.PRIMARY,
  },
  btn: {
    width: '48%',
    height: '85%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

const StylesPost = StyleSheet.create({
  Container: {
    width: Width * 0.9,
    height: 320,
    elevation: 3,
    borderRadius: 7,
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: '4%',
  },
  view1: {
    marginTop: '3%',
    marginBottom: '0.8%',
    width: '100%',
    height: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textdate: {
    color: 'gray',
    fontSize: 11,
    fontWeight: '200',
  },
  title: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  description: {
    marginTop: '1%',
    marginBottom: '3%',
    color: 'black',
    fontSize: 11,
    fontWeight: '300',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  socialIcons: {
    width: '100%',
    height: '10%',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  socialIcons2: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  socialIcons3: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginEnd: '2%',
  },
});
