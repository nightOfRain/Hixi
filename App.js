/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,

  Image,
  View
} from 'react-native';
import {
  Navigator,
} from 'react-native-deprecated-custom-components';
import {
  StackNavigator,
} from 'react-navigation'
import SplashScreen from 'rn-splash-screen';
import TabBar from './tabbar';
import SideMenu from './SideMenu';
import homeScene from './pub/homeScene';
import loginScene from './pub/LoginScene';
import LoginView from './pub/LoginView';
import registerScene from './pub/registerScene';
import ImageSwiper from './pub/ImageSwiper';
import HomeMain from './home/HomeMain';
import UndoMain from './undo/UndoMain';
import ShowMain from './show/ShowMain';
import GradientScreen from './show/HeaderGradient';
import ListViewSimple from './show/example_simple';
import ListViewAdvanced from './show/example_advanced';
import ShowCard from './show/ShowCard';
import ShowViewStyleOne from './show/ShowViewStyleOne';
import ShowImagePicker from './show/ShowImagePicker';
import MenuView from './show/MenuView';
import SettingMain from './setting/SettingMain';
import FinacialAnalysis from './setting/FinacialAnalysis';
import MCalendars from './setting/MCalendars';
import Agenda from './setting/calendars/agenda';
import Calendars from './setting/calendars/calendars';
import CalendarsList from './setting/calendars/calendarsList';
import HorizontalCalendarList from './setting/calendars/horizontalCalendarList';
import ListScreen from './home/ListScreen';
import InputScreen from './home/Textinput';
import BarcodeScreen from './pub/BarcodeScanner';
import WebViewPage from './pub/WebViewPage';
var StackNavigatorConfig = {
  initialRouteName: 'Main',
  navigationOptions: {
    //   header: null,
    //title: 'asdlkfjalsdjfljasldfjla;skjdf',
    //导航栏的Style，设置导航栏的背景颜色
    headerStyle: {
      backgroundColor: '#8ab7fc',
      height: 0, //这是个大坑啊，这里不设置为0，要么主页面（4个子模块）都出现同一个title，还不能改，要么就影响子页面，出现2个标题栏
      paddingTop: 0,
    },
    headerTitleStyle: {
      alignSelf: 'center', //案桌永远居左，据说要改 源码，但是没找到
    },
  }

}

//这里有个大坑，如果嵌套StackNavigator->TabNavigator->StackNavigator（直接放tab的item里） 模式，就会提示 both 的navigation
//如果StackNavigator->TabNavigator->StackNavigator（tab放普通页面，然后跳转到StackNavigator），就会出现在StackNavigator（由tab item页面跳出去的）主页面不能返回的情况
//没有办法的办法，把所有页面都定义在注册页面里面
const MainPage = StackNavigator({
  Main: {
    screen: TabBar
  },
  HomeMain: {
    screen: HomeMain
  },
  UndoMain: {
    screen: UndoMain
  },
  ShowMain: {
    screen: ShowMain
  },
  Gradient: {
    screen: GradientScreen
  },
  ViewSimple: {
    screen: ListViewSimple
  },
  ViewAdvanced: {
    screen: ListViewAdvanced
  },
  ShowCard: {
    screen: ShowCard
  },
  MenuView: {
    screen: MenuView
  },
  SettingMain: {
    screen: SettingMain
  },
  Login: {
    screen: loginScene
  },
  register: {
    screen: registerScene
  },
  List: {
    screen: ListScreen
  },
  Input: {
    screen: InputScreen
  },
  Barcode: {
    screen: BarcodeScreen
  },
  ShowViewStyleOne: {
    screen: ShowViewStyleOne
  },
  ShowImagePicker: {
    screen: ShowImagePicker
  },
  ImageSwiper: {
    screen: ImageSwiper
  },
  FinacialAnalysis: {
    screen: FinacialAnalysis
  },
  MCalendars: {
    screen: MCalendars
  },
  Agenda: {
    screen: Agenda
  },
  Calendars: {
    screen: Calendars
  },
  CalendarsList: {
    screen: CalendarsList
  },
  HorizontalCalendarList: {
    screen: HorizontalCalendarList
  },
  LoginView: {
    screen: LoginView
  },
  WebViewPage: {
    screen: WebViewPage
  }
}, StackNavigatorConfig);



export default class App extends Component {


  render() {
    //return (<SimpleApp />);

    return (
      <MainPage />
    )
  }
}