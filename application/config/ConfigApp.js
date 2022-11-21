//////////////////// CONFIG APP

// import Constants from "expo-constants";

// const isStandAloneApp = Constants.appOwnership == "standalone";

const ConfigApp = {
  // backend url (with slash at end)
  URL: "https://wicombit.com/demo/realfood/",

  CONTACTEMAIL: "support@wicombit.com",

  // android banner admob unit id
  ANDROID_BANNER_ID: "ca-app-pub-3940256099942544/6300978111",

  // android interstitial admob unit id
  ANDROID_INTERSTITIAL_ID: "ca-app-pub-3940256099942544/1033173712",

  // ios banner admob unit id
  IOS_BANNER_ID: "ca-app-pub-3940256099942544/6300978111",

  // ios interstitial admob unit id
  IOS_INTERSTITIAL_ID: "ca-app-pub-3940256099942544/1033173712",

  // testdevice id, DON'T CHANGE IT
  // TESTDEVICE_ID: isStandAloneApp ? "EMULATOR" : "EMULATOR",
};

export default ConfigApp;
