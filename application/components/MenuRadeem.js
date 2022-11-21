import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import ColorsApp from '../config/ColorsApp';
import Feather from '@expo/vector-icons/Feather';

const ICON_SIZE = 22;

export default function MenuRadeem() {
  const [index, setindex] = useState(1);
  return (
    <View style={StylesTabBar.Container}>
      <View style={StylesTabBar.view1}>
        <TouchableOpacity
          style={StylesTabBar.TabButton}
          onPress={() => setindex(1)}>
          <Ionicons
            name="home-outline"
            size={ICON_SIZE}
            color={index == 1 ? ColorsApp.PRIMARY : '#1B1E27'}
          />
        </TouchableOpacity>
      </View>
      <View style={StylesTabBar.view1}>
        <TouchableOpacity
          style={StylesTabBar.TabButton}
          onPress={() => setindex(2)}>
          <AntDesign
            name="calendar"
            size={ICON_SIZE}
            color={index == 2 ? ColorsApp.PRIMARY : '#1B1E27'}
          />
        </TouchableOpacity>
      </View>
      <View style={StylesTabBar.view2}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={StylesTabBar.BottomPressBtn}>
            <AntDesign name="plus" size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={StylesTabBar.view3}>
        <TouchableOpacity
          style={StylesTabBar.TabButton}
          onPress={() => setindex(3)}>
          <AntDesign
            name="search1"
            size={ICON_SIZE}
            color={index == 3 ? ColorsApp.PRIMARY : '#1B1E27'}
          />
        </TouchableOpacity>
      </View>
      <View style={StylesTabBar.view3}>
        <TouchableOpacity
          style={StylesTabBar.TabButton}
          onPress={() => setindex(4)}>
          <Feather
            name="bookmark"
            size={ICON_SIZE}
            color={index == 4 ? ColorsApp.PRIMARY : '#1B1E27'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const StylesTabBar = StyleSheet.create({
  Container: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 0.4,
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomPressBtn: {
    marginTop: '-30%',
    width: 55,
    height: 55,
    backgroundColor: ColorsApp.PRIMARY,
    borderRadius: 50,
    marginBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TabButton: {justifyContent: 'center', alignItems: 'center'},
  title2: {
    color: 'black',
    fontSize: 12,
    // fontFamily: "Poppins-Regular",
  },
});
