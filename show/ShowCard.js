import React, {
  Component
} from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  ScrollView,
  FlatList,
  View
} from 'react-native';
import Header from '../pub/HeaderNew';
import Card from '../pub/CardView';
import HiHttp from '../pub/HiHttpPub';
import SpinnerAlert from '../pub/SpinnerAlert';

var AlertModal = null;
export default class ShowPage extends Component {
  btn_press = () => {
    const {
      navigate
    } = this.props.navigation;
    navigate('TabPage', {
      name: 'Jane'
    })
  };
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
            title="代办事件"
            showBack={true}
            showDone={false}
            
            ></Header>
            <SpinnerAlert
                  ref={(AlertModal) => this.AlertModal=AlertModal}
                  title="加载中。。。。"
                  />
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
      <Card {...this.props} 
        loadData={item}
        backBtnFunc={(fileNo)=>{this.showMore(fileNo)}}></Card>
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