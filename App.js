import React,{useState} from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import Contracting from './src/screens/first_open_screen/Contracting'
import Al_Sharqia_Chamber from './src/screens/first_open_screen/Al_Sharqia_Chamber'
import Contracting_committee from './src/screens/first_open_screen/Contracting_committee'
import HomeScreen from './src/screens/MainFlow/HomeScreen'
import Parts from './src/screens/MainFlow/Parts'
import Favorites from './src/screens/MainFlow/Favorites'
import How_Us from './src/screens/MainFlow/How_Us'
import Call_Us from './src/screens/MainFlow/Call_Us'
import HomeDetailScreen from './src/screens/MainFlow/HomeDetailScreen'
import PartDetails from './src/screens/MainFlow/PartDetails'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import CategoriesReducer from './src/store/reducers/Categories'
import { enableScreens } from 'react-native-screens';
// import * as Font from 'expo-font';
// import {AppLoading} from 'expo'
// const [dataLoaded, setDataLoaded] = useState(false);

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/Cairo-SemiBold.ttf'),
//     'open-sans-bold': require('./assets/Cairo-Regular.ttf'),
//     // 'Barlow-ExtraLight': require('./assets/fonts/Barlow-ExtraLight.ttf')
//   });
// };
// if (!dataLoaded) {
//   return (
//     <AppLoading
//       startAsync={fetchFonts}
//       onFinish={() => setDataLoaded(true)}
//       onError={err => console.log(err)}
//     />
//   );
// }

const rootReducer = combineReducers({
  Category: CategoriesReducer
});
enableScreens();
const store = createStore(rootReducer)

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
const App = createAppContainer(All)
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};