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

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  backBtnFunc = () => {
    this.props.backBtnFunc ? this.props.backBtnFunc.call(null) : this.props.navigator.pop();
  }

  render() {
    return (
      <View style={{flex:1,width:120,}}>
          <TouchableOpacity onPress={this.props.backBtnFunc} underlayColor="transparent" style={styles.cards}>
              <View style={styles.container}>
                  <Text>asdasdfasdfas</Text>
              </View>
          </TouchableOpacity> 
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(254, 254, 254, 1.0)',
    width: width_global,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
  },
  card: {
    backgroundColor: 'rgba(254, 254, 254, 1.0)',
    marginTop: 25,

  },
  rightContainer: {
    width: width_global - 60,
    paddingLeft: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    padding: 8,
  },
  rightContainerNo: {
    width: width_global - 60,
    paddingLeft: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
  },
  rightSon: {
    width: width_global - 90,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',

  },
  img: {
    marginLeft: 0,
    width: 30,
    height: 30,
  },
  rightImg: {
    width: 18,
    height: 18,
  },
  title: {
    height: 25,
    lineHeight: 25,
    fontSize: 16,
    color: '#333',
  },
  content: {
    fontSize: 14,
    lineHeight: 30,
    color: '#1296db',
  },
  sonContent: {
    height: 20,
    lineHeight: 20,
    fontSize: 14,
    color: '#999',
  }
});