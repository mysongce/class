var Homework = {
	/**
	 * 获取当前时间戳
	 *
	 * @returns {number}
	 */
	now: function () {

	},

	/**
	 * 输出当前日期 例如:2016-08-22
	 *
	 * @returns {*}
	 */
	date: function () {

	},

	/**
	 * 切割字符
	 * 获取一个字符串前len位
	 *
	 * @param str
	 * @param len
	 */
	cutString: function (str, len) {

	},

	/**
	 * 获取字符位置
	 *
	 * @param base
	 * @param str
	 */
	indexOfString: function (baseStr, targetStr) {

	},

	/**
	 * 字符替换
	 *
	 * @param baseStr
	 * @param partten
	 * @param val
	 */
	replaceString: function (baseStr, partten, val) {

	},

	/**
	 * 小写转大写
	 *
	 * @param str
	 * @returns {*|string}
	 */
	toUpperCase: function (str) {

	},

	/**
	 * 判断传入的是否是函数
	 * @param obj
	 * @returns {boolean}
	 */
	isFunction: function (obj) {

	},

	isBoolean: function (obj) {

	},

	isString: function (obj) {

	},

	isArray: function (obj) {

	},

	isObject: function (obj) {

	},

	isNull: function (obj) {

	},

	isUndefined: function (obj) {

	}
}


function findImage(str) {
	var images = [];
	var names = [];

	str.replace(/\s+/g,'').split(',').map(function (val) {
		var prefix = val.split(/\.(jpg|png|gif|jpeg)/)[0];
		var name;

		if (prefix.indexOf('_') > 0) {
			name = prefix.split('_')[0];
		} else {
			name = prefix;
		}

		if (names.indexOf(name) < 0) {
			images.push({img: val});
			names.push(name)
		}
	});

	return images;
}

console.log(findImage(a))