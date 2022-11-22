import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";

const width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen") * 0.4;

export default function LoginSheet(props) {
  return (
    <View style={Styles.Container}>
      <View style={Styles.view2}>
        <TouchableOpacity>
          <SocialButton
            name={"facebook"}
            text={"Continue with Facebook"}
            color={"#39579A"}
            textColor={"white"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <SocialButton
            name={"apple"}
            text={"Continue with Apple"}
            color={"#2D3035"}
            textColor={"white"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <SocialButton
            name={"google"}
            text={"Continue with Google"}
            color={"white"}
            textColor={"black"}
            logocolor={"#ff0000a9"}
            width={0.3}
          />
        </TouchableOpacity>
        <View style={Styles.login}>
          <Text style={Styles.loginText}>Already have an Account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={[Styles.loginText, { fontWeight: "bold" }]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const SocialButton = (props) => {
  return (
    <Icon.Button
      style={{
        width: 250,
        justifyContent: "center",
        borderWidth: props.width,
      }}
      onPress={() => Alert.alert(`${props.name} Pressed`)}
      color={props.logocolor}
      name={props.name}
      borderRadius={8}
      size={25}
      backgroundColor={props.color}
    >
      <Text style={[StylesSocial.text, { color: props.textColor }]}>
        {props.text}
      </Text>
    </Icon.Button>
  );
};

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },
  view2: {
    height: "70%",
    width: width,
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
  },
  login: {
    flexDirection: "row",
  },
  loginText: {
    color: "black",
    fontSize: 12,
    paddingEnd: 5,
  },
});

const StylesSocial = StyleSheet.create({
  main: {
    width: width * 0.6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  text: {
    fontSize: 13,
  },
});
