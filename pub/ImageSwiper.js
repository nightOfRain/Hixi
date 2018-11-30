import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Image,
	Text,
	Modal,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Header from '../pub/HeaderNew';
export default class ImageSwiper extends Component {
	static navigationOptions = {
		header: null
	}
	constructor(props) {
		super(props);

		this.state = {
			images: [],
			imageIndex: 1,
		};
	}
	componentWillMount() {
		// 上个界面传来的照片集合
		const params = this.props.navigation.state.params;
		const images = params.images;
		const pageNum = params.index;
		console.log("images=" + images);
		this.setState({
			images: images,
			imageIndex: pageNum,
		});
	}
	backBtn = () => {
		const {
			goBack
		} = this.props.navigation;
		goBack();
	}
	doneBtnFunc = () => {

	}
	render() {
		return (
			<View style={{flex:1}}>
				<View style={[styles.header, {margin: 0, paddingTop: 20, height: 64,zIndex:2}]} >
		            <TouchableOpacity onPress={this.backBtn} underlayColor="transparent" style={[styles.return]}>
		                <View style={[styles.returnBox]}>
		                    
		                    <Image
		                        source={require('../img/back.png')}
		                        style={[styles.headerReturnIcon]}
		                    />
		                    
		                </View>
		            </TouchableOpacity>
		            <Text style={[styles.title]}>
		                
		            </Text>
		            <TouchableOpacity onPress={this.doneBtnFunc} underlayColor="transparent" style={[styles.done]}>
		                <Image
		                        source={require('../img/home.png')}
		                        style={[styles.headerReturnIcon]}
		                    />
		            </TouchableOpacity>
		        </View>
				<View style={styles.container}>
					<ImageViewer imageUrls={this.state.images} // 照片路径
	                    enableImageZoom={true} // 是否开启手势缩放
	                    index={this.state.imageIndex} // 初始显示第几张
	                    failImageSource={()=>{console.log('aaa error fail images')}} // 加载失败图片
	                    onChange={(index) => {console.log(index)}} // 图片切换时触发
	                    onClick={() => { // 图片单击事件
	                        this.props.navigator.pop();
	                    }}

					/>
				</View>
			</View>
		);
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: -64,
		paddingTop: 24,
		width: width_global,
		height: height_global + 64,
		justifyContent: 'center',
		textAlign: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	header: {
		backgroundColor: 'rgba(0, 0, 0, 1)',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 0,
		borderBottomColor: '#cdcdcd',
	},
	title: {
		color: '#2c2c2c',
		height: 44,
		lineHeight: 44,
		fontSize: 20,
	},
	return: {
		width: 100,
		height: 36,
		marginLeft: 24,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	done: {
		width: 100,
		height: 36,
		marginRight: 24,
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
});