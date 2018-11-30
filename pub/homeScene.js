import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';

export default class homeScene extends Component {

	backToLogin = () => {
		const {
			goBack
		} = this.props.navigation;
		goBack();
	}
	render() {
			return (
					<View
		style = {
				styles.container
			} >
			<Text style={styles.content}
				>登陆成功!这里是主页</Text> 
			<
			Button
		onPress = {
			this.backToLogin
		}
		style={
			styles.button
		}
		title='点我返回登陆' / >
			<
			/View>
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
	content: {
		fontSize: 20,
	},

});