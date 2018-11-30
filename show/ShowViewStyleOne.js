import React, {
  Component
} from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import Header from '../pub/HeaderNew';
import ListView from '../pub/ListViewWithImage';
import HiHttp from '../pub/HiHttpPub';
import SpinnerAlert from '../pub/SpinnerAlert';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  SearchBar
} from 'react-native-elements';
var AlertModal = null;
export default class ShowViewStyleOne extends Component {

  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loaded: false,
    };
  }

  componentDidMount() {
    this.getDataFromSrc();
  }

  //去服务器抓取数据
  getDataFromSrc = () => {
    storage.load({
      key: 'userinfo',
      id: '1001'
    }).then(ret => {
      console.log("success" + JSON.stringify(ret));
      var data = {
        userId: ret.userId,
        pages: 1,
        number: 20,
        accessToken: ret.accessToken,
      }

      this.AlertModal.show();
      this.timer = setTimeout(() => {
        this.AlertModal.hide();

      }, 3000);
      var url = "http://47.92.33.167:8002/ssm/app/6015";
      var options = {};
      options.body = data;

      HiHttp.send(url, options, this.onSuccess, this.onError);

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

  //通信成功处理
  onSuccess = (result, status) => {
    this.AlertModal.hide();
    console.log("Success: status:" + status + ";result=" + JSON.stringify(result));
    this.setState({
      data: result.responseData.loopResult,
    })
    if (result.responseCode === 'AAAA') {}
  }
  //通信失败处理
  onError = (result, status) => {
    this.AlertModal.hide();
    console.log("Error: status:" + status + ";result=" + JSON.stringify(result));
  }



  //进入详细页面
  showMore = (fileNo) => {
    console.log('fileNo=' + fileNo);
    const {
      navigate
    } = this.props.navigation;

    navigate('Barcode', {
      fileNo: {
        fileNo
      },
      //这里换成刷新页面
      getUrl: (url) => {
        this.getDataFromSrc();
      }
    });
  }

  backBtn = () => {
    const {
      goBack
    } = this.props.navigation;
    goBack();
  }

  onChangeText = (text) => {
    console.log("onChangeText=" + text);
  }

  onClearText = () => {
    console.log("onClearText");
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
            backUrl={require('../img/back.png')}
            title="朋友"
            showBack={true}
            showDone={false}
            
            ></Header>
            <SpinnerAlert
                  ref={(AlertModal) => this.AlertModal=AlertModal}
                  title="加载中。。。。"
                  />
          <View style={styles.searchBar}>
            <TouchableOpacity onPress={this.showMore} underlayColor="transparent" style={{flexDirection:'row',backgroundColor: '#f1f1f1',padding:8, paddingLeft:18,width:(width_global-20)}}>
                  <FontAwesomeIcon name="search" size={14} color='#1296db' style={{marginTop:3,}}/>
                  <Text style={styles.smallText}>
                    {'搜索'}
                  </Text>
               
                </TouchableOpacity>
          </View>   
          <View style={styles.buttonContainer}>
         
              <View style={styles.outViewStyle} >
                <TouchableOpacity onPress={this.showMore} underlayColor="transparent" style={styles.pressStyle}>
                  <FontAwesomeIcon name="themeisle" size={40} color='#1296db'/>
                  <Text style={styles.mainTitleStyle}>
                    {'生活号'}
                  </Text>
                  <Text style={styles.otherTitleStyle} numberOfLines={1}>
                    {'【近期服务】'}
                  </Text>
                </TouchableOpacity>
              </View>
       
              <View style={styles.outViewStyle} onPress={this.showMore}>
                <TouchableOpacity onPress={this.showMore} underlayColor="transparent" style={styles.pressStyle}>
                  <FontAwesomeIcon name="buysellads" size={40} color='#1296db'/>
                  <Text style={styles.mainTitleStyle}>
                    {'小程序'}
                  </Text>
                  <Text style={styles.otherTitleStyle} numberOfLines={1}>
                    {'发现更多服务'}
                  </Text>
                </TouchableOpacity>
              </View>
          
              <View style={styles.outViewStyle} onPress={this.showMore}>
                <TouchableOpacity onPress={this.showMore} underlayColor="transparent" style={styles.pressStyle}>
                  <FontAwesomeIcon name="group" size={40} color='#1296db'/>
                  <Text style={styles.mainTitleStyle}>
                    {'生活圈'}
                  </Text>
                  <Text style={styles.otherTitleStyle} numberOfLines={1}>
                    {'和朋友分享生活'}
                  </Text>
                </TouchableOpacity>
              </View>
            
          </View>      
        <FlatList
        data={this.state.data}
        renderItem={this.renderItems}
        style={styles.list}
      />

      </View>
    );
  }

  renderItems = ({
    item
  }) => {
    var fileNo = item.fileNo;
    return (
      <ListView {...this.props} 
        loadData={item}
        backBtnFunc={(fileNo)=>{this.showMore(fileNo)}}></ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,

  },
  buttonItems: {
    width: (width_global - 20) / 3,
    textAlign: 'center',
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
  outViewStyle: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#f1f1f1',
    padding: 10,
    alignItems: 'center',
  },
  pressStyle: {
    alignItems: 'center',
  },
  mainTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  otherTitleStyle: {
    fontSize: 14,
    color: '#999999'
  },
  list: {
    marginTop: 10,
  },
  searchBar: {

    backgroundColor: '#ffffff',
    flexDirection: 'row',
    padding: 10,
  },
  smallImg: {
    width: 12,
    height: 12,
  },
  smallText: {
    paddingLeft: 6,
    fontSize: 14,
    color: '#999',
  }
})