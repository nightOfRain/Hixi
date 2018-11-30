import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Modal,
    Text,
    ListView,
    PixelRatio,
    Platform,
    Image
} from 'react-native'

import Dimensions from 'Dimensions'
const {
    width,
    height
} = Dimensions.get('window');
var Spinner = require('react-native-spinkit');
/**
 * 确认框
 * 传过来的参数:
 * {
 *     leftButtonText: '',// 左边按钮的文字
 *     onLeftClick: function,// 点击左边按钮的回调
 *     rightButtonText: '',// 右边按钮的文字
 *     onRightClick: function,// 点击右边按钮的回调
 *     title: "",// 标题
 *     message: "",// 提示信息
 * }
 */
export default class SpinnerAlert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            leftButtonText: props.leftButtonText,
            rightButtonText: props.rightButtonText,
            title: props.title,
            message: props.message,
        }
    }

    componentWillMount() {
        this.timer = setTimeout(() => {
            this.hide();
        }, 5);
    }

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => this.hide(false)}>
                <View style={modalStyle.container}>
                    <View style={modalStyle.dialogContainer}>
                            <View style={{height:65}}>
                                <Spinner style={modalStyle.spinner} isVisible={true} size={65} type={'Circle'} color={'#333333'}/>        
                            </View>                                                                                             
                            <Text style={modalStyle.dialogTitle}>{'加载中...'}</Text>
                        
                    </View>
                </View>
            </Modal>
        );
    }

    setLeftText(leftButtonText) {
        this.setState({
            leftButtonText: leftButtonText
        })
    }

    setRightText(rightButtonText) {
        this.setState({
            rightButtonText: rightButtonText
        })
    }

    setTitle(title) {
        this.setState({
            title: title
        })
    }

    setMessage(message) {
        this.setState({
            message: message
        })
    }

    /**
     * 显示
     */
    show() {
        this.setState({
            modalVisible: true,
        });

    }

    /**
     * 隐藏
     */
    hide() {
        this.setState({
            modalVisible: false,
        })
    }

}

const modalStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialogContainer: {
        height: 100,

        padding: 5,
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    spinner: {

        backgroundColor: 'rgba(254, 254, 254, 0.0)',
    },
    dialogTitle: {
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
        fontWeight: '900',
        color: '#333333',
    },
    dialogPrompt: {
        fontSize: 14,
        marginTop: 16,
        marginBottom: 16,
        alignSelf: 'center',
        marginLeft: 29,
        marginRight: 29,
        fontWeight: '100',
        lineHeight: 22,
        color: 'black',
        textAlign: 'center',
    },
    buttonContainer: {

        backgroundColor: 'white',
    },
    dialogConfirmButton: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#aaaaaa',
    },
    leftButton: {
        borderBottomLeftRadius: 8,
        marginRight: -(1 / PixelRatio.get()),
        borderRightWidth: 0
    },
    rightButton: {
        borderBottomRightRadius: 8,
    },
    buttonVerticalLine: {
        backgroundColor: '#aaaaaa',
        width: 1,
    },
    buttonHorizontalLine: {
        backgroundColor: '#aaaaaa',
        height: 1,
    },
    dialogConfirmButtonText: {
        color: '#007aff',
        fontSize: 16,
    }
});