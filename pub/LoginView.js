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
export default class loginView extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            userId: '',
            password: '',
        };
    }
    backBtn = () => {
        const {
            goBack
        } = this.props.navigation;
        goBack();
    }
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
            this.props.navigation.state.params.callback("登陆成功");
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

        // this.timer = setTimeout(() => {
        //     HiHttp.send(url, options, this.onSuccess, this.onError);
        // }, 10000);

        HiHttp.send(url, options, this.onSuccess, this.onError);

    }

    unlogin = () => {
        Alert.alert('unlogin');
    }
    zfblogin = () => {
        Alert.alert('zfblogin');
    }
    weixlogin = () => {
        Alert.alert('weixlogin');
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
            <View style={styles.container}>
            <SpinnerAlert
                            ref={(AlertModal) => this.AlertModal=AlertModal}
                            title="加载中。。。。"
                            />
        <Header {...this.props} 
        backBtnFunc = {
            this.backBtn
        }
            doneBtnFunc={this.doneBtnFunc} 
            backUrl={require('../img/back.png')}
            title="登陆"
            showBack={true}
            showDone={false}
            
            ></Header>
                {/*{头像}*/}
                <Image source={require('../img/testheader.png')} style={styles.iconStyle}/>
                <View style={{width:width_global,padding:10,height:180,}}>
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
                    style={{height:70}}
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
                    secureTextEntry={true}                   
                    iconColor={'#77116a'}
                    ref="password"
                    style={{height:70}}
                  />
                </View>
                <TouchableOpacity
                                    onPress={this.login}
                                    >
                <View style={styles.loginBtnStyle}>
                    <Text style={{color:'white'}}>登录</Text>
                </View>
                </TouchableOpacity>
                {/*设置*/}
                <View style={styles.settingStyle}>
                    <TouchableOpacity
                                    onPress={this.unlogin}
                                    >
                        <Text>无法登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                                    onPress={this.register}
                                    >
                        <Text>新用户</Text>
                    </TouchableOpacity>
                </View>
                {/*三方登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>其他登录方式</Text>
                    <TouchableOpacity
                                    onPress={this.zfblogin}
                                    >
                        <Image source={require('../img/zfb.png')} style={styles.otherImageStyle}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                                    onPress={this.weixlogin}
                                    >
                        <Image source={require('../img/weixin.png')} style={styles.otherImageStyle}></Image>
                    </TouchableOpacity>
                    
                </View>
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    done: {
        width: 100,
        height: 36,
        marginRight: 14,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    returnBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});