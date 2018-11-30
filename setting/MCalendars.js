import React, {
  Component
} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from '../pub/HeaderNew';
export default class MCalendars extends Component {
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
  backBtn = () => {
    const {
      goBack
    } = this.props.navigation;
    goBack();
  }
  render() {
    return (
      <View style={{flex:1}}>
      <Header {...this.props} 
            backBtnFunc={this.backBtn} 
            doneBtnFunc={this.doneBtnFunc} 
            backUrl={require('../img/back.png')}
            title="日历展示"
            showBack={true}
            showDone={false}
            
            ></Header>
        <TouchableOpacity style={styles.menu} onPress={this.onCalendarsPress.bind(this)}>
          <Text style={styles.menuText}>Calendars</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onCalendarListPress.bind(this)}>
          <Text style={styles.menuText}>Calendar List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onHorizontalCalendarListPress.bind(this)}>
          <Text style={styles.menuText}>Horizontal Calendar List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onAgendaPress.bind(this)}>
          <Text style={styles.menuText}>Agenda</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onCalendarsPress = () => {

    const {
      navigate
    } = this.props.navigation;

    navigate('Calendars', {
      name: "Calendars",
    });
  }

  onCalendarListPress = () => {

    const {
      navigate
    } = this.props.navigation;

    navigate('CalendarsList', {
      name: "CalendarsList",
    });
  }

  onHorizontalCalendarListPress = () => {

    const {
      navigate
    } = this.props.navigation;

    navigate('HorizontalCalendarList', {
      name: "HorizontalCalendarList",
    });
  }

  onAgendaPress = () => {

    const {
      navigate
    } = this.props.navigation;

    navigate('Agenda', {
      name: "Agenda",
    });
  }
}

const styles = StyleSheet.create({
  menu: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
    borderBottomWidth: 1
  },
  menuText: {
    fontSize: 18
  }
});