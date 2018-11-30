import React, {
    Component
} from 'react';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';
var Dimensions = require('Dimensions');
var widths = Dimensions.get('window').width;
var heights = Dimensions.get('window').height;

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBack: this.props.showBack,
            opacity: this.props.opacity,
            showDone: this.props.showDone,
        }
    }
    backBtnFunc = () => {
        this.props.backBtnFunc ? this.props.backBtnFunc.call(null) : this.props.navigator.pop();
    }
    doneBtnFunc = () => {
        this.props.doneBtnFunc ? this.props.doneBtnFunc.call(null) : this.props.navigator.pop();
    }
    render() {
        let statusBar = Platform.select({
            ios: 20,
            android: 20,
        });

        return (
            <View style={[styles.header, {margin: 0, paddingTop: statusBar, height: statusBar + 44,}]}>
                <TouchableOpacity onPress={this.props.backBtnFunc} underlayColor="transparent" style={[styles.return]}>
                    <View style={[styles.returnBox]}>
                        
                        {this.state.showBack?<Image
            source = {
                this.props.backUrl
            }
                            style={[styles.headerReturnIcon]}
                        />:null}
                        
                        
                    </View>
                </TouchableOpacity>
                <Text style={[styles.title]}>
                    {this.props.title}
                </Text>
                <TouchableOpacity onPress={this.props.doneBtnFunc} underlayColor="transparent" style={[styles.done]}>
                    {this.state.showDone?<Image
                            source={this.props.doneUrl}
                            style={[styles.headerReturnIcon]}
                        />:null}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(18, 150, 219, 1.0)',
        width: widths,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0,
        borderBottomColor: '#cdcdcd',
    },
    title: {
        color: '#fff',
        height: 44,
        lineHeight: 44,
        fontSize: 18,
        fontWeight: 'bold',
    },
    return: {
        width: 100,
        height: 36,
        marginLeft: 12,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    done: {
        width: 100,
        height: 36,
        marginRight: 12,
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
    doneBox: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerDoneIcon: {
        width: 36,
        height: 36,
    },
    headerDoneText: {
        color: '#2c2c2c',
        height: 36,
        lineHeight: 36,
        fontSize: 36,
    },
});