import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IconButton } from "react-native-paper";
import ModalNavigation from "./ModalNavigation";
import DrawerContent from "./DrawerContent";
import LoginSplash from "../screens/LoginSplash";
import Login from "../screens/Login";
import Strings from "../config/Strings";

const Drawer = createDrawerNavigator();

const Navigation = (props) => {
  const buttonBack = () => {
    return (
      <IconButton
        icon="close"
        size={24}
        onPress={() => props.navigation.goBack()}
      />
    );
  };
  return (
    <Drawer.Navigator
      initialRouteName="app"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Main"
        component={ModalNavigation}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="LoginSplash"
        component={LoginSplash}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default Navigation;
