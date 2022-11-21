import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Dimensions,
  Switch,
  ScrollView,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MenuRadeem from '../components/MenuRadeem';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LineChart} from 'react-native-chart-kit';
import ColorsApp from '../config/ColorsApp';

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

const Tab = createMaterialTopTabNavigator();

export default function RadeemPoints(props) {
  const [online, setOnline] = useState(false);
  return (
    <View style={Styles.Container}>
      <StatusBar backgroundColor="transparent" style="dark" />
      <View style={StylesHeader.Container}>
        <View style={StylesHeader.view1}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntDesign name="user" size={22} />
          </TouchableOpacity>
        </View>
        <View style={StylesHeader.view2}>
          <Text style={StylesHeader.heading}>Earnings</Text>
        </View>
        <View style={StylesHeader.view3}>
          <TouchableOpacity>
            <Icon name="ios-notifications-outline" size={22} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={Styles.ScrollMain}
        showsVerticalScrollIndicator={false}>
        <View style={StylesMain.Container}>
          <View style={StylesMain.CardOnline}>
            <View style={StylesMain.CardOnline1}>
              <Icon name="eye" color={ColorsApp.PRIMARY2} size={22} />
            </View>
            <View style={StylesMain.CardOnline2}>
              <Text style={StylesMain.onlineText}>Online</Text>
            </View>
            <View style={StylesMain.CardOnline3}>
              <Switch
                trackColor={{false: 'lightgray', true: ColorsApp.PRIMARY2}}
                thumbColor={online ? 'white' : '#f4f3f4'}
                onValueChange={val => setOnline(val)}
                value={online}
              />
            </View>
          </View>

          <View style={StylesMain.Earning}>
            <Text style={StylesMain.Moneytext}>Money I've Earned</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <EarningCard
                amount={3000}
                text={'Earned      '}
                iconName={'checkmark'}
                iconColor={ColorsApp.PRIMARY}
              />
              <EarningCard
                amount={5000}
                text={'Pending    '}
                iconName={'time-outline'}
                iconColor={ColorsApp.PRIMARY2}
              />
            </View>
          </View>

          <View style={StylesMain.Earning}>
            <Text style={StylesMain.Moneytext}>BreakDown</Text>
          </View>

          <View style={StylesGraphNavigation.Container}>
            <Tab.Navigator
              style={{elevation: 0.4, borderRadius: 10}}
              initialRouteName="Sales Trends"
              screenOptions={StylesGraphNavigation.ScreenOptions}>
              <Tab.Screen
                name="Sales Trends"
                component={() => <GraphTrend />}
              />
              <Tab.Screen name="Clients" component={() => <GraphTrend />} />
              <Tab.Screen name="Activity" component={() => <GraphTrend />} />
            </Tab.Navigator>
          </View>
        </View>
      </ScrollView>
      <MenuRadeem {...props} />
    </View>
  );
}

const EarningCard = props => {
  return (
    <View style={StylesEarningCard.Container}>
      <View style={StylesEarningCard.view1}>
        <View
          style={[
            StylesEarningCard.iconCard,
            {backgroundColor: props.iconColor},
          ]}>
          <Icon name={props.iconName} color={'white'} size={20} />
        </View>
        <Text style={StylesMain.onlineText}>{props.text}</Text>
      </View>

      <View style={StylesEarningCard.view1}>
        <Text style={StylesEarningCard.amount}>{`$ ${props.amount}`}</Text>
      </View>
    </View>
  );
};

const GraphTrend = () => {
  return (
    <LineChart
      data={{
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      width={Width * 0.9}
      height={250}
      withDots={false}
      withInnerLines={false}
      withOuterLines={false}
      yLabelsOffset={3}
      xLabelsOffset={3}
      chartConfig={{
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        backgroundColor: 'white',
        backgroundGradientFrom: ColorsApp.PRIMARY,
        backgroundGradientTo: 'transparent',
        decimalPlaces: 2,
        color: (opacity = 1) => ColorsApp.PRIMARY,
        labelColor: (opacity = 1) => `gray`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
          stroke: 'white',
        },
      }}
      bezier
      style={{marginTop: 10}}
    />
  );
};

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
  },
  ScrollMain: {
    alignItems: 'center',
    paddingBottom: 5,
    paddingHorizontal: 1,
  },
});

const StylesHeader = StyleSheet.create({
  Container: {
    marginTop: '10%',
    height: Height * 0.06,
    width: Width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  heading: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
  view1: {
    width: '20%',
    alignItems: 'flex-start',
    paddingStart: '5%',
  },
  view2: {width: '60%', alignItems: 'center'},
  view3: {width: '20%', alignItems: 'flex-end', paddingEnd: '5%'},
});

const StylesMain = StyleSheet.create({
  Container: {
    flex: 1,
    width: Width * 0.9,
  },
  CardOnline: {
    marginTop: '10%',
    height: 55,
    borderRadius: 13,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  onlineText: {
    color: 'black',
    fontSize: 13,
    fontWeight: '300',
  },
  CardOnline1: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardOnline2: {
    width: '55%',
    height: '100%',
    justifyContent: 'center',
  },
  CardOnline3: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Earning: {
    marginTop: '5%',
  },
  Moneytext: {
    color: 'black',
    fontSize: 17,
    marginBottom: '3%',
    paddingStart: 5,
    fontWeight: '300',
  },
});

const StylesEarningCard = StyleSheet.create({
  Container: {
    height: 90,
    width: 150,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
  },
  view1: {
    flexDirection: 'row',
    width: '70%',
    margin: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconCard: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    color: 'black',
    fontSize: 17,
    fontWeight: '350',
  },
});

const StylesGraphNavigation = StyleSheet.create({
  Container: {
    height: 300,
    borderRadius: 12,
    elevation: 1,
  },
  ScreenOptions: {
    tabBarLabelStyle: {fontSize: 10, fontWeight: '500'},
    tabBarStyle: {
      backgroundColor: 'white',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      elevation: 0.6,
    },
    tabBarInactiveTintColor: 'gray',
    tabBarActiveTintColor: ColorsApp.PRIMARY,
    tabBarIndicatorStyle: {
      backgroundColor: ColorsApp.PRIMARY,
    },
  },
});
