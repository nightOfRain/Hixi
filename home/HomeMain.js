import {
	AppRegistry,
} from 'react-native';
import {
	StackNavigator,
} from 'react-navigation';
import ListScreen from './ListScreen';
import InputScreen from './Textinput';
var StackNavigatorConfig = {
	headerMode: 'float'
}
//要引入的跳转页面
const MyNavigatior = StackNavigator({
	Main: {
		screen: ListScreen
	},
	NewPage: {
		screen: InputScreen
	},
}, StackNavigatorConfig);

export default MyNavigatior;