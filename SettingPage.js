import React, {
  Component
} from 'react';
import {
  FlatList,
  Alert,
  Button,
  Image,
  KeyboardAvoidingView,
  Modal,
  Picker,
  TouchableHighlight,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  View
} from 'react-native';
import Header from './pub/HeaderNew';
import ViewSetting from './pub/menuSetting';

export default class SettingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      modalVisible: false,
      language: '',
      logininfo: '还未登陆',
    };

  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }



  _backClick() {
    alert("click back");
  }

  fetchdata = () => {
    //  var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
    var REQUEST_URL = "http://47.92.33.167:8002/ssm/app/6001";
    fetch(REQUEST_URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "userId=test&password=e10adc3949ba59abbe56e057f20f883e&userType=1",
      })
      .then((response) => response.json())
      .then((responseData) => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        console.log("fetch data:" + JSON.stringify(responseData));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //跳入登陆页面
  showLogin = () => {
    const {
      navigate
    } = this.props.navigation;

    navigate('LoginView', {
      name: 'Animate',
      callback: (info) => {
        this.setState({
          logininfo: info
        })
        Alert.alert(info);
      }
    })
  }

  //财务分析
  showFinacialAnalysisFunc = () => {
    const {
      navigate
    } = this.props.navigation;

    navigate('FinacialAnalysis', {
      name: "FinacialAnalysis",
    });
  }

  //每日一招
  showCalendars = () => {
    const {
      navigate
    } = this.props.navigation;

    navigate('MCalendars', {
      name: "MCalendars",
    });
  }
  render() {
    const {
      navigate
    } = this.props.navigation;
    return (
      <View style={{flex:1}}>
      <Header {...this.props} 
            backBtnFunc={this.backBtn} 
            doneBtnFunc={this.doneBtnFunc} 
            doneUrl={require('./img/set.png')}
            title="我的"
            showBack={false}
            showDone={true}
            
            ></Header>
        <ScrollView style={styles.container}>
          <TouchableOpacity
                activeOpacity={1.0}
                onPress= {
                  this.showLogin
                }
               
                >
            <View style={styles.settings}>
                <View style={styles.setimageView}>
                  <Image style={styles.setimage} source={require('./img/testheader.png')}/>
                </View>
                <View style={styles.setText}>
                  <Text style={styles.setName}>汐宝</Text>
                  <Text style={styles.setId}>22515418@qq.com</Text>
                </View>
                <Image style={styles.setback} source={require('./img/right.png')} />
              </View>
          </TouchableOpacity>
          
          <View style={[styles.pageView, {marginTop:0,}]}>
           
              <ViewSetting
                {...this.props} 
                imgUrl={require('./img/wdhy.png')}
                title={'我的会员'}
                content={'钻石会员'}
                backBtnFunc={this.backBtnFunc}
                borderWidth={true}
              />
         
              <ViewSetting
                {...this.props} 
                imgUrl={require('./img/zzfw.png')}
                title={'增值服务'}
                content={'一切免单'}
                backBtnFunc={this.backBtnFunc}  
                borderWidth={false}            
                />
              
          </View>
          <View style={styles.pageView}>
              <ViewSetting
                {...this.props} 
                imgUrl={require('./img/wdsr.png')}
                title={'我的收入'}
                content={'💴：3000,000元'}
                backBtnFunc={this.backBtnFunc}
                borderWidth={true}
              >
              </ViewSetting>
              <ViewSetting
                {...this.props} 
                imgUrl={require('./img/cwfx.png')}
                title={'财务分析'}
                content={'财务健康'}
                backBtnFunc={this.showFinacialAnalysisFunc}
                borderWidth={true}
              >
              </ViewSetting>
              <ViewSetting
                {...this.props} 
                imgUrl={require('./img/wdzy.png')}
                title={'我的主页'}
                content={'点击查看'}
                backBtnFunc={this.backBtnFunc}
                borderWidth={true}
              >
              </ViewSetting>
            <ViewSetting
              {...this.props} 
              imgUrl={require('./img/wddd.png')}
              title={'我的订单'}
              content={'点击查看'}
              backBtnFunc={this.backBtnFunc}
              borderWidth={true}
            >
            </ViewSetting>
            <ViewSetting
              {...this.props} 
              imgUrl={require('./img/session.png')}
              title={'我的会议'}
              content={'点击查看'}
              backBtnFunc={this.backBtnFunc}
              borderWidth={false}
            >
            </ViewSetting>
           </View>
           <View style={styles.pageView}> 
            <ViewSetting
              {...this.props} 
              imgUrl={require('./img/hyfx.png')}
              title={'行业分析'}
              content={''}
              backBtnFunc={this.backBtnFunc}
              borderWidth={true}
            >
            </ViewSetting>
            <ViewSetting
              {...this.props} 
              imgUrl={require('./img/jczs.png')}
              title={'基础知识'}
              content={''}
              backBtnFunc={this.backBtnFunc}
              borderWidth={true}
            >
            </ViewSetting>
            <ViewSetting
              {...this.props} 
              imgUrl={require('./img/ljzq.png')}
              title={'量价专区'}
              content={''}
              backBtnFunc={this.backBtnFunc}
              borderWidth={true}
            >
            </ViewSetting>
            <ViewSetting
              {...this.props} 
              imgUrl={require('./img/hyfx.png')}
              title={'行业分析'}
              content={''}
              backBtnFunc={this.backBtnFunc}
              borderWidth={true}
            >
            </ViewSetting>
            <ViewSetting             
              {...this.props} 
              imgUrl={require('./img/mryz.png')}
              title={'每日一招'}
              content={'🙂'}
              backBtnFunc={this.showCalendars}
              borderWidth={false}
            >
            </ViewSetting>
          </View>
          <View style={styles.footer}>
            
          </View>

      </ScrollView>   
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  settings: {
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(18, 150, 219, 1.0)',
    width: width_global,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
  },
  setimageView: {
    width: 62,
    height: 62,

    borderWidth: 1,
    borderColor: '#fafafa',
  },
  setimage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',

  },
  setback: {
    height: 18,
    width: 18,
  },
  setText: {
    alignItems: 'flex-start',
    width: (width_global - 150),
  },
  setName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  setId: {
    fontSize: 14,
    borderRadius: 16,
    color: '#fff',
    borderWidth: 0.5,
    borderTopWidth: 0,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'rgba(48, 48, 48, 0.1)',
    borderColor: '#f1f1f1',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    //  padding: 10,
    fontSize: 18,
    height: 44,
  },
  images: {
    marginTop: 20,
    width: 200,
    height: 200,
    borderColor: 'rgba(181,181,181,1.0)',
    borderWidth: 5,
    borderRadius: 20,
  },
  btText: {
    color: '#fff',
    fontSize: 20,
  },
  main: {
    flex: 1,
    //  padding: 10,

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
  pageView: {
    alignItems: 'center',
    marginTop: 16,
  },
  footer: {
    height: 100,
    lineHeight: 100,
    alignItems: 'center',
  }
})