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
  StyleSheet,
  SectionList,
  Text,
  TextInput,
  ScrollView,
  View
} from 'react-native';

export default class ListScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      modalVisible: false,
      language: '',
    };
    this.gotoBack = this.gotoBack.bind(this);
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  gotoBack = () => {
    const {
      goBack
    } = this.props.navigation;
    goBack(null);
  }

  static navigationOptions = {
    title: 'ListScreen',
    tabBarLabel: 'home-newpage',
    //导航栏的Style，设置导航栏的背景颜色
    headerStyle: {
      backgroundColor: '#8ab7fc',
      height: 65,
      paddingTop: 20,
    },
    //导航栏的title的style
    headerTitleStyle: {
      color: 'green',
      alignSelf: 'center', //alignSelf就是指不用父页面的样式（默认是继承）
    },
    // headerLeft: (
    //   <Button
    //     title='返回'
    //     onPress={this.gotoBack}
    //     />
    // ),
    //右边按钮 - 左边按钮默认是一个箭头，这里就不写了（自定义可以覆盖）
    headerRight: (
      <View style={{
          paddingRight:15,
          height:44,
          width:55,
          justifyContent: 'center',
          
        }}>

        </View>
    ),
    headerPressColorAndroid: 'blue', //点击按钮显示的颜色（按住不放时）
    headerTintColor: 'red', //返回按钮颜色
    gesturesEnabled: true, //是否允许右滑返回，IOS上默认是true,Android默认false

  };

  _backClick() {
    alert("click back");
  }



  render() {
    const {
      navigate
    } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
 
        <View style={{flexDirection: "row",}}>

          <Button
            title="go to Jane's Movie"
            onPress={() => navigate('Input', {name: 'list'})}
            style={{flex: 1}}
          />
          <Button
            title="go to Jane's Animate"
            onPress={() => 
              navigate('Input', {name: 'Jane'})
            }
            style={{flex: 1}}
          />
        </View>
        <Image
          source={{
            uri: "https://facebook.github.io/react/logo-og.png",
            method: "POST",
            headers: {
              Pragma: "no-cache"
            },
            body: "Your Body goes here"
          }}
          style={styles.images}
        />
   
        <TextInput 
          style={{height:40}}
          placeholder="Type here ok"
          onChangeText={(text)=> this.setState({text})}
          value={this.state.text}
        >
        {this.state.language}
        </TextInput>
       <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
            this.setModalVisible(false)
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text 
                  style={{marginTop:40,}}
                >Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100, backgroundColor: '#fafafa'}}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <View>
          <Text
            selectable={true}
            style={{width:50}}
            ellipsizeMode={'head'}
            numberOfLines={10}
          >First part and asdljflajsdlfjalsjdfljasldjflaksjdljfa</Text>
          <Text>second part</Text>
        </View>
          <FlatList
            data={[
              {key: 'Devin', age: 18},
              {key: 'Jackson', age: 18},
              {key: 'James', age: 18},
              {key: 'joel', age: 18},
              {key: 'John', age: 18},
              {key: 'Jillian', age: 18},
              {key: 'Jimmy', age: 18},
              {key: 'Julie', age: 18},    
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}:{item.age}years old</Text>}
            style={{paddingTop:40}}
              />
            
            

          <SectionList
            sections={[
                {title: 'D', 
                 data: [
                  {key: 'Devin', age: 18},   
                  ]
                },
                {title: 'J', 
                 data: [
                  {key: 'Jackson', age: 18},
                  {key: 'James', age: 18},
                  {key: 'Joel', age: 18},
                  {key: 'John', age: 18},
                  {key: 'Jillian', age: 18},
                  {key: 'Jimmy', age: 18},
                  {key: 'Julie', age: 18},    
                  ]
                },
              ]}
            renderItem={({item, index, section}) => <Text style={styles.item} key={index}>{item.key}:{item.age} years</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => item + index}
          />

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
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