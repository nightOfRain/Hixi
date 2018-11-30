import React from 'react';
import {
	Alert,
	AppRegistry,
	Platform,
	Button,
	StyleSheet,
	ScrollView,
	Image,
	Text,
	FlatList,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
	ToastAndroid,
	View
} from 'react-native';


var searchKey;
var self = {};
var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
export default class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		self.props = props;
		this.state = {
			loaded: true,
			data: null,
		};


	}

	onTextInput = (searchKey) => {
		this.searchKey = searchKey;
	}

	fetchData = () => {
		fetch(REQUEST_URL)
			.then((response) => response.json())
			.then((responseData) => {
				console.log("responseData=" + JSON.stringify(responseData));
				// 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
				this.setState({
					//movies: responseData.movies,
					data: responseData.movies,
					loaded: true,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	renderMovie = ({
		item
	}) => {
		const {
			navigate
		} = self.props.navigation;

		return (


			<TouchableHighlight 
		onPress = {
			() =>
			navigate('Login', {
				name: 'Animate'
			})
		}
		        underlayColor="white">
          
		<View style={styles.container} >
		        <Image source={{uri: item.posters.thumbnail}} style={styles.thumbnail}/>
		        <View style={styles.rightContainer}>
		          <Text style={styles.title}>{item.title}</Text>
		          <Text style={styles.year}>{item.year}</Text>
		        </View>
		      </View>
	      </TouchableHighlight>

		);
	}

	handleSearchTextInputChange = (searchText) => {
		console.log("SearchBox text=" + searchText);
		this.searchKey = searchText;
	}

	render() {
		return (
			<View style={styles.searchBox}>
				
				<View style={styles.searchInput}>
					<Image source={require('../img/search.png')}
						style={styles.searchIcon}>
					</Image>
			 		<TextInput				
			 			underlineColorAndroid="transparent"
						placeholder = "Search..."
						style={styles.textInput}
						ref="searchKey"
						onChangeText = {
							(text) => this.handleSearchTextInputChange(text)
							//this.handleSearchTextInputChange
						}
					/>
					<TouchableOpacity 
						style={styles.searchButton}
						onPress={this.fetchData}>
						<Text style="styles.text">搜索</Text>
					</TouchableOpacity>
				</View>
				
				<View>
					<FlatList
						data = {
							this.state.data
						}
						renderItem = {
							this.renderMovie
						}
						style = {
							styles.list
						}
						/>
				</View>
			</View>

		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FcFF"
	},
	searchBox: {
		flex: 1,
		backgroundColor: "#F5FcFF",
		padding: 15,
	},
	searchButton: {
		//alignSelf: 'flex-end',

	},
	searchIcon: {
		width: 15,
		height: 15,
	},
	searchInput: {
		height: 40,
		backgroundColor: '#fff',
		borderRadius: 10,
		paddingLeft: 25,
		flexDirection: 'row',
		alignItems: 'center',
	},
	textInput: {
		width: 200,
		marginLeft: 10,
	},
	text: {
		color: "#0391ff",
		fontSize: 14
	},
	searchResult: {


	},
	rightContainer: {
		flex: 1,
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center',
	},
	year: {
		textAlign: 'center'
	},
	thumbnail: {
		marginLeft: 20,
		width: 53,
		height: 81,
	},
	list: {
		paddingTop: 20,
		backgroundColor: '#F5FCFF',
	},

});