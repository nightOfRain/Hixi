import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Button,
	Text,
	Animated,
	Vibration,
	PixelRatio,
	View
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';

const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
const px2dp = px => PixelRatio.roundToNearestPixel(px);

var Dimensions = require('Dimensions');

var widths = Dimensions.get('window').width;
var heights = Dimensions.get('window').height;


export default class Barcode extends Component {
	static navigationOptions = {
		title: '扫描二维码',
		tabBarLabel: '扫描二维码',
		//导航栏的Style，设置导航栏的背景颜色
		headerStyle: {
			backgroundColor: '#8ab7fc',
			height: 65,
			paddingTop: 20,
		},
		//导航栏的title的style
		headerTitleStyle: {
			color: 'green',
			alignSelf: 'center', //alignSelf就是指不用父页面的样式（默认是继承）
		},
		//右边按钮 - 左边按钮默认是一个箭头，这里就不写了（自定义可以覆盖）
		headerRight: (
			<View style={{
	          paddingRight:15,
	          height:44,
	          width:55,
	          justifyContent: 'center',
	          
	        }}>
	        <Text>{'click'}</Text>
	        </View>
		),
		headerPressColorAndroid: 'blue', //点击按钮显示的颜色（按住不放时）
		headerTintColor: 'red', //返回按钮颜色
		gesturesEnabled: true, //是否允许右滑返回，IOS上默认是true,Android默认false

	};
	constructor(props) {
		super(props);

		this.state = {
			barcode: '',
			cameraType: 'back',
			text: '扫描二维码',
			torchMode: 'off',
			type: '',
			top: new Animated.Value(0),
		};
	}
	componentDidMount() {
		console.log("win_width=" + Dimensions.get('window').width);
		console.log("win_height=" + Dimensions.get('window').height);
		const that = this;
		this.interval =
			setInterval(function() {
				Animated.timing(that.state.top, {
					toValue: 1,
					duration: 2200
				}).start(() => that.setState({
					top: new Animated.Value(0)
				}))
			}, 2260)
	}
	barcodeReceived = (e) => {
		if (e.data !== this.state.barcode || e.type !== this.state.type) {
			Vibration.vibrate();
		}

		console.log('Barcode: ' + e.data);
		console.log('Type: ' + e.type);
		console.log('Text: ' + `${e.data}(${e.type})`);
		this.setState({
			barcode: e.data,
			text: e.data,
			type: e.type,
		});



		// if (this.props.getUrl) {
		// 	let url = `${e.data}(${e.type})`;
		// 	this.props.getUrl(url);
		// }
		let url = `${e.data}`;
		this.props.navigation.state.params.getUrl(url);
		const {
			goBack
		} = this.props.navigation;
		goBack();
	}

	render() {
		return (
			<View style={styles.container}>
			<BarcodeScanner
							onBarCodeRead={this.barcodeReceived}
							style={{flex:1}}
							torchMode={this.state.torchMode}
							cameraType={this.state.cameraType}
							/>
							<View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 ,}}>					
				            	<View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',height: heights-130,width:widths}}>
				            		<View style={{width:widths/2+20, height:widths/2+20,paddingLeft:widths/4}}>
										<Animated.View style={{ width: widths/2,
						                  height: px2dp(2),
						                  backgroundColor: '#37b44a',
						                  transform: [{
						                    translateY: this.state.top.interpolate({
						                      inputRange: [0, 1],
						                      outputRange: [5, (heights-130)/3-5]
						                    })
						                  }]}}/>
					                </View>
								</View>					           
                  			</View>

			<View style = {
				styles.statusBar
			} >
			<Text style={styles.statusBarText}>{this.state.text}</Text> 
			
			</View> 
			</View>



		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	statusBar: {
		height: 65,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.1)',

		flexDirection: 'row',
	},
	statusBarText: {
		fontSize: 20,
		flex: 1,
		alignSelf: 'center',
	},
	box: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.6)',
	},
	kuang: {
		width: 260,
		height: 260,
		borderWidth: 1,
		borderColor: 'skyblue',
		backgroundColor: 'rgba(255,255,255,0.1)',
	}

});