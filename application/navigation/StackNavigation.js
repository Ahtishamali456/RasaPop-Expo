import * as React from "react";
import {
  Dimensions,
  I18nManager,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Strings from "../config/Strings";
import { IconButton } from "react-native-paper";
import Home from "../screens/Home";
import RecipeDetails from "../screens/RecipeDetails";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Members from "../screens/Members";
import SingleMember from "../screens/SingleMember";
import SingleCategory from "../screens/SingleCategory";
import Submit from "../screens/Submit";
import Favorites from "../screens/Favorites";
import Feed from "../screens/Feed";
import ColorsApp from "../config/ColorsApp";
import LoginSplash from "../screens/LoginSplash";
import CheckOut from "../screens/Checkout";
import EditProfile from "../screens/EditProfile";
import RadeemPoints from "../screens/RadeemPoints";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Shop from "../screens/Shop";
import ProfileSeller from "../screens/ProfileSeller";

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const { navigation } = props;

  const onSearch = () => {
    navigation.navigate("search", { string: "" });
  };

  const navigatorOptions = {
    headerStyle: {
      backgroundColor: ColorsApp.PRIMARY,
      shadowColor: "transparent",
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitleStyle: {
      fontSize: 18,
      color: "#fff",
    },
    headerTitleAlign: "center",
  };

  // ******************************** Buttons

  const buttonLeft = () => {
    return (
      <IconButton
        icon="menu"
        color={"#fff"}
        size={24}
        onPress={() => navigation.openDrawer()}
      />
    );
  };

  const buttonBack = () => {
    return (
      <IconButton
        icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"}
        color={"#fff"}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  const buttonBackDark = () => {
    return (
      <IconButton
        icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"}
        color={"#000"}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  const buttonSearch = () => {
    return (
      <IconButton
        icon="magnify"
        color={"#fff"}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  const buttonMenu = () => {
    return (
      <IconButton
        icon="menu"
        color={"#fff"}
        size={24}
        onPress={() => navigation.openDrawer()}
      />
    );
  };

  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: null,
          headerTransparent: true,
          headerLeft: () => buttonMenu(),
        }}
      />
      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="recipe"
        component={RecipeDetails}
        options={({ navigation }) => ({
          title: null,
          headerTransparent: true,
          headerLeft: () => buttonBack(),
        })}
      />
      <Stack.Screen
        name="singlemember"
        component={SingleMember}
        options={({ navigation }) => ({
          title: null,
          headerTransparent: true,
          headerLeft: () => buttonBackDark(),
        })}
      />
      <Stack.Screen
        name="singlecategory"
        component={SingleCategory}
        options={({ navigation }) => ({
          title: null,
          headerLeft: () => buttonBack(),
        })}
      />
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{ title: Strings.ST114, headerLeft: () => buttonBack() }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ title: Strings.ST6, headerLeft: () => buttonBack() }}
      />
      <Stack.Screen
        name="ProfileSeller"
        component={ProfileSeller}
        options={({ navigation }) => ({
          title: "Profile",
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginStart: "15%" }}
              onPress={() => props.navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={22} color={"white"} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginEnd: "15%" }}>
              <AntDesign name="edit" size={22} color={"white"} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="RadeemPoints"
        component={RadeemPoints}
        options={({ navigation }) => ({
          title: "Profile",
          headerBackground: () => (
            <Animated.View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: "#FBFBFB",
              }}
            />
          ),
          headerTitleStyle: { color: "black", fontSize: 17, fontWeight: "600" },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginStart: "15%" }}
              onPress={() => props.navigation.goBack()}
            >
              <AntDesign name="user" size={22} color={"black"} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginEnd: "15%" }}>
              <Ionicons
                name="ios-notifications-outline"
                size={22}
                color={"black"}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="members"
        component={Members}
        options={{ title: Strings.ST5, headerLeft: () => buttonBack() }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{ title: Strings.ST3, headerLeft: () => buttonBack() }}
      />
      <Stack.Screen
        name="submit"
        component={Submit}
        options={{ title: Strings.ST113, headerLeft: () => buttonBack() }}
      />
      <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{ title: Strings.ST4, headerLeft: () => buttonBack() }}
      />
      <Stack.Screen
        name="feed"
        component={Feed}
        options={{ title: Strings.ST29, headerLeft: () => buttonBack() }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: Strings.ST116, headerLeft: () => buttonBack() }}
      />
    </Stack.Navigator>
  );
}
