import React, {
  Component
} from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
var Dimensions = require('Dimensions');
var widths = Dimensions.get('window').width;
var heights = Dimensions.get('window').height;

export default class ListViewWithImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadData: this.props.loadData,
    };
  }
  backBtnFunc = () => {
    this.props.backBtnFunc ? this.props.backBtnFunc.call(null) : this.props.navigator.pop();
  }

  render() {
    return (
      <View style={{flex:1,}}>
        
        <TouchableOpacity onPress={this.props.backBtnFunc} underlayColor="transparent" >
        
            <View style={styles.listContainer}>
                <View style={{padding:10, paddingTop:15,paddingLeft:15,}}>
                <Image source={require("../img/money.png")}  style={styles.img} />
                </View>
                <View style={styles.listContext}>
                  <View style={styles.leftContent}>
                    <Text style={styles.title}>{'当前流程：'+this.state.loadData.flowName}</Text>
                    <Text style={styles.timetext}>{this.state.loadData.createTime}</Text>
                     
                  </View>
                  <View>
                      <Text style={styles.sonContent} numberOfLines={1}>{'Note：'+this.state.loadData.note}</Text>
                  </View>
                </View>  

            </View>

        
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(254, 254, 254, 1.0)',
    width: widths,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
  },
  listContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(254, 254, 254, 1.0)',
  },
  listContext: {
    padding: 15,
    paddingLeft: 5,
    color: '#2c2c2c',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  leftContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingRight: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timetext: {
    fontSize: 12,
    color: '#999',
  },
  img: {
    marginLeft: 0,
    width: 46,
    height: 46,
  },
  sonContent: {
    height: 20,
    lineHeight: 20,
    width: (width_global - 80),
    fontSize: 14,
    color: '#999',
  }
});