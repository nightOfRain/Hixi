import React, {
	Component
} from 'react';
import {
	Alert,
	AppRegistry,
	Platform,
	Button,
	StyleSheet,
	ScrollView,
	Image,
	Text,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
	ToastAndroid,
	View
} from 'react-native';

export default class Textinput extends Component {
	static navigationOptions = {
		title: "textinput",
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
		)

	};

	backVC = () => {
		this.props.navigation.goBack();
	}

	btn_press() {
		const {
			navigate
		} = this.props.navigation;
		navigate('TabPage', {
			name: 'Jane'
		})
	};

	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};

		this.btn_press = this.btn_press.bind(this);
	}

	_onPressButton() {
		Alert.alert('You tapped the button!');
	}

	_onLongPressButton() {
		Alert.alert('You long-pressed the button!');
	}

	render() {
		const {
			navigate
		} = this.props.navigation;
		return (
			<ScrollView style={{padding: 10}}>
				<View style={{flex:1,paddingTop:20}}>
					<TextInput
					style={{height:40}}
					placeholder="Type here to translate!"
					onChangeText={(text) => this.setState({text})}
					/>

					<Text style={{padding: 10, fontSize:42}}>
						{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
					</Text>
					<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
				</View>
				
				<View style={styles.container}>
					<View style={styles.buttonContainer}>
						<Button
							onPress={()=>{this.backVC()}}
							title="点我谢谢！！"
						/>
					</View>
					<View style={styles.buttonContainer}>
						<Button
							onPress={this._onPressButton}
							title="Press Me"
							color="#841584"
						/>
					</View>
					<View style={styles.alertnativeLayoutButtonContainer}>
						<Button
							onPress={this._onPressButton}
							title="This looks great!"
						/>
						<Button
							//onPress={this._onPressButton}
							onPress={this.btn_press}
							title="Cancel!"
							color="#841584"
						/>
						<Button
							onPress={this._onPressButton}
							title="Ok!"
							color="#841584"
						/>
					</View>
				</View>
				<View style={{flex:5,alignItems:'center',paddingTop: 20}}>
					<TouchableHighlight onPress={this._onPressButton} underlayColor="white">
						<View style={styles.button}>
							<Text style={styles.buttonText}>TouchableHighlight</Text>
						</View>
					</TouchableHighlight>
					
					<TouchableOpacity onPress={this._onPressButton}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>TouchableOpacity</Text>
						</View>
					</TouchableOpacity>
					
					<TouchableNativeFeedback
						onPress={this._onPressButton}
						background={Platform.OS === 'android'? TouchableNativeFeedback.SelectableBackground():''}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>TouchableNativeFeedback</Text>
						</View>
					</TouchableNativeFeedback>	

					<TouchableWithoutFeedback
						onPress={this._onPressButton}
						>
						<View style={styles.button}>
							<Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
						</View>
					</TouchableWithoutFeedback>

					<TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton}
						underlayColor="white">
						<View style={styles.button}>
							<Text style={styles.buttonText}>Touchable with Long Press</Text>
						</View>
					</TouchableHighlight>
				</View>
			</ScrollView>


		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		justifyContent: 'center',
	},
	buttonContainer: {
		margin: 20
	},
	alertnativeLayoutButtonContainer: {
		margin: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button: {
		marginBottom: 30,
		width: 260,
		alignItems: 'center',
		backgroundColor: '#2196F3'
	},
	buttonText: {
		padding: 20,
		color: 'white'
	}
})