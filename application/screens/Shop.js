import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function Shop() {
  const [seacrhText, setSerachText] = useState("");
  const [sellers, setSellers] = useState([
    {
      id: 1,
      name: "Ahtisham",
      pic: require("../../assets/adaptive-icon.png"),
    },
    {
      id: 2,
      name: "Zeeshan",
      pic: require("../../assets/header.jpg"),
    },
    {
      id: 3,
      name: "Shehriyar",
      pic: require("../../assets/Splash.png"),
    },
    {
      id: 4,
      name: "Talha",
      pic: require("../../assets/header.jpg"),
    },
    {
      id: 5,
      name: "Mohab",
      pic: require("../../assets/Splash.png"),
    },
    {
      id: 6,
      name: "Zamin",
      pic: require("../../assets/adaptive-icon.png"),
    },
    {
      id: 7,
      name: "Afnan",
      pic: require("../../assets/header.jpg"),
    },
    {
      id: 8,
      name: "Touseef",
      pic: require("../../assets/adaptive-icon.png"),
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tomatto",
      pic: require("../../assets/adaptive-icon.png"),
      calories: 80,
      backgroundColor: "lightgreen",
      prize: 1200,
    },
    {
      id: 2,
      name: "Borocolli",
      pic: require("../../assets/header.jpg"),
      calories: 40,
      backgroundColor: "lightblue",
      prize: 600,
    },
    {
      id: 3,
      name: "Shehriyar",
      pic: require("../../assets/Splash.png"),
      calories: 60,
      backgroundColor: "lightblue",
      prize: 600,
    },
    {
      id: 4,
      name: "Mushroom",
      pic: require("../../assets/header.jpg"),
      calories: 30,
      backgroundColor: "lightpink",
      prize: 700,
    },
  ]);

  return (
    <SafeAreaView style={Styles.Container}>
      <View style={Styles.label}>
        <Text style={[Styles.labelText, { fontWeight: "600" }]}>Shop</Text>
      </View>

      <View style={StylesSeacrh.Container}>
        <View style={StylesSeacrh.icon}>
          <TouchableOpacity>
            <AntDesign name="search1" size={16} color={"#808080a1"} />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Search Recepies"
          value={seacrhText}
          onChangeText={(text) => {
            setSerachText(text);
          }}
          style={StylesSeacrh.textInput}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={Styles.label}>
          <Text style={[Styles.labelText, { fontWeight: "600" }]}>
            Features Sellers
          </Text>
        </View>

        <View style={StylesSellers.Container}>
          <FlatList
            style={StylesSellers.FlatList}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            contentContainerStyle={{ alignItems: "center" }}
            data={sellers}
            keyExtractor={(id) => id.id}
            numColumns={3}
            renderItem={(item) => (
              <TouchableOpacity style={StylesSellers.main}>
                <View style={StylesSellers.view2}>
                  <Image style={StylesSellers.image} source={item.item.pic} />
                  <Text style={StylesSellers.text}>{item.item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={Styles.label}>
          <Text style={[Styles.labelText, { fontWeight: "600" }]}>
            Features Product
          </Text>
        </View>

        <View style={StylesProducts.Container}>
          <FlatList
            style={{ width: WIDTH * 0.9 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
            data={products}
            nestedScrollEnabled
            keyExtractor={(id) => id.id}
            numColumns={2}
            renderItem={(item) => (
              <View style={StylesProducts.main}>
                <View style={StylesProducts.main2}>
                  <TouchableOpacity
                    style={[
                      StylesProducts.image1,
                      { backgroundColor: item.item.backgroundColor },
                    ]}
                  >
                    <Image
                      source={item.item.pic}
                      style={StylesProducts.image2}
                    />
                  </TouchableOpacity>
                  <View style={StylesProducts.view2}>
                    <Text style={StylesProducts.text1}>{item.item.name}</Text>
                    <Text
                      style={StylesProducts.text2}
                    >{`${item.item.calories} Cal`}</Text>
                  </View>
                  <View style={StylesProducts.view3}>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={StylesProducts.text3}
                      >{`$ ${item.item.prize}`}</Text>
                      <Text style={StylesProducts.text4}>{`/Kg`}</Text>
                    </View>
                    <TouchableOpacity style={StylesProducts.plusBtn}>
                      <Text style={StylesProducts.plusBtnText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F9FBFB",
  },
  label: {
    width: WIDTH * 0.9,
    height: 40,
    marginTop: 15,
    marginBottom: 5,
    justifyContent: "center",
  },
  labelText: {
    color: "black",
    fontSize: 18,
  },
});

const StylesSeacrh = StyleSheet.create({
  Container: {
    width: WIDTH * 0.9,
    height: 40,
    borderRadius: 30,
    flexDirection: "row",
    shadowColor: "gray",
    shadowOffset: 3,
    backgroundColor: "white",
  },
  textInput: {
    width: "85%",
    fontSize: 14,
    fontFamily: "Cerebri-Bold",
  },
  icon: {
    height: "100%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const StylesSellers = StyleSheet.create({
  Container: {
    width: WIDTH * 0.9,
    alignItems: "center",
  },
  FlatList: {
    width: WIDTH * 0.88,
  },
  main: {
    margin: 5,
    width: 100,
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#FFFFFE",
  },
  view2: {
    width: "60%",
    height: "80%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  text: {
    color: "black",
    fontSize: 12,
    fontWeight: "300",
  },
});

const StylesProducts = StyleSheet.create({
  Container: {
    width: WIDTH * 0.9,
    alignItems: "center",
  },
  main: {
    margin: 5,
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: "space-around",
    // elevation: 3,
    backgroundColor: "#FFFFFE",
  },
  main2: {
    height: "85%",
    justifyContent: "space-between",
  },
  image1: {
    alignSelf: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  image2: {
    alignSelf: "center",
    width: 35,
    height: 35,
    borderRadius: 10,
  },
  text1: {
    paddingHorizontal: "10%",
    color: "black",
    fontSize: 12,
    fontWeight: "500",
  },
  text2: {
    paddingHorizontal: "10%",
    color: "gray",
    fontSize: 12,
    fontWeight: "300",
  },
  text3: {
    paddingStart: "10%",
    color: "#efef4d",
    fontSize: 12,
    fontWeight: "500",
  },
  text4: {
    color: "gray",
    fontSize: 12,
    fontWeight: "300",
  },
  view2: {
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  plusBtn: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginEnd: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3B7970",
  },
  plusBtnText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
});
