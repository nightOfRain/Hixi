import React, {
  Component
} from 'react';
import {
  FlatList,
  Button,
  Image,
  KeyboardAvoidingView,
  Modal,
  Picker,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  SectionList,
  Text,
  TextInput,
  NativeModules,
  NativeAppEventEmitter,
  ScrollView,
  requireNativeComponent,
  View
} from 'react-native';
import MapLinking from 'react-native-map-linking';
import Header from './pub/Header';

const RnTest = NativeModules.RnTest;
export default class UndoPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      modalVisible: false,
      language: '',
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



  render() {
    const {
      navigate
    } = this.props.navigation;
    return (
      <ScrollView style={{flex:1,}}>
        
        <Header {...this.props} title="调用系统地图" ></Header>
        <View style={styles.container}>
          
          <TouchableOpacity
            onPress={() => {MapLinking.markLocation({lat: 40, lng: 118}, 'aaa', 'bbb')}}>
            <View style={styles.button}>
              <Text style={styles.text}>在地图上标记位置</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {MapLinking.planRoute({lat:40, lng: 118, title: '起点'}, {lat:40, lng: 119, title: '终点'}, 'drive')}}>
            <View style={styles.button}>
              <Text style={styles.text}>规划线路</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {MapLinking.navigate({lat:40, lng: 118, title: '终点'})}}>
            <View style={styles.button}>
              <Text style={styles.text}>导航</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {RnTest.getPackageName();}}>
            <View style={styles.button}>
              <Text style={styles.text}>获取APP包名</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  button: {
    padding: 10,
    backgroundColor: '#3B5998',
    marginBottom: 10,
    marginTop: 10
  },
  text: {
    color: 'white',
  },
});