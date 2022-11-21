import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ColorsApp from "../config/ColorsApp";

const ICON_SIZE = 26;

export default function TabBar(props) {
  const [INDEX, setIndex] = useState(1);
  return (
    <View style={StylesTabBar.Container}>
      <View style={StylesTabBar.view1}>
        <TouchableOpacity
          style={StylesTabBar.TabButton}
          onPress={() => setIndex(1)}
        >
          <Octicons
            name="location"
            size={ICON_SIZE}
            color={INDEX == 1 ? ColorsApp.PRIMARY : "#1B1E27"}
          />
        </TouchableOpacity>
      </View>
      <View style={StylesTabBar.view1}>
        <TouchableOpacity
          style={StylesTabBar.TabButton}
          onPress={() => setIndex(2)}
        >
          <MaterialCommunityIcons
            name="cards-heart-outline"
            size={ICON_SIZE}
            color={INDEX == 2 ? ColorsApp.PRIMARY : "#1B1E27"}
          />
        </TouchableOpacity>
      </View>
      <View style={StylesTabBar.view2}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={StylesTabBar.BottomPressBtn}>
            <AntDesign name="plus" size={25} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={StylesTabBar.view3}>
        <TouchableOpacity
          style={StylesTabBar.TabButton}
          onPress={() => {
            props.navigation.navigate("Shop");
          }}
        >
          <MaterialCommunityIcons
            name="shopping-outline"
            size={ICON_SIZE}
            color={INDEX == 3 ? ColorsApp.PRIMARY : "#1B1E27"}
          />
        </TouchableOpacity>
      </View>
      <View style={StylesTabBar.view3}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("profile")}
          style={StylesTabBar.TabButton}
        >
          <Octicons
            name="person"
            size={ICON_SIZE}
            color={INDEX == 4 ? ColorsApp.PRIMARY : "#1B1E27"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const StylesTabBar = StyleSheet.create({
  Container: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 0.4,
  },
  view1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  BottomPressBtn: {
    marginTop: "-30%",
    width: 55,
    height: 55,
    backgroundColor: ColorsApp.PRIMARY,
    borderRadius: 50,
    marginBottom: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  TabButton: { justifyContent: "center", alignItems: "center" },
  title2: {
    color: "black",
    fontSize: 12,
  },
});
