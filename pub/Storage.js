import Storage from 'react-native-storage';
import {
	AsyncStorage
} from 'react-native';
var storage = new Storage({
	// 最大容量，默认值1000条数据循环存储
	size: 1000,

	// 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
	// 如果不指定则数据只会保存在内存中，重启后即丢失
	storageBackend: AsyncStorage,

	// 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
	defaultExpires: 1000 * 3600 * 24,

	// 读写时在内存中缓存数据。默认启用。
	enableCache: true,

	// 如果storage中没有相应数据，或数据已过期，
	// 则会调用相应的sync方法，无缝返回最新数据。
	// sync方法的具体说明会在后文提到
	// 你可以在构造函数这里就写好sync的方法
	// 或是在任何时候，直接对storage.sync进行赋值修改
	// 或是写到另一个文件里，这里require引入
	//sync: require('你可以另外写一个文件专门处理sync')
})

// 最好在全局范围内创建一个（且只有一个）storage实例，方便直接调用

// 对于web
// window.storage = storage;

// 对于react native
global.storage = storage;
global.cpzl_map = {
	"8001": "公积金贷款",
	"8002": "商贷贷款",
	"8003": "组合贷款",
	"8004": "消费贷",
	"8005": "安居贷",
	"8006": "车供贷",
	"8007": "房供贷",
	"8008": "保单贷",
	"8009": "赎楼贷(打包)",
	"8010": "尾款贷",
	"8011": "积金贷",
	"8012": "小赢优贷",
	"8013": "装修贷",
	"8014": "商贷转公积金贷",
	"8020": "购车贷",
	"8016": "赎楼贷(不打包)",
	"8017": "尾款贷(不打包)",
	"8018": "个人经营贷",
	"8019": "赎楼贷(非交易)",
	"8015": "过桥贷"
};
global.cpzl_image = {
	"8001": require("../img/message.png"),
	"8002": require("../img/homes.png"),
	"8003": require("../img/transfer.png"),
	"8004": require("../img/message.png"),
	"8005": require("../img/homes.png"),
	"8006": require("../img/message.png"),
	"8007": require("../img/transfer.png"),
	"8008": require("../img/message.png"),
	"8009": require("../img/homes.png"),
	"8010": require("../img/transfer.png"),
	"8011": require("../img/message.png"),
	"8012": require("../img/message.png"),
	"8013": require("../img/transfer.png"),
	"8014": require("../img/message.png"),
	"8015": require("../img/homes.png"),
};
var Dimensions = require('Dimensions');
global.width_global = Dimensions.get('window').width;
global.height_global = Dimensions.get('window').height;

//全局打印日志函数封装
const Log = (...params) => {
	if (GLOBAL.__DEV__) {
		console.log(params);
	}
}
global.Log = Log;
// 这样，在此**之后**的任意位置即可以直接调用storage
// 注意：全局变量一定是先声明，后使用
// 如果你在某处调用storage报错未定义
// 请检查global.storage = storage语句是否确实已经执行过了