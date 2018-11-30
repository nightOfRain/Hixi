import React, {
  Component
} from 'react';
import {
  Alert,
  AppRegistry,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import * as CacheManager from 'react-native-http-cache';
import ImagePicker from 'react-native-image-picker';
import Header from '../pub/HeaderNew';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  ActionSheetCustom as ActionSheet
} from 'react-native-actionsheet';


var cols = 3;
var boxW = width_global / (cols + 1);
var vMargin = boxW / (cols + 1);
var hMargin = 25;
var i = 1;
const options = [
  'Cancel',
  '拍照',
  <Text style={{color: 'yellow'}}>从相册获取</Text>
];

export default class ShowImagePicker extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      imgSource: require("../img/header.png"),
      imagesArray: [],
      dataSource: [],

    };
  }
  //Actionsheet展示
  showActionsheet = () => {
    console.log('showActionsheet');
    this.ActionSheet.show();
  }
  backBtn = () => {
    const {
      goBack
    } = this.props.navigation;
    goBack();
  }
  //Actionsheet选中提示
  selectedActionsheet = (index) => {
    console.log('selectedActionsheet:' + index);
    if (index == 1) {
      // Launch Camera:
      ImagePicker.launchCamera(options, (response) => {

        // Same code as in above section!
        // this.setState({
        //   imageurl: require(response.uri)
        // })
      });
    } else if (index == 2) {
      // Open Image Library:
      ImagePicker.launchImageLibrary(options, (response) => {
        // Same code as in above section!
        // this.setState({
        //   imageurl: require(response.Path)
        // })
      });
    }
  }

  showImageSwiper = (index) => {
    console.log("showImageSwiper=" + index);
    const {
      navigate
    } = this.props.navigation;



    navigate('ImageSwiper', {
      images: this.state.dataSource,
      index: index,
    });
    // this.AlertModal.show();
  }
  //图片选择器
  imagePicker = () => {
    var options = {
      title: '请选择',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '选择相册',
      quality: 0.75,
      allowsEditing: true,
      noData: false,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
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

        const item = {
          url: response.uri
        };
        var datas = this.state.dataSource;
        datas.push(item);
        this.setState({
          //          imagesArray: arrays,
          dataSource: datas,
        })
      }
    });
  }



  render() {
    return (
      <View style={{flex:1}}>
        <Header {...this.props} 
            backBtnFunc={this.backBtn} 
            doneBtnFunc={this.doneBtnFunc} 
            backUrl={require('../img/back.png')}
            title="图片选择器"
            showBack={true}
            showDone={false}
            
            ></Header>
         
        <View style={styles.container}>
          <TouchableOpacity onPress={this.imagePicker} 
            underlayColor="transparent" >
            <View style={styles.outViewStyle}>
              <FontAwesomeIcon name="plus" size={32} color='#1296db'/>
              <Text style={styles.mainTitleStyle}>
                {'选择图片器'}
              </Text>                    
            </View>
          </TouchableOpacity>
          <View style={styles.menuContainer}>
          {this.state.dataSource.map((item,index)=>{
            return this._renderImage(item, index)})}
          </View>
        </View> 
        <View>
          <ActionSheet
            ref={o => this.ActionSheet = o}
            title={<Text style={{color: '#000', fontSize: 18}}>Which one do you like?</Text>}
            options={options}
            cancelButtonIndex={0}
            destructiveButtonIndex={2}
            onPress={this.selectedActionsheet}
          />
        </View> 
      </View>
    );
  }

  _renderImage = (item, index) => {
    console.log("renderImage=" + index);
    let ind = index;
    let url = item.url;
    let source = {
      uri: url
    };
    return (
      <View style={styles.imageView} key={'image' + index}>
                <TouchableOpacity onPress={() => this.showImageSwiper(ind)}>
                    <Image source={source}
                           style={styles.image}/>
                </TouchableOpacity>
            </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    textAlign: 'center',

  },
  imageView: {
    width: width_global / 4,
    height: width_global / 4,
    padding: 1,
  },
  image: {
    width: (width_global - 8) / 4,
    height: (width_global - 8) / 4,

    resizeMode: 'cover',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  }
})