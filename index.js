/** @format */

import {
	AppRegistry
} from 'react-native';
//import App from './pub/LoginScene';
import './pub/Storage';
import App from './App';
import {
	name as appName
} from './app.json';

AppRegistry.registerComponent(appName, () => App);