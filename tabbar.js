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
  Button,
  Image,
  View
} from 'react-native';
import SplashScreen from 'rn-splash-screen';
import TabNavigator from 'react-native-tab-navigator';

import Home from './HomePage';
import Undo from './UndoPage';
import Show from './show/ShowPage';
import Setting from './SettingPage';
const dataSource = [{
  icon: require('./img/home.png'),
  selectedIcon: require('./img/home_active.png'),
  tabPage: 'Show',
  tabName: '首页',
  component: Show
}, {
  icon: require('./img/undo.png'),
  selectedIcon: require('./img/undo_active.png'),
  tabPage: 'Undo',
  tabName: '消息',
  component: Undo
}, {
  icon: require('./img/show.png'),
  selectedIcon: require('./img/show_active.png'),
  tabPage: 'Home',
  tabName: '展示',
  component: Home
}, {
  icon: require('./img/setting.png'),
  selectedIcon: require('./img/setting_active.png'),
  tabPage: 'Setting',
  tabName: '设置',
  component: Setting
}, ]
var navigation = null;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


export default class App extends Component < Props > {
  constructor(props) {
    super(props);

    navigation = this.props.navigation;
    this.state = {
      selectedTab: 'Show',
      badgeText: '1',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Show'}
          title="主页"
          selectedTitleStyle={{color:"#007aff"}}
          renderIcon={()=><Image style={styles.icon} source={require('./img/home.png')}/>}
          renderSelectedIcon={()=><Image style={styles.selectedIcon} source={require('./img/home_active.png')}/>}
          onPress={()=>this.setState({ selectedTab: 'Show'})}>
          <Show  navigation={navigation}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Undo'}
          title="消息"
          badgeText={this.state.badgeText}
          selectedTitleStyle={{color:"#007aff"}}
          renderIcon={()=><Image style={styles.icon} source={require('./img/undo.png')}/>}
          renderSelectedIcon={()=><Image style={styles.selectedIcon} source={require('./img/undo_active.png')}/>}
          onPress={()=>{this.setState({ selectedTab: 'Undo', badgeText: ''});}}>
          <Undo navigation={navigation} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Home'}
          title="展示"
          selectedTitleStyle={{color:"#007aff"}}
          renderIcon={()=><Image style={styles.icon} source={require('./img/show.png')}/>}
          renderSelectedIcon={()=><Image style={styles.selectedIcon} source={require('./img/show_active.png')}/>}
          onPress={()=>this.setState({ selectedTab: 'Home'})}>
          <Home navigation={navigation} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Setting'}
          title="设置"
          selectedTitleStyle={{color:"#007aff"}}
          renderIcon={()=><Image style={styles.icon} source={require('./img/setting.png')}/>}
          renderSelectedIcon={()=><Image style={styles.selectedIcon} source={require('./img/setting_active.png')}/>}
          onPress={()=>this.setState({ selectedTab: 'Setting'})}>
          <Setting navigation={navigation} />
        </TabNavigator.Item>
      </TabNavigator>

    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  icon: {
    width: 23,
    height: 23,
  },
  selectedIcon: {
    width: 23,
    height: 23,
  },
});