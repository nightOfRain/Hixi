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
  TouchableOpacity,
  View
} from 'react-native';

import {
  ButtonGroup
} from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const options = [
  'Cancel',
  'Apple',
  <Text style={{color: 'yellow'}}>Banana</Text>,
  'Watermelon',
  <Text style={{color: 'red'}}>Durian</Text>
];

var cols = 5;
var boxW = width_global / (cols + 1);
var vMargin = boxW / (cols + 1);
var hMargin = 25;
export default class ShowPage extends Component {

  //不用组件自己的抬头
  static navigationOptions = {
    header: null
  }

  goBack = () => {
    const {
      goBack
    } = this.props.navigation;
    goBack();
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



  //二维码展示
  showBarcodescanner = () => {
    console.log('showBarcodescanner');
    const {
      navigate
    } = this.props.navigation;



    navigate('Barcode', {
      getUrl: (url) => {
        console.log('BarcodeScannerinfo:' + url);

      }
    });


  }

  updateIndex = (selectedIndex) => {
    console.log('selectedIndex=' + selectedIndex);
    this.setState({
      selectedIndex: selectedIndex,
    })
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

    const buttons = ['1st', '2nd', '3th'];
    const selectedIndex = this.state.selectedIndex;
    return (
      <View style={{flex:1}}>
        <View style={[styles.header, {margin: 0, paddingTop: statusBar, height: statusBar + 44,backgroundColor:'rgba(254, 254, 254, 0)', zIndex:2}]} ref={(e) => this._refHeader = e}>
            <TouchableOpacity onPress={this.goBack} underlayColor="transparent" style={[styles.return]}>
                <View style={[styles.returnBox]}>
                    
                    <Image
                        source={require('../img/back.png')}
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
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="twitter" size={40}/>
                <Text style={styles.mainTitleStyle}>
                  {'twitter'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="twitter" size={40}/>
                <Text style={styles.mainTitleStyle}>
                  {'twitter'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="twitter" size={40}/>
                <Text style={styles.mainTitleStyle}>
                  {'twitter'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="twitter" size={40}/>
                <Text style={styles.mainTitleStyle}>
                  {'twitter'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="twitter" size={40}/>
                <Text style={styles.mainTitleStyle}>
                  {'twitter'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="twitter" size={40}/>
                <Text style={styles.mainTitleStyle}>
                  {'twitter'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="twitter" size={40}/>
                <Text style={styles.mainTitleStyle}>
                  {'twitter'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alertMsg('twitter')} underlayColor="transparent" >
              <View style={styles.outViewStyle}>
                <FontAwesomeIcon name="twitter" size={40}/>
                <Text style={styles.mainTitleStyle}>
                  {'twitter'}
                </Text>
              </View>
            </TouchableOpacity>
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
    justifyContent: 'center',
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
  },
  outViewStyle: {
    alignItems: 'center',
    width: boxW,
    height: boxW,
    marginLeft: vMargin,
    marginTop: hMargin,
  },
  iconStyle: {
    width: 50,
    height: 50,
    marginBottom: 5
  },
  mainTitleStyle: {

  }

});