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
  ImageBackground,
  Text,
  TextInput,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ToastAndroid,
  View,
  Linking
} from 'react-native';


import ImagePicker from 'react-native-image-picker';
import {
  ButtonGroup,
  Badge,
} from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  ActionSheetCustom as ActionSheet
} from 'react-native-actionsheet';

import Swiper from 'react-native-swiper';
import ImageAutoFlex from '../pub/imageAutoFlex';
var cols = 5;
var boxW = width_global / (cols + 1);
var vMargin = boxW / (cols + 1);
var hMargin = 25;
var imagesData = [{
    'imgurl': require('../img/hzw1.jpg'),
    'text': '武汉热干面',
    'id': '1',
  }, {
    'imgurl': require('../img/hzw2.jpg'),
    'text': '武汉热干面',
    'id': '2',
  }, {
    'imgurl': require('../img/hzw3.jpg'),
    'text': '武汉热干面',
    'id': '3',
  }, {
    'imgurl': require('../img/wqw1.jpg'),
    'text': '武汉热干面',
    'id': '4',
  }, {
    'imgurl': require('../img/wqw2.jpg'),
    'text': '武汉热干面',
    'id': '5',
  },

];

var imagesDataTwo = [{
    'imgurl': require('../img/yjy1.jpg'),
    'text': '武汉热干面',
    'id': '1',
  }, {
    'imgurl': require('../img/testheader.png'),
    'text': '武汉热干面',
    'id': '2',
  }, {
    'imgurl': require('../img/yjy3.jpg'),
    'text': '武汉热干面',
    'id': '3',
  }, {
    'imgurl': require('../img/yjy4.jpg'),
    'text': '武汉热干面',
    'id': '4',
  }, {
    'imgurl': require('../img/yjy5.jpg'),
    'text': '武汉热干面',
    'id': '5',
  }, {
    'imgurl': require('../img/yjy6.jpg'),
    'text': '武汉热干面',
    'id': '6',
  },

];
const options = [
  'Cancel',
  'Apple',
  <Text style={{color: 'yellow'}}>Banana</Text>,
  'Watermelon',
  <Text style={{color: 'red'}}>Durian</Text>
];


export default class ShowPage extends Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      swiperShow: true,
      swiperIndex: 0,
      sourceData: [],

    };

  }

  componentDidMount() {

    var datas = [{
      'imgurl': require('../img/yjy6.jpg'),
      'mainTitle': '寻找清凉之武汉山水两日游',
      'context': '2天 | 6家美食 | 2个景点',
      'sonTitle': '山水之旅',
      'text1': '4.3万',
      'text2': '25',
      'id': '1',
    }, {
      'imgurl': require('../img/yjy6.jpg'),
      'mainTitle': '寻找清凉之武汉山水两日游',
      'context': '2天 | 6家美食 | 2个景点',
      'sonTitle': '山水之旅',
      'text1': '4.3万',
      'text2': '25',
      'id': '2',
    }, {
      'imgurl': require('../img/yjy6.jpg'),
      'mainTitle': '寻找清凉之武汉山水两日游',
      'context': '2天 | 6家美食 | 2个景点',
      'sonTitle': '山水之旅',
      'text1': '4.3万',
      'text2': '25',
      'id': '3',
    }, {
      'imgurl': require('../img/yjy6.jpg'),
      'mainTitle': '寻找清凉之武汉山水两日游',
      'context': '2天 | 6家美食 | 2个景点',
      'sonTitle': '山水之旅',
      'text1': '4.3万',
      'text2': '25',
      'id': '4',
    }, {
      'imgurl': require('../img/yjy6.jpg'),
      'mainTitle': '寻找清凉之武汉山水两日游',
      'context': '2天 | 6家美食 | 2个景点',
      'sonTitle': '山水之旅',
      'text1': '4.3万',
      'text2': '25',
      'id': '5',
    }];
    console.log("datas=" + JSON.stringify(datas));
    this.setState({
      sourceData: datas
    });
    console.log("componentDidMount");
    imagesData.map((item, index) => {
      console.log("text=" + item.text + ";index=" + index);
    })
    setTimeout(() => {
      this.setState({
        swiperShow: true,
      });
    }, 1000);

  }

  updateIndex = (selectedIndex) => {
    console.log('selectedIndex=' + selectedIndex);
    this.setState({
      selectedIndex: selectedIndex,
    })
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

  goOpenUrl = () => {
    var url = 'https://720.3vjia.com/Q155501250';
    // Linking.openURL(url);
    const {
      navigate
    } = this.props.navigation;



    navigate('WebViewPage', {
      openurl: url,
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

  showCardView = () => {
    const {
      navigate
    } = this.props.navigation;
    navigate('ShowCard', {
      name: 'ShowCard'
    })
  }
  showListView = () => {
    const {
      navigate
    } = this.props.navigation;
    navigate('ShowViewStyleOne', {
      name: 'ShowViewStyleOne'
    })
  }
  showMenuView = () => {
    const {
      navigate
    } = this.props.navigation;
    navigate('MenuView', {
      name: 'MenuView'
    })
  }
  showViewSimple = () => {
    const {
      navigate
    } = this.props.navigation;
    navigate('ViewSimple', {
      name: 'ViewSimple'
    })
  }
  showViewAdvanced = () => {
    const {
      navigate
    } = this.props.navigation;
    navigate('ViewAdvanced', {
      name: 'ViewAdvanced'
    })
  }

  //打印storage里面的用户信息
  printUserInfo = () => {
    storage.load({
      key: 'userinfo',
      id: '1001'
    }).then(ret => {
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

  //图片选择器
  imagePicker = () => {
    // ImagePicker.launchCamera(options, (response) => {
    //   // Same code as in above section!
    //   console.log('uri = ', response.uri);
    // });
    var options = {
      title: 'Select Avatar',
      customButtons: [{
        name: '自定义渠道',
        title: 'Choose Photo from Facebook'
      }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error);
      } else if (response.customButtons) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: response.uri
        };
        console.log('uri = ', response.uri);
      }
    });
  }
  //二维码展示
  showImagePickerView = () => {
    console.log('showImagePickerView');
    const {
      navigate
    } = this.props.navigation;



    navigate('ShowImagePicker', {
      name: 'ShowImagePicker',
    });


  }
  alertMsg = (msg) => {
    //console.log('msg=' + msg);
  }

  changeSwiper = (index) => {
    this.setstate({
      swiperIndex: index,
    })
  }

  touchSwiper = () => {
    Alert.alert("当前索引:" + this.state.swiperIndex);
  }
  //轮播
  renderSwiper = () => {
    if (this.state.swiperShow) {
      return (
        <Swiper
          style={styles.warpper}
          height={ 110 }
          showsButtons={false}
          removeClippedSubviews={false}
          autoplay={true}
          horizontal={true}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          onIndexChanged={(index)=>{this.setState({
            swiperIndex:index,
          });}}
        >
          <Image source={require('../img/slider1.jpg')} style={styles.bannerImg} />
          <Image source={require('../img/slider2.jpg')} style={styles.bannerImg} />
          <Image source={require('../img/slider3.jpg')} style={styles.bannerImg} />
          <Image source={require('../img/slider4.jpg')} style={styles.bannerImg} />
        </Swiper>
      );
    } else {
      return (
        <View style={styles.warpper}>
          <Image source={require('../img/slider1.jpg')} style={styles.bannerImg} />
        </View>
      );
    }
  }

  //图片回调函数
  imageOnPress = (id) => {
    console.log("imageOnPress:" + id);
  }
  renderFlexImage = (item, index) => {

    var num = index < 3 ? 3 : 2;
    //console.log("num = " + num);
    var ind = item.id;
    return (
      <TouchableOpacity onPress={(ind)=>{this.imageOnPress(ind)}} underlayColor="transparent">        
                <View style={{width:(width_global-4)/num,height:width_global/4, padding:2,}}>
                    <Image source={item.imgurl}  style={{width:(width_global-4*(num+1))/num,height:width_global/4-4}} />             
                    <Text style={{height:20,width:(width_global-20)/num,color:'#fff',backgroundColor:'rgba(2, 2, 2, 0.3)',marginTop:-20,textAlign:'left',paddingLeft:10,}}>{item.text}</Text>             
                </View>  
            </TouchableOpacity>
    );

  }
  renderFlexImageTwo = (item, index) => {

    var num = 3;

    var ind = item.id;
    return (
      <TouchableOpacity onPress={(ind)=>{this.imageOnPress(ind)}} underlayColor="transparent">        
                <View style={{width:(width_global-4)/num,height:width_global/4, padding:2,}}>
                    <Image source={item.imgurl}  style={{width:(width_global-4*(num+1))/num,height:width_global/4-4}} />             
                    <Text style={{height:20,width:(width_global-20)/num,color:'#fff',backgroundColor:'rgba(2, 2, 2, 0.3)',marginTop:-20,textAlign:'left',paddingLeft:10,}}>{item.text}</Text>             
                </View>  
            </TouchableOpacity>
    );

  }

  renderItems = ({
    item
  }) => {
    var id = item.id;

    return (
      <ImageAutoFlex  {...this.props} 
              backBtnFunc={()=>{this.imageOnPress(id)}}
              sourceData={item}
            />
    )
  }
  render() {
    const {
      navigate
    } = this.props.navigation;
    let statusBar = Platform.select({
      ios: 20,
      android: 20,
    });
    const buttons = ['1st', '2nd', '3th'];
    const selectedIndex = this.state.selectedIndex;
    return (
      <View style={{flex:1}}>

   
        <View style={[styles.header, {margin: 0, paddingTop: statusBar, height: statusBar + 44,backgroundColor:'rgba(254, 254, 254, 0)', zIndex:2}]} ref={(e) => this._refHeader = e}>
            <TouchableOpacity onPress={this.showBarcodescanner} underlayColor="transparent" style={[styles.return]}>
                <View style={[styles.returnBox]}>
                    
                    <Image
                        source={require('../img/scan.png')}
                        style={[styles.headerReturnIcon]}
                    />
                    
                </View>
            </TouchableOpacity>
            <Text style={[styles.title]}>
                {"首页"}
            </Text>
            <TouchableOpacity onPress={this.doneBtnFunc} underlayColor="transparent" style={[styles.done]}>
                <Image
                        source={require('../img/home.png')}
                        style={[styles.headerReturnIcon]}
                    />
            </TouchableOpacity>
        </View>
      <ScrollView style={{marginTop:-65}} onScroll={this._onScroll} scrollEventThrottle={10}>

    
        <View style={styles.container}>
          <ImageBackground style={styles.ImageBackGround} source={require('../img/header.png')}
            resizeMode='cover'>
            
            
          </ImageBackground>
          <View style={styles.groupContainer}>
              <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={styles.buttonGroups}
              />
            </View>
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={this.showCardView} 
              underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="clock-o" size={32} color='#1296db'/>
                <Text style={styles.mainTitleStyle}>
                  {'代办事件'}
                </Text>
                
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.showListView} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <AntDesign name="alipay-circle" size={32} color='#1296db'/>
                <Text style={styles.mainTitleStyle}>
                  {'支付宝朋友'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.showImagePickerView} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="instagram" size={32} color='#1296db'/>
                <Text style={styles.mainTitleStyle}>
                  {'图片选择器'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goOpenUrl} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="apple" size={32} color='#1296db'/>
                <Text style={styles.mainTitleStyle}>
                  {'打开百度'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="weibo" size={32} color='#1296db'/>
                <Text style={styles.mainTitleStyle}>
                  {'新浪微博'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="resistance" size={32} color='#1296db'/>
                <Text style={styles.mainTitleStyle}>
                  {'海神之矛'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="wechat" size={32} color='#1296db'/>
                <Text style={styles.mainTitleStyle}>
                  {'微信'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="twitter" size={32} color='#1296db'/>
                <Text style={styles.mainTitleStyle}>
                  {'twitter'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="qq" size={32} color='#1296db'/>
                <Text style={styles.mainTitleStyle}>
                  {'QQ通信'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="slideshare" size={32} color='#1296db'/>
                <Text style={styles.mainTitleStyle}>
                  {'团队建设'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

         
            <View style={styles.swiperStyle}>
              {this.renderSwiper()}
            </View>
          
          <View style={{backgroundColor: '#ffffff',padding:10, paddingBottom:0,}}>
            <Text style={{fontSize:16,fontWeight:'400',color:'#333'}}>本地推荐美食</Text>
          </View>
          
          <View style={[styles.menuContainer, {padding:2}]}>
            {
              imagesDataTwo.map((item, index) => {
                return this.renderFlexImageTwo(item, index);
              })
            }
          </View>

          <TouchableOpacity onPress={this.touchSwiper} underlayColor="transparent" >
            <View style={{alignItems: 'center',justifyContent:'center', padding:10,backgroundColor:'#fff'}}>
                <Text style={{fontSize:14,textAlign:'center',borderWidth:1,width:120,borderRadius:3,padding:2,borderColor:'#f1f1f1'}}>发现更多美女 ></Text>
            </View>
          </TouchableOpacity>
          <View style={{backgroundColor: '#ffffff',padding:10, paddingBottom:0,}}>
            <Text style={{fontSize:16,fontWeight:'400',color:'#333'}}>本地美女推荐</Text>
          </View>
          
          <View style={[styles.menuContainer, {padding:2}]}>
            {
              imagesData.map((item, index) => {
                return this.renderFlexImage(item, index);
              })
            }
          </View>
          <TouchableOpacity onPress={this.touchSwiper} underlayColor="transparent" >
            <View style={{alignItems: 'center',justifyContent:'center', padding:10,backgroundColor:'#fff'}}>
                <Text style={{fontSize:14,textAlign:'center',borderWidth:1,width:120,borderRadius:3,padding:2,borderColor:'#f1f1f1'}}>发现更多美女 ></Text>
            </View>
          </TouchableOpacity>

          <View style={{marginTop:10,}}>
            <FlatList
              data={this.state.sourceData}
              renderItem={this.renderItems}
              style={{width:width_global,}}
            />
            
          </View>
          
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
    margin: 10,
    backgroundColor: '#ffffff'
  },
  alertnativeLayoutButtonContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    marginBottom: 10,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 10,
    color: 'white'
  },
  ImageBackGround: {
    width: width_global,
    height: 300,
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
    width: 22,
    height: 22,
  },
  headerReturnText: {
    color: '#1296db',
    fontSize: 16,
    paddingBottom: 1,
    marginLeft: -2,
  },
  buttonGroups: {
    height: 40,
  },
  groupContainer: {
    margin: 40,
    marginBottom: 1,
    marginTop: -200,

  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
  },
  outViewStyle: {
    alignItems: 'center',
    width: boxW,
    height: boxW,
    marginLeft: vMargin,
    marginTop: 10,
  },
  mainTitleStyle: {
    fontSize: 12,
    color: "#333"
  },
  swiperStyle: {
    height: 110,
    width: width_global,
    paddingTop: 5,
    borderRadius: 4,
  },
  warpper: {
    width: width_global,
    height: 100,
  },
  paginationStyle: {
    bottom: 6,
  },
  dotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    opacity: 0.4,
    borderRadius: 0,
    marginTop: -10,
  },
  activeDotStyle: {
    width: 32,
    height: 3,
    backgroundColor: '#1296db',
    borderRadius: 0,
    marginTop: -10,
  },
  bannerImg: {
    width: width_global,
    height: 100,
  }
})