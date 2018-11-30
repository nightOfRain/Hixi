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
import Header from '../pub/HeaderNew';
import * as CacheManager from 'react-native-http-cache';

import {
  ActionSheetCustom as ActionSheet
} from 'react-native-actionsheet';

import Alipay from 'react-native-yunpeng-alipay';


const options = [
  'Cancel',
  'Apple',
  <Text style={{color: 'yellow'}}>Banana</Text>,
  'Watermelon',
  <Text style={{color: 'red'}}>Durian</Text>
];
export default class ShowPage extends Component {

  //不用组件自己的抬头
  static navigationOptions = ({
    navigation,
    screenProps
  }) => {
    return ({
      header: null
    })
  }

  backBtnFunc = () => {
    //this.props.navigation.goBack();
    Alert.alert("backBtnFunc");
  }
  doneBtnFunc = () => {
    //this.props.navigation.goBack();
    Alert.alert("doneBtnFunc");
  }

  btn_press = () => {
    const {
      navigate
    } = this.props.navigation;
    navigate('TabPage', {
      name: 'Jane'
    })
  };
  goBack = () => {
    const {
      goBack
    } = this.props.navigation;
    goBack();
  }
  constructor(props) {
    super(props);

    this.state = {
      username: '无名氏',
      barcodeResult: '',

    };

  }
  _onScroll = (event) => {
    var Y = event.nativeEvent.contentOffset.y;
    console.log("y=" + Y);

    var st = 0;
    if (Y < 100) {
      st = Y * 0.01;
    } else {
      st = 1;
    }
    var alphas = 'rgba(254, 254, 254, ' + st + ')';



    this._refHeader.setNativeProps({
      // opacity: st
      backgroundColor: alphas
    })


  }
  _onPressButton = () => {
    Alert.alert('You tapped the button!');
  }

  _onLongPressButton = () => {
    Alert.alert('You long-pressed the button!');
  }

  //Actionsheet展示
  showActionsheet = () => {
    console.log('showActionsheet');
    this.ActionSheet.show();
  }

  //Actionsheet选中提示
  selectedActionsheet = (index) => {
    console.log('selectedActionsheet:' + index);
    Alert.alert('ActionSheet提示',
      '您选择了第' + index + '个ActionSheet', [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'Ok',
        onPress: () => console.log('Ok Pressed')
      }, ], );
  }
  //二维码展示
  showBarcodescanner = () => {
    console.log('showBarcodescanner');
    const {
      navigate
    } = this.props.navigation;



    navigate('Barcode', {
      getUrl: (url) => {
        console.log('BarcodeScannerinfo:' + url);
        this.setState({
          barcodeResult: url
        })
      }
    });


  }

  //缓存管理
  showCacheManager = () => {
    console.log('showCacheManager:' + CacheManager.getCacheSize());
    var datasize;
    CacheManager.getCacheSize()
      .then(data => {
        data = data / (1024 * 1024);
        datasize = data.toFixed(2) + "M";
      })
      .catch(err => {
        console.log(err)
      });

    Alert.alert('CacheManager',
      '缓存' + datasize + ',点击OK清除缓存', [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'Ok',
        onPress: () => {
          console.log('Ok Pressed');
          CacheManager.clearCache();
        }
      }, ], );
  }

  aliPay = () => {
    console.log("点击进行支付");
    //这里需要做一个请求，获取服务器支付订单信息
    let data = 'partner=\"asdfasdf\"&seller_id=\"asdfasdf@qq.com\"&out_trade_no=\"ALIPAY15307684880120000000001\"&subject=\"描述\"&body=\"在线支付\"&total_fee=\"0.01\"&notify_url=\"http://xx.xx.xx.xx/api/0/alipay/alipayCallback\"&service=\"m.pay\"&payment_type=\"1\"&_input_charset=\"utf-8\"&it_b_pay=\"30m\"&sign=\sdfasdf\"&sign_type=\"RSA\"';
    Alipay.pay(data).then(function(data) {
      console.log(data);
    }, function(err) {
      console.log(err);
    });

  }

  showGradient = () => {
    const {
      navigate
    } = this.props.navigation;
    navigate('Gradient', {
      name: 'Gradient'
    })
  }
  render() {
    const {
      navigate
    } = this.props.navigation;
    let statusBar = Platform.select({
      ios: 20,
      android: 20,
    });
    return (
      <View style={{flex:1}}>
        <View style={[styles.header, {margin: 0, paddingTop: statusBar, height: statusBar + 44,backgroundColor:'rgba(254, 254, 254, 0)', zIndex:2}]} ref={(e) => this._refHeader = e}>
                <TouchableOpacity onPress={this.goBack} underlayColor="transparent" style={[styles.return]}>
                    <View style={[styles.returnBox]}>
                        
                        <Image
                            source={require('../img/back_btn.png')}
                            style={[styles.headerReturnIcon]}
                        />
                        
                    </View>
                </TouchableOpacity>
                <Text style={[styles.title]}>
                    {"渐变色抬头"}
                </Text>
                <TouchableOpacity onPress={this.goBack} underlayColor="transparent" style={[styles.done]}>
                    <Image
                            source={require('../img/home_active.png')}
                            style={[styles.headerReturnIcon]}
                        />
                </TouchableOpacity>
            </View>
      <ScrollView style={{padding: 10,marginTop:-65}} onScroll={this._onScroll} scrollEventThrottle={10}>

        
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.showActionsheet}
              title="展示ActionSheet"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.showCacheManager}
              title="展示缓存管理"
              color="#841584"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Text style={{width:200}}>{this.state.barcodeResult}</Text>
          </View>
          <View style={styles.alertnativeLayoutButtonContainer}>
            <Button
              onPress={this.showBarcodescanner}
              title="展示二维码"
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
          <TouchableHighlight onPress={this.aliPay} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>支付宝支付</Text>
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
              <Text style={styles.buttonText}>渐变色抬头</Text>
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
        <View>
          <ActionSheet
            ref={o => this.ActionSheet = o}
            title={<Text style={{color: '#000', fontSize: 18}}>Which one do you like?</Text>}
            options={options}
            cancelButtonIndex={0}
            destructiveButtonIndex={4}
            onPress={this.selectedActionsheet}
          />
        </View>

      </ScrollView>

      </View>
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
  },
  header: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderBottomColor: '#cdcdcd',
  },
  title: {
    color: '#2c2c2c',
    height: 44,
    lineHeight: 44,
    fontSize: 20,
  },
  return: {
    width: 100,
    height: 36,
    marginLeft: 24,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  done: {
    width: 100,
    height: 36,
    marginRight: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  returnBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerReturnIcon: {
    width: 36,
    height: 36,
  },
  headerReturnText: {
    color: '#2c2c2c',
    height: 36,
    lineHeight: 36,
    fontSize: 20,
  },
  doneBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerDoneIcon: {
    width: 36,
    height: 36,
  },
  headerDoneText: {
    color: '#2c2c2c',
    height: 36,
    lineHeight: 36,
    fontSize: 36,
  },
});