import React, { useState, useEffect } from "react";

import { getStrings } from "../config/DataApp";
import { View, ScrollView, SafeAreaView } from "react-native";
import { HTMLStyles } from "../config/HTMLStyles";
import HTMLView from "react-native-htmlview";
import Styles from "../config/Styles";
import AppLoading from "../components/AppLoading";
import Strings from "../config/Strings";

export default function Terms() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState("");

  useEffect(() => {
    getStrings().then((response) => {
      setItem(response[0]);
      setIsLoaded(true);
    });
  }, []);

  if (isLoaded) {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView>
          <View style={Styles.TermsAboutPageScreen}>
            <HTMLView value={item.tr_termsandconds} stylesheet={HTMLStyles} />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  } else {
    return <AppLoading />;
  }
}
