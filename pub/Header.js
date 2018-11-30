import React, {
    Component,
} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import StyleSheet from 'StyleSheet';
export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            showBack: false, //是否显示左侧的返回
            sideWidth: null,
        };

        this.backBtnFunc = this.backBtnFunc.bind(this);
    }

    backBtnFunc() {
        this.props.backFunc ? this.props.backFunc.call(null) : this.props.navigator.pop();
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity
                        hitSlop={{top:10,left:10,right:10,bottom:10}}
                        style = {
                            [styles.width50, this.state.sideWidth]
                        }
                        onPress = {
                            this.state.showBack ? this.backBtnFunc : undefined
                        } >
                        {this.state.showBack?
                        <Image style={styles.backImg} source={require("../img/back_btn.png")} />
                        :null}
                    </TouchableOpacity>
                    <Text style={[styles.whiteColor,styles.textCenter,styles.headerText]} >{this.state.title.length>10?(this.state.title.substr(0,10)+"..."):this.state.title}</Text>
                    <View style={[styles.width50, this.state.sideWidth]}>
                        {
                            this.props.children
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        height: 65,
        paddingTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    width50: {
        width: 50,
    },
    backImg: {
        width: 22,
        height: 22,
        marginLeft: 15
    },
    headerText: {
        fontSize: 18,
        flex: 1
    },
    whiteColor: {
        color: "#333"
    },
    textCenter: {
        textAlign: "center"
    },
});