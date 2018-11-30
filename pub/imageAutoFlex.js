import React, {
	Component
} from 'react';
import {
	Image,
	StyleSheet,
	Platform,
	TouchableOpacity,
	Text,
	View
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
var Dimensions = require('Dimensions');
var widths = Dimensions.get('window').width;
var heights = Dimensions.get('window').height;

export default class imageAutoFlex extends Component {
	constructor(props) {
		super(props);

	}


	backBtnFunc = () => {

		this.props.backBtnFunc ? this.props.backBtnFunc.call(null) : this.props.navigator.pop();
	}

	render() {

		return (
			<TouchableOpacity onPress={this.props.backBtnFunc} underlayColor="transparent">   
				<View style={styles.container}>     
	                <View style={{flex:2, padding:5,flexDirection:'column'}}>                           
	                    <Text style={styles.mainTitle}>{this.props.sourceData.mainTitle}</Text>    
	                    <Text style={styles.context}>{this.props.sourceData.context}</Text> 
	                    <View style={styles.sonContainer}>
	                    	<Text style={styles.redText}>{this.props.sourceData.sonTitle}</Text> 
	                    	<AntDesign name="heart" size={10} style={styles.litImg} color='#f1f1f1'/>
	                    	<Text style={styles.litText}>{this.props.sourceData.text1}</Text> 
	                    	<AntDesign name="smile-circle" size={10} style={styles.litImg} color='#f1f1f1'/>
	                    	<Text style={styles.litText}>{this.props.sourceData.text2}</Text> 
	                    </View>	                             
	                </View>  
	                <View style={{flex:1, padding:5}}>
	                	 <Image source={this.props.sourceData.imgurl}  style={{width:width_global/3-10, height:width_global/3-30}} />   
	                </View>
                </View>
            </TouchableOpacity>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width_global,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#f1f1f1',
	},
	mainTitle: {
		fontWeight: '500',
		fontSize: 16
	},
	context: {
		marginTop: 15,
		color: '#999',
		fontSize: 12,
	},
	sonContainer: {
		paddingTop: 10,
		marginTop: 10,
		flex: 1,
		flexDirection: 'row',
	},
	redText: {
		borderWidth: 1,
		borderColor: 'red',
		color: 'red',
		fontSize: 10,
		borderRadius: 2,
		textAlign: 'center',
		height: 14,
		lineHeight: 14,
		marginRight: 10,
	},
	litText: {
		marginRight: 10,
		marginLeft: 5,
		fontSize: 10,
		color: "#999",
	},

	litImg: {
		marginTop: 2,
	}


});