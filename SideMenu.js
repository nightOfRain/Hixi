import React, {
  Component
} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  View,
  Alert,
  Text,
  PermissionsAndroid,
} from 'react-native';
import Menu from './pub/Menu';
import Show from './show/ShowPage';
import Setting from './SettingPage';

import SideMenus from 'react-native-side-menu';

export default class SideMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };

  }



  componentDidMount() {

  }

  render() {
    const menu = <Menu navigator={this.navigator} />;
    return (
      <SideMenus 
        menu={menu}
        isOpen={this.state.isOpen}
        disableGestures={false}
        hiddenMenuOffset={120} 
        autoClosing={false}
        openMenuOffset={120}
      >
        <Show {...this.props} />
      </SideMenus>
    )
  }
}