import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput,
    TouchableOpacity,
    WebView,

} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../pub/HeaderNew';
import HiHttp from './HiHttpPub';
import {
    Fumi,
} from 'react-native-textinput-effects';
var forge = require('node-forge'); //加密组件
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

var userId = '';
var password = '';
import SpinnerAlert from './SpinnerAlert';

var AlertModal = null;
export default class WebViewPage extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

        this.state = {
            openurl: null,
        };
    }
    backBtn = () => {
        const {
            goBack
        } = this.props.navigation;
        goBack();
    }
    componentDidMount() {
        console.log("openurl=" + this.props.navigation.state.params.openurl);
        this.setState({
            openurl: this.props.navigation.state.params.openurl,
        })
    }

    render() {
        return (
            <View style={styles.container}>
     
        <View style={[styles.header, {margin: 0, paddingTop: 64, height: 100,backgroundColor:'rgba(254, 254, 254, 0)', zIndex:2}]} >
            <TouchableOpacity onPress={this.backBtn} underlayColor="transparent" style={[styles.return]}>
                <View style={[styles.returnBox]}>
                    
                    <Image
                        source={require('../img/shutdown.png')}
                        style={{height:36,width:36}}
                    />
                    
                </View>
            </TouchableOpacity>
     
          
        </View>
                
                   <WebView bounces={false}
                    scalesPageToFit={true}
                    source={{uri:this.state.openurl,method: 'GET'}}
                    style={{width:width_global, height:height_global,marginTop:-100}}>
                  </WebView> 
                
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle: {
        width: 80,
        height: 80,
        marginTop: 50,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'orange',
        marginBottom: 30,
    },
    textInputStyle: {
        backgroundColor: 'white',
        width: width,
        height: 40,
        marginBottom: 1,
        textAlign: 'center',
        paddingLeft: 15,
    },
    loginBtnStyle: {
        height: 40,
        width: width * 0.8,
        backgroundColor: 'blue',
        marginTop: 30,
        marginBottom: 30,
        //flex布局
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    settingStyle: {
        flexDirection: 'row',
        width: width * 0.8,
        justifyContent: 'space-between',
    },
    otherLoginStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 20
    },
    otherImageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10,
    },
    return: {
        width: 100,
        height: 36,
        marginLeft: 14,
    },

    returnBox: {

    },
    header: {
        width: width_global,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 0,
        borderBottomColor: '#cdcdcd',
    },
});