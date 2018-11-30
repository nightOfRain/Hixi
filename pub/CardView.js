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

export default class CardView extends Component {
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
      <View style={{flex:1,marginTop:10,}}>
        <View style={styles.cardtime}>
            <Text style={styles.timetext}>{this.state.loadData.createTime}</Text>
        </View>
        <TouchableOpacity onPress={this.props.backBtnFunc} underlayColor="transparent" style={styles.cards}>
        
            <View style={styles.cardhead}>
                <Image source={cpzl_image[this.state.loadData.loanType]}  style={styles.img} />
                <View style={styles.rightContainer}>
                  <Text style={styles.title}>{cpzl_map[this.state.loadData.loanType]}</Text>
                </View>     
            </View>

            <View style = {styles.cardcenter} >
              <Text style={styles.content}>{'客户:'+this.state.loadData.jkrXm+'的案卷正处于'+this.state.loadData.flowName+'环节'}</Text> 
              <Text style={styles.sonContent}>{'当前流程:'+this.state.loadData.flowName}</Text> 
              <Text style={styles.sonContent}>{'Note:'+this.state.loadData.note}</Text>  
            </View> 
            <View style={styles.cardfooter} >
              <Text>查看详情</Text> 
              
              <Image source={require('../img/right.png')}  style={styles.rightImg} />
              
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
  rightContainer: {
    paddingLeft: 5,
    flex: 1,
  },
  cards: {
    margin: 10,
    backgroundColor: 'rgba(254, 254, 254, 1.0)',
    marginTop: 25,
    padding: 10,
    borderRadius: 2,
  },
  cardhead: {
    flexDirection: 'row',
    flex: 1,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#fafafa',
  },
  cardcenter: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 10,
    color: '#999999',
    borderBottomWidth: 1,
    borderBottomColor: '#fafafa',
  },
  cardfooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingLeft: 5,
    paddingTop: 10,
    color: '#2c2c2c',
  },
  cardtime: {
    color: '#2c2c2c',
    alignItems: 'center',
    height: 10,
    lineHeight: 10,
  },
  timetext: {
    backgroundColor: 'rgba(54, 54, 54, 0.1)',
    position: 'absolute',
    fontSize: 12,
    padding: 5,
    borderRadius: 2,
    color: '#fff',
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
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 'bold',
    color: '#555',
  },
  content: {
    height: 25,
    lineHeight: 25,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  sonContent: {
    height: 20,
    lineHeight: 20,
    fontSize: 14,
    color: '#999',
  }
});