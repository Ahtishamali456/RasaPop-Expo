import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  Linking,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Text, Button } from "react-native-paper";
import { getUserData, getLogged, signOutApi } from "../config/DataApp";
import Styles from "../config/Styles";
import CustomButton from "../components/CustomButton";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ConfigApp from "../config/ConfigApp";
import Strings from "../config/Strings";
import UserContext from "../context/UserContext";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function Profile(props) {
  const contextState = useContext(UserContext);
  const { navigation } = props;
  // const [user, setUser] = useState("");
  const [user, setUser] = useState({
    user_name: "Ahtisham",
    user_email: "Ahtishamali456789",
    user_avatar: require("../../assets/icon.png"),
    user_verified: true,
    radeemPoints: 350,
  });
  // const [isLogged, setisLogged] = useState("");
  const [isLogged, setisLogged] = useState("true");

  const openLink = () => {
    const submitUrl = ConfigApp.URL + "submit-recipe";
    Linking.openURL(submitUrl);
  };

  const getUser = async () => {
    getUserData().then((resp) => {
      if (resp != null) {
        setUser(resp[0]);
      }
    });
  };

  const checkLogged = async () => {
    const response = await getLogged();
    setisLogged(response);
  };

  const signOut = async () => {
    contextState.updateValue([]);
    await signOutApi().then((response) => {
      props.navigation.navigate("home");
    });
  };

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen);
  };

  const onClickMember = (id, name) => {
    props.navigation.navigate("singlemember", { id, name });
  };

  useEffect(() => {
    // if (checkLogged() != false) {
    //   getUser();
    // }
  }, []);

  if (isLogged === "true") {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={StylesMain.header}>
            <View style={StylesMain.ImageProfile}>
              <Image
                // source={{ uri: user.user_avatar }}
                source={user.user_avatar}
                style={StylesMain.image}
                resizeMode={"cover"}
              />
              <TouchableOpacity style={StylesImage.touchable}>
                <Icon name="camera" color={"black"} size={22} />
              </TouchableOpacity>
            </View>

            <View style={StylesMain.view2}>
              <View style={{ flexDirection: "row" }}>
                <Text style={StylesMain.user_name}>{user.user_name}</Text>
                {user.user_verified ? (
                  <Icon
                    name="check-decagram"
                    size={22}
                    style={Styles.memberBadge}
                  />
                ) : null}
              </View>
              <View style={StylesImage.radeemPTS}>
                <Icon name="star-shooting" size={23} color={"#FAE375"} />
                <Text
                  style={StylesImage.PTS}
                >{`${user.radeemPoints} pts`}</Text>
              </View>
            </View>

          </View>

          <View
            style={{
              flex: 1,
              marginHorizontal: 30,
              marginTop: 30,
              marginBottom: 40,
            }}
          >
            <CustomButton
              Icon="heart-outline"
              Label={Strings.ST4}
              Click={() => onChangeScreen("favorites")}
            />
            <CustomButton
              Icon="account-edit-outline"
              Label={"Edit Profile"}
              Click={() => onChangeScreen("EditProfile")}
            />
            <CustomButton
              Icon="account-edit-outline"
              Label={"Profile Seller"}
              Click={() => onChangeScreen("ProfileSeller")}
            />
            <CustomButton
              Icon="chess-queen"
              Label={"Radeem Points"}
              Click={() => onChangeScreen("RadeemPoints")}
            />
            {/* <CustomButton
              Icon="format-list-bulleted"
              Label={Strings.ST108}
              Click={() => onClickMember(user.user_id, user.user_name)}
            />
            <CustomButton
              Icon="playlist-edit"
              Label={Strings.ST113}
              Click={openLink}
            /> */}
            <CustomButton
              Icon="logout"
              Label={"LogOut"}
              Click={() => signOut()}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Icon
          name="account-lock"
          color="black"
          size={100}
          style={{ marginBottom: 20 }}
        />
        <Button
          mode="contained"
          style={{ borderRadius: 100 }}
          contentStyle={Styles.SignButtonContent}
          labelStyle={Styles.SignButtonLabel}
          onPress={() => onChangeScreen("Login")}
        >
          {Strings.ST10}
        </Button>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => onChangeScreen("register")}
        >
          <Text style={Styles.SignButtonTextContent}>
            {Strings.ST12}{" "}
            <Text style={{ fontWeight: "bold" }}>{Strings.ST35}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const StylesMain = StyleSheet.create({
  header: {
    height: "38%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ImageProfile: {
    width: 120,
    height: 120,
    marginBottom: 10,
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 150,
  },
  view2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  user_name: {
    color: "black",
    fontSize: 17,
    fontWeight: "700",
    paddingEnd: 10,
  },
});

const StylesImage = StyleSheet.create({
  touchable: {
    width: 30,
    height: 30,
    backgroundColor: "#f3f3f3",
    borderRadius: 50,
    position: "absolute",
    right: "10%",
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  radeemPTS: {
    width: 140,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  PTS: {
    color: "black",
    fontWeight: "bold",
    paddingStart: 10,
  },
});
