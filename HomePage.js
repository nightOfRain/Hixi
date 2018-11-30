import React, {
  Component
} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  View,
  Alert,
  Text,
  PermissionsAndroid,
} from 'react-native';

import {
  MapView,
  MapTypes,
  Geolocation
} from 'react-native-baidu-map';
import Header from './pub/Header';
//import requestReadPermission from './pub/Permissions';

export default class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mapType: MapTypes.NORMAL,
      zoom: 15,
      center: {
        longitude: 113.981718,
        latitude: 22.542449
      },
      trafficEnabled: false,
      baiduHeatMapEnabled: false,
      markers: [],
      marker: null,
      address: 'wsm kanbudao',
    };
    this.requestReadPermission = this.requestReadPermission.bind(this);
  }



  //async函数貌似只能写在需要调用的文件里面，不然就会报错
  async requestReadPermission() {
    // var PermissionsAndroid_str = '';
    // switch (str) {
    //   case 'map':
    //     PermissionsAndroid_str = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
    //     break;
    //   default:
    //     break;
    // }

    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
          'title': '获取定位权限',
          'message': '没有权限将无法展示地图'
        }
      )

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert('获取定位权限成功');
      } else {
        Alert('获取定位权限失败');
      }
    } catch (err) {
      Alert(err.toString);
    }
  }
  componentDidMount() {

    //安卓平台要显示获取权限
    if (Platform.OS == 'android') {
      this.requestReadPermission()
    }
    Geolocation.getCurrentPosition().then(
      (data) => {
        console.log("data=" + JSON.stringify(data));
        this.setState({
          zoom: 18,
          markers: [{
            latitude: data.latitude,
            longitude: data.longitude,
            title: '我的位置'
          }],
          marker: {
            latitude: data.latitude,
            longitude: data.longitude,
            title: '我的位置'
          },
          center: {
            latitude: data.latitude,
            longitude: data.longitude
          },
          address: data.address,
        })
      }
    ).catch(error => {
      console.log(error, 'error')
    })
  }

  render() {
    const {
      navigate
    } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView trafficEnabled={this.state.trafficEnabled} 
                baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
                zoom={this.state.zoom}
                mapType={this.state.mapType}
                center={this.state.center}
                marker={this.state.marker}
                markers={this.state.markers}
                style={{height:Dimensions.get('window').height - 46}}
                onMarkerClick={(e) => {
                  console.log("MarkerClick"+JSON.stringify(e));
                }}
                onMapClick={(e) => {
                  let json = JSON.stringify(e);

                  this.setState({
                    zoom:15,
                    markers:[
                      {
                        longitude:e.longitude,
                        latitude:e.latitude,
                        title:"当前位置",
                      }
                    ],
                    center:{
                      longitude:e.longitude,
                      latitude:e.latitude
                    },
                  });

                  let param = {
                    longitude:e.longitude,
                    latitude:e.latitude,
                  }

                //  DeviceEventEmitter.emit('krislee', param);
                  this.setState({
                    address:e.longitude+':'+e.latitude,
                  })
                }}
                style={styles.MapView}
                >
        </MapView>
        <View style={styles.context}>
          <Text style={styles.mText}>我的位置:{this.state.address}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MapView: {
    height: height_global,
  },
  context: {
    padding: 10,
    backgroundColor: 'rgba(247,247,247,0.7)',
    height: height_global * 2 / 5,
    marginTop: -height_global * 2 / 5,
  },
  mText: {
    color: '#333',
    fontSize: 16,
  },
  item: {
    padding: 10,
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
  }
})