import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { StripeProvider } from "@stripe/stripe-react-native";
import ColorsApp from "../config/ColorsApp";

const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;

export default function CheckOut(props) {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Cabbage",
      image: require("../../assets/adaptive-icon.png"),
      prize: 20,
      noOfItems: 3,
    },

    {
      id: 2,
      name: "Carate of Egg",
      image: require("../../assets/adaptive-icon.png"),
      prize: 40,
      noOfItems: 2,
    },

    {
      id: 3,
      name: "Flour",
      image: require("../../assets/adaptive-icon.png"),
      prize: 25,
      noOfItems: 1,
    },

    {
      id: 4,
      name: "Cooking Oil",
      image: require("../../assets/adaptive-icon.png"),
      prize: 60,
      noOfItems: 4,
    },
    {
      id: 5,
      name: "Cabbage",
      image: require("../../assets/adaptive-icon.png"),
      prize: 20,
      noOfItems: 3,
    },

    {
      id: 6,
      name: "Carate of Egg",
      image: require("../../assets/adaptive-icon.png"),
      prize: 40,
      noOfItems: 2,
    },

    {
      id: 7,
      name: "Flour",
      image: require("../../assets/adaptive-icon.png"),
      prize: 25,
      noOfItems: 1,
    },
  ]);

  return (
    <SafeAreaView style={Styles.Container}>
      <StatusBar backgroundColor="transparent" style="dark" />

      <View style={Styles.main}>
        <View style={StylesHeader.Container}>
          <View style={StylesHeader.view1}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="chevron-back" size={22} />
            </TouchableOpacity>
          </View>
          <View style={StylesHeader.view2}>
            <Text style={StylesHeader.heading}>CheckOut</Text>
          </View>
          <View style={StylesHeader.view3}></View>
        </View>

        <ScrollView>
          <View style={StylesFlat.Container}>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              keyExtractor={(id) => id.id}
              renderItem={({ item, index }) => (
                <Item
                  data={data}
                  setData={setData}
                  index={index}
                  image={item.image}
                  name={item.name}
                  prize={item.prize}
                />
              )}
            />
          </View>

          <StripeProvider
            publishableKey="pk_test_TYooMQauvdEDq54NiTphI7jx"
            urlScheme="www.google.com" // required for 3D Secure and bank redirects
            merchantIdentifier="merchant.com.{{RasaPop}}" // required for Apple Pay
          ></StripeProvider>

          <View style={Styles.label}>
            <Text style={Styles.labelText}>Delivery To</Text>
          </View>

          <AddressCard />

          <View style={Styles.label}>
            <Text style={Styles.labelText}>Payment Summary</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const Item = (props) => {
  return (
    <View style={[StylesFlat.main, { marginTop: props.index == 0 ? "4%" : 0 }]}>
      <View style={StylesFlat.view1}>
        <Image style={StylesFlat.icon} source={props.image}></Image>
      </View>

      <View style={StylesFlat.view2}>
        <Text style={StylesFlat.textName}>{props.name}</Text>
        <Text style={StylesFlat.textPrize}>{`$ ${props.prize}`}</Text>
      </View>

      <View style={StylesFlat.view3}>
        <TouchableOpacity style={StylesFlat.incrementBtn}>
          <Text style={StylesFlat.incrementText}>−</Text>
        </TouchableOpacity>

        <Text style={StylesFlat.prizeText}>{props.prize}</Text>

        <TouchableOpacity style={StylesFlat.incrementBtn}>
          <Text style={StylesFlat.incrementText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AddressCard = (props) => {
  return (
    <View
      style={[StylesAddress.main, { marginTop: props.index == 0 ? "4%" : 0 }]}
    >
      <View style={StylesAddress.view2}>
        <Text style={StylesAddress.textName}>Green Avenue</Text>
        <Text style={StylesAddress.textAddress}>133, Greens Avenue,Lagos</Text>
      </View>

      <View style={StylesAddress.view3}>
        <TouchableOpacity>
          <Text style={StylesAddress.prizeText}>Change Address </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
  },
  main: {
    width: Width * 0.9,
    alignItems: "center",
  },
  ScrollMain: {
    alignItems: "center",
    paddingBottom: 5,
    paddingHorizontal: 1,
  },
  label: {
    width: Width * 0.85,
    justifyContent: "center",
    marginTop: 20,
    height: 40,
  },
  labelText: {
    color: "black",
    fontSize: 16,
    fontWeight: "700",
  },
});

const StylesHeader = StyleSheet.create({
  Container: {
    marginTop: "10%",
    height: "7%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  heading: {
    color: "black",
    fontSize: 18,
    fontWeight: "500",
  },
  view1: {
    width: "20%",
    alignItems: "flex-start",
  },
  view2: { width: "60%", alignItems: "center" },
  view3: { width: "20%" },
});

const StylesFlat = StyleSheet.create({
  Container: {
    height: Height * 0.55,
    alignItems: "center",
  },
  main: {
    width: Width * 0.85,
    marginBottom: "4%",
    height: 70,
    paddingHorizontal: "4%",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 5,
    elevation: 1,
  },

  view1: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
  },
  view2: {
    width: "50%",
    height: "60%",
    justifyContent: "space-between",
  },
  view3: {
    width: "30%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  textName: {
    color: "black",
    fontSize: 14,
    fontWeight: "300",
  },
  textPrize: {
    color: "black",
    fontSize: 13,
    fontWeight: "500",
  },
  incrementBtn: {
    width: 25,
    height: 23,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: ColorsApp.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
  incrementText: {
    color: ColorsApp.PRIMARY,
    fontSize: 15,
  },
  prizeText: {
    color: ColorsApp.PRIMARY,
    fontSize: 12,
    fontWeight: "500",
  },
});

const StylesAddress = StyleSheet.create({
  main: {
    width: Width * 0.85,
    height: 80,
    paddingHorizontal: "4%",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 6,
    elevation: 1,
  },

  view2: {
    width: "65%",
    height: "50%",
    justifyContent: "space-around",
  },
  view3: {
    width: "35%",
    height: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textName: {
    color: "black",
    fontSize: 13,
    fontWeight: "700",
  },
  textAddress: {
    color: "gray",
    fontSize: 12,
    fontWeight: "300",
  },
  prizeText: {
    color: ColorsApp.PRIMARY,
    fontSize: 12,
    fontWeight: "700",
  },
});
