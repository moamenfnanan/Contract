import React, { useState } from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import Contracting from '../screens/first_open_screen/Contracting'
import Al_Sharqia_Chamber from '../screens/first_open_screen/Al_Sharqia_Chamber'
import Contracting_committee from '../screens/first_open_screen/Contracting_committee'
import HomeScreen from '../screens/MainFlow/HomeScreen'
import Parts from '../screens/MainFlow/Parts'
import Favorites from '../screens/MainFlow/Favorites'
import How_Us from '../screens/MainFlow/How_Us'
import Call_Us from '../screens/MainFlow/Call_Us'
import HomeDetailScreen from '../screens/MainFlow/HomeDetailScreen'
import PartDetails from '../screens/MainFlow/PartDetails'
// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
// import CategoriesReducer from './src/store/reducers/Categories'
// import { enableScreens } from 'react-native-screens';
// import * as Font from 'expo-font';
// import { Asset } from 'expo-asset';
// import { AppLoading } from 'expo'

const Homes = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        header: null
      }
    },
    DetailsScreen: {
      screen: HomeDetailScreen,
      navigationOptions: {
        title: 'التفاصيل',
        header: null,
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? '#7380A1' : '',
        },
        headerTitleStyle: {
          color: 'white'
        }
      }
    }
  }
  )
  
const Partss = createStackNavigator({
    Part: {
      screen: Parts,
      navigationOptions: {
        title: 'Parts',
        header: null
      }
    },
    PartDetailss: {
      screen: PartDetails,
      navigationOptions: {
        title: 'تفاصيل القسم',
        header: null,
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? '#7380A1' : '',
        },
        headerTitleStyle: {
          color: 'white'
        }
      }
    }
  })
  const All = createSwitchNavigator({
    Contracting: Contracting,
    Contracting_committee: Contracting_committee,
    Al_Sharqia_Chamber: Al_Sharqia_Chamber,
    Tabs: createBottomTabNavigator({
      Call_ui: {
        screen: Call_Us,
        navigationOptions: {
          title: 'اتصل بنا',
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name="md-call"
                size={20}
                color='#2D2D2D'
              />
            );
          }
        }
      },
      How_us: {
        screen: How_Us,
        navigationOptions: {
          title: 'من نحن',
          tabBarIcon: tabInfo => {
            return (
              <FontAwesome
                name="question-circle-o"
                size={20}
                color='#2D2D2D'
              />
            );
          }
        }
      },
      Favoriuts: {
        screen: Favorites,
        navigationOptions: {
          title: 'المفضلة',
          tabBarIcon: tabInfo => {
            return (
              <FontAwesome
                name="heart-o"
                size={24}
                color='#2D2D2D'
              />
            );
          }
        }
      },
      _Part: {
        screen: Partss,
        navigationOptions: {
          title: 'الاقسام',
          tabBarIcon: tabInfo => {
            return (
              <FontAwesome
                name="th-large"
                size={25}
                color='#2D2D2D'
              />
            );
          }
        }
      },
      Homee: {
        screen: Homes,
        navigationOptions: {
          title: 'الرئيسية',
          tabBarIcon: tabInfo => {
            return (
              <FontAwesome
                name="home"
                size={25}
                color='#2D2D2D'
              />
            );
          }
        }
      }
    },
      {
        tabBarOptions: {
          activeTintColor: '#111183'
        },
        initialRouteName: 'Homee'
      })
    })
    export default createAppContainer(All)