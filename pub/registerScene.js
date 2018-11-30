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
	Button
} from 'react-native';
var username = '';
var password = '';
var repassword = '';
export default class registerScene extends Component {

	onUsernameChanged = (newUserName) => {
		this.username = newUserName;
		console.log('username=' + this.username);
	}

	onPasswordChanged = (newPassword) => {
		this.password = newPassword;
		console.log('password=' + this.password);
	}
	onRePasswordChanged = (newRePassword) => {
		this.repassword = newrePassword;
		console.log('repassword=' + this.repassword);
	}
	blurTextInput = () => {
		this.refs.username.blur();
		this.refs.password.blur();
		this.refs.repassword.blur();
	}
	register = () => {
		if (this.username != 'Admin') {
			if (this.password === this.repassword) {
				const {
					goBack
				} = this.props.navigation;
				navigate('Home');
				Alert.alert("注册成功", "返回登陆", [{
					text: '确定',
					onPress: () => {
						goBack();
					}
				}]);
			} else {
				Alert.alert("注册失败", "密码确定失败");
			}
		} else {
			Alert.alert("注册失败", "此用户名已经被注册")
		}
	}

	render() {
		return (

			<TouchableOpacity
				activeOpacity={1.0}
				onPress={this.blurTextInput}
				style={styles.container}>
				<View
					style={styles.inputBox}>
					<TextInput
						onChangeText={this.onUsernameChanged}
						style={styles.input}
						autoCapitalize='none' //首字母不自动大写
						underlineColorAndroid={'transparent'} //下划线改为透明
						placeholderTextColor={'#ccc'}
						placeholder={'用户名'}
						ref="username"
						/>
				</View>
				<View
					style={styles.inputBox}>
					<TextInput
						onChangeText={this.onPasswordChanged}
						style={styles.input}
						autoCapitalize='none' //首字母不自动大写
						underlineColorAndroid={'transparent'} //下划线改为透明
						placeholderTextColor={'#ccc'}
						placeholder={'密码'}
						ref="password"
						/>
				</View>
				<View
					style={styles.inputBox}>
					<TextInput
						onChangeText={this.onRePasswordChanged}
						style={styles.input}
						autoCapitalize='none' //首字母不自动大写
						underlineColorAndroid={'transparent'} //下划线改为透明
						placeholderTextColor={'#ccc'}
						placeholder={'确认密码'}
						ref="repassword"
						/>
				</View>
			
				<TouchableOpacity
					style={styles.button}>
					<Text
						style={styles.btText}>注册</Text>
				</TouchableOpacity>
			</TouchableOpacity>
		)
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FFFF',
	},
	input: {
		width: 200,
		height: 40,
		fontSize: 20,
		color: '#fff'
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
		height: 50,
		width: 280,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		backgroundColor: '#58812F',
		marginTop: 20,
	},
	btText: {
		color: '#fff',
		fontSize: 20,
	}
});