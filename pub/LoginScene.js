import React, {
	Component
} from 'react';

import {
	TouchableOpacity,
	StyleSheet,
	TextInput,
	View,
	Text,
	Alert,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
	KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scrollview'
import {
	Kaede,
	Hoshi,
	Jiro,
	Isao,
	Madoka,
	Akira,
	Hideo,
	Kohana,
	Makiko,
	Sae,
	Fumi,
} from 'react-native-textinput-effects';
import HiHttp from './HiHttpPub';

//import HiHttp from 'react-native-http-fetch';
var forge = require('node-forge');
var userId = '';
var password = '';
var code = '';
var Dimensions = require('Dimensions');
var widths = Dimensions.get('window').width;
var heights = Dimensions.get('window').height;
var heightf = 0 - heights;
import SpinnerAlert from './SpinnerAlert';

var AlertModal = null;
export default class LoginScene extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			userId: '',
			password: '',
		};
		this.blurTextInput = this.blurTextInput.bind(this);
	}

	static navigationOptions = {
		title: 'LoginScene',
		tabBarLabel: 'LoginScene',
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

	        </View>
		),
		headerPressColorAndroid: 'blue', //点击按钮显示的颜色（按住不放时）
		headerTintColor: 'red', //返回按钮颜色
		gesturesEnabled: true, //是否允许右滑返回，IOS上默认是true,Android默认false

	};
	componentDidMount() {
		storage.load({
			key: 'userinfo',
			id: '1001'
		}).then(ret => {
			this.setState({
				userId: ret.userId,
				password: ret.password,
			})
			console.log("success" + JSON.stringify(ret));
		}).catch(err => {
			console.log("error" + err.message);
			switch (err.name) {
				case 'NotFoundError':
					// TODO;
					break;
				case 'ExpiredError':
					// TODO
					break;
			}
		})
	}
	onuserIdChanged = (newuserId) => {
		if (newuserId === '') return;
		this.userId = newuserId;
		this.setState({
			userId: newuserId,
		})
		console.log('userId=' + this.userId);
	}

	onPasswordChanged = (newPassword) => {
		if (newPassword === '') return;
		this.password = newPassword;
		this.setState({

			password: newPassword,
		})
		console.log('password=' + this.password);
	}

	onSuccess = (result, status) => {

		this.AlertModal.hide();
		console.log("Success: status:" + status + ";result=" + JSON.stringify(result));

		if (result.responseCode === 'AAAA') {
			var userinfo = {
				userId: this.state.userId,
				password: this.state.password,
				accessToken: result.responseData.accessToken
			}

			storage.save({
				key: 'userinfo',
				id: '1001',
				data: userinfo,
				expires: null
			});


			//this.props.navigation.state.params.getUrl(url);
			this.props.navigation.state.params.callback("能收到么");
			const {
				goBack
			} = this.props.navigation;
			goBack();

		} else {
			Alert.alert("交易失败:" + result.responseMsg);
		}

	}

	onError = (result, status) => {
		this.AlertModal.hide();
		console.log("Error: status:" + status + ";result=" + JSON.stringify(result));
	}
	login = () => {
		this.AlertModal.show();
		var md = forge.md.md5.create();
		md.update(this.state.password);
		var md5_password = md.digest().toHex();


		var options = {};
		var data = {
			userId: this.state.userId,
			password: md5_password,
			userType: '1'
		}


		var url = "http://47.92.33.167:8002/ssm/app/6001";

		options.body = data;
		this.timer = setTimeout(() => {
			HiHttp.send(url, options, this.onSuccess, this.onError);
		}, 10000);



	}

	register = () => {
		const {
			navigate
		} = this.props.navigation;
		navigate('TabBar');
	}

	blurTextInput = () => {
		this.refs.userId.blur();
		this.refs.password.blur();

	}

	render() {
		return (



			<KeyboardAwareScrollView
			        enableOnAndroid={true}
			        extraScrollHeight={-15}
			        
			      >
		<SpinnerAlert
			      			ref={(AlertModal) => this.AlertModal=AlertModal}
			      			title="加载中。。。。"
			      			/>
			      <View style={styles.container}>
			      					      
					<View						
						onPress= {
							this.blurTextInput
						}
						style={[styles.card1, { paddingTop:50, }]}>
						<View style={[styles.card2, { backgroundColor: '#a9ceca' }]}>
				          <Text style={styles.title}>Fumi</Text>
				          <Fumi
				            label={'账号'}
				            labelStyle={{ color: '#a3a3a3' }}
				            inputStyle={{ color: '#f95a25' }}
				            value = {this.state.userId}
				            onChangeText={this.onuserIdChanged}
				            iconClass={AntDesign}
				            iconName={'user'}
				            iconColor={'#f95a25'}
				            iconSize={15}
				            ref="userId"
				          />
				          <Fumi
				            style={styles.input}
				            label={'密码'}
				            value = {this.state.password}
				            labelStyle={{ color: '#a3a3a3' }}
				            inputStyle={{ color: '#f95a25' }}
				            onChangeText={this.onPasswordChanged}
				            iconClass={AntDesign}
				            iconName={'lock'}
				            password={true}			            
				            iconColor={'#77116a'}
				            ref="password"
				          />
				          <View style={{marginTop:20}}>
					          <TouchableOpacity
									onPress={this.login}
									>
									<View style={styles.button}>
										<Text style={styles.buttonText}>Login</Text>
									</View>
								</TouchableOpacity>

								<TouchableOpacity onPress={this.register} 
									underlayColor="white">
									<View style={styles.button}>
										<Text style={styles.buttonText}>注册</Text>
									</View>
								</TouchableOpacity>
							</View>
				        </View>
						
		
				</View>
				</View>
				</KeyboardAwareScrollView>

		)
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		alignItems: 'center',
		//marginTop: heightf,
		//height: heights,
		//backgroundColor: '#d35400',
	},
	spinnerView: {
		margin: 0,
		paddingTop: 0,
		height: heights,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(155, 155, 155, 0.3)',
		zIndex: 2
	},

	content: {
		// not cool but good enough to make all inputs visible when keyboard is active
		paddingBottom: 300,
	},
	card1: {
		flex: 1,
		//paddingVertical: 16,
	},
	card2: {
		padding: 16,
	},
	input: {
		marginTop: 4,
	},
	title: {
		paddingBottom: 16,
		textAlign: 'center',
		color: '#404d5b',
		fontSize: 20,
		fontWeight: 'bold',
		opacity: 0.8,
	},
	inputBox: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: 280,
		height: 50,
		borderRadius: 8,
		backgroundColor: '#58812F',
		marginBottom: 9,
	},
	button: {
		marginBottom: 30,
		width: 280,
		height: 50,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2196F3'
	},
	btText: {
		color: '#fff',
		fontSize: 20,
	},
	image: {
		marginLeft: 20,
		width: 100,
		height: 40,
	}
});