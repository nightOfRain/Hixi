import {
  AppRegistry,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import MenuView from './MenuView';

var StackNavigatorConfig = {
  initialRouteName: 'Main',
  navigationOptions: {
    header: null,
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
//要引入的跳转页面
const MyNavigatior = StackNavigator({
  Main: {
    screen: MenuView
  },
}, StackNavigatorConfig);

export default MyNavigatior;