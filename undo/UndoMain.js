import {
	AppRegistry,
} from 'react-native';
import {
	StackNavigator,
} from 'react-navigation';
import ListScreen from './ListScreen';
import InputScreen from './Textinput';
//要引入的跳转页面
const MyNavigatior = StackNavigator({
	Main: {
		screen: ListScreen
	},
	NewPage: {
		screen: InputScreen
	},
});

export default MyNavigatior;