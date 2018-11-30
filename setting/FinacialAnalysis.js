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
  TouchableOpacity,
  ToastAndroid,
  View
} from 'react-native';
export default class ShowPage extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
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


  backBtnFunc = () => {
    this.props.navigation.goBack();
  }

  alertMsg = (msg) => {
    console.log('msg=' + msg);
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
            <TouchableOpacity onPress={this.backBtnFunc} underlayColor="transparent" style={[styles.return]}>
                <View style={[styles.returnBox]}>
                    
                    <Image
                        source={require('../img/left-active.png')}
                        style={[styles.headerReturnIcon]}
                    />                    
                </View>
            </TouchableOpacity>
            <Text style={[styles.title]}>
                {"财务分析"}
            </Text>
            <TouchableOpacity onPress={this.alertMsg} underlayColor="transparent" style={[styles.done]}>
                <Image
                        source={require('../img/zczm.png')}
                        style={[styles.headerReturnIcon]}
                    />
            </TouchableOpacity>
        </View>
      <ScrollView style={{marginTop:-65}} onScroll={this._onScroll} scrollEventThrottle={10}>
        <TouchableOpacity
                activeOpacity={1.0}
                onPress= {
                  this.showLogin
                }
              
                >
            <View style={styles.settings}>
                <View style={styles.setimageView}>
                  <Image style={styles.setimage} source={require('../img/testheader.png')}/>
                </View>
                <View style={styles.mainText}>
                  <View style={styles.headerone}>
                    <Text style={styles.setName}>汐宝</Text>
                    <View style={styles.rightText}>
                      <Image source={require('../img/dun.png')} style={styles.littleImg}/>
                      <Text style={styles.setText}>资产安全保护中</Text>
                    </View>
                  </View>
                  <Text style={styles.setId}>稳健性·有点小钱🖊</Text>
                </View>
              </View>
          </TouchableOpacity>
          <View style={{marginTop:10,backgroundColor:'#fff',padding:10}}>
            <View style={[styles.rowBetween, ]}>
              <Text style={styles.setId}>
                总资产(元)
              </Text>
              <Text style={styles.setId}>
                昨日收益
              </Text>
            </View>
            <View style={[styles.rowBetween, ]}>
              <Text style={styles.titleSize}>
                10,000,000.00 
              </Text>
              <Text style={styles.contextSize}>
                68,000.00
              </Text>
            </View>
          </View>
          <View style={styles.menuContainer}>
            <View style={styles.outViewStyle}>
              <Text style={styles.titleSize}>余额</Text>
              <Text style={styles.contextSize}>8,000,000.00</Text>
            </View>
            <View style={styles.outViewStyle}>
              <Text style={styles.titleSize}>余额宝</Text>
              <Text style={styles.contextSize}>2,000,000.00</Text>
            </View>
            <View style={styles.outViewStyle}>
              <Text style={styles.titleSize}>定期</Text>
              <Text style={styles.contextSize}>稳健理财</Text>
            </View>
            <View style={styles.outViewStyle}>
              <Text style={styles.titleSize}>基金</Text>
              <Text style={styles.contextSize}>458,023.00</Text>
            </View>
            <View style={[styles.outViewStyle, {borderBottomWidth:1}]}>
              <Text style={styles.titleSize}>黄金</Text>
              <Text style={styles.contextSize}>买入0费率</Text>
            </View>
            <View style={[styles.outViewStyle, {borderBottomWidth:1}]}>
              <Text style={styles.titleSize}>余利宝</Text>
              <Text style={styles.contextSize}>随时存随时花</Text>
            </View>
          </View>
      </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settings: {
    height: 180,
    paddingTop: 85,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width_global,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
  },
  setimageView: {
    width: 60,
    height: 60,
  },
  setimage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    resizeMode: 'cover',
  },
  button: {
    marginBottom: 10,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  mainText: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 60,
    width: width_global - 80,
  },
  rightText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 0.5,
    borderTopWidth: 0,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'rgba(48, 48, 48, 0.1)',
    borderColor: '#f1f1f1',
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
  headerone: {
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
  littleImg: {
    width: 16,
    height: 16,
  },
  setName: {
    fontSize: 24,
    color: '#333',
  },
  setText: {
    fontSize: 16,
  },
  setId: {
    fontSize: 14,
    color: '#999',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: width_global / 2,
    height: 80,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#f1f1f1',
    padding: 10,
    alignItems: 'flex-start',
  },
  mainTitleStyle: {
    fontSize: 12,
    color: "#333",

  },
  titleSize: {
    color: '#333',
    fontSize: 18,
  },
  contextSize: {
    color: '#999',
    fontSize: 16,

  }


})