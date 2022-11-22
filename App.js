import React, {useState, useEffect, useLayoutEffect} from 'react';
import {LogBox, StatusBar} from 'react-native';
import {Asset} from 'expo-asset';
import AppLoading from "expo-app-loading";
import Loading from './application/components/AppLoading';
import {
  Provider as PaperProvider,
  DefaultTheme as DefaultThemePaper,
} from 'react-native-paper';
import {
  NavigationContainer,
  DefaultTheme as DefaultThemeNav,
} from '@react-navigation/native';
import Navigation from './application/navigation/Navigation';
import ColorsApp from './application/config/ColorsApp';
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
  checkUserApi,
  getUserData,
  setUserData,
  setLogged,
} from './application/config/DataApp';
import UserContext from './application/context/UserContext';
// import AdmobConfig from "./application/config/AdmobConfig";
import LoginSplash from './application/screens/LoginSplash';

DefaultThemePaper.colors.primary = ColorsApp.PRIMARY;
DefaultThemePaper.colors.placeholder = '#959595';
DefaultThemePaper.colors.accent = ColorsApp.PRIMARY;
DefaultThemeNav.colors.background = ColorsApp.BACKGROUND;
DefaultThemeNav.colors.card = ColorsApp.HEADER;
DefaultThemePaper.roundness = 6;

LogBox.ignoreAllLogs();

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const loadAssetsAsync = async () => {
  const imageAssets = cacheImages([
    require('./assets/header.jpg'),
    require('./assets/logo.png'),
    require('./assets/logo-white.png'),
  ]);

  await Promise.all([...imageAssets]);
};

const App = props => {
  const [isReady, setIsReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState([]);

  const updateValue = user => {
    setUser(user);
  };

  const checkUser = async () => {
    try {
      await getUserData().then(resp => {
        if (resp.length >= 1 && resp != null) {
          const email = resp[0]['user_email'];

          setUser(resp[0]);
          updateValue(resp[0]);

          checkUserApi(email).then(response => {
            if (response != 'error') {
              setUserData(response).then(response => {
                setLogged(true);
              });
            } else if (response === 'error') {
              setLogged(false);
            }
          });
        } else {
          setLogged(false);
        }
      });
    } catch (error) {
      setLogged(false);
    }
  };

  useLayoutEffect(() => {
    loadAssetsAsync();
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    setIsReady(true);
    checkUser();
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
    // AdmobConfig.ShowInterstitial();
  }, []);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
  }

  if (!loaded) {
    return <Loading />;
  }

  if (loaded && isReady) {
    return (
      <UserContext.Provider value={{user, updateValue}}>
        <PaperProvider
          theme={DefaultThemePaper}
          settings={{icon: props => <MaterialIcons {...props} />}}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle={'light-content'}
          />
          <NavigationContainer theme={DefaultThemeNav}>
            <Navigation />
            {/* <AdmobBanner /> */}
          </NavigationContainer>
        </PaperProvider>
      </UserContext.Provider>
    );
  }
};

export default App;
