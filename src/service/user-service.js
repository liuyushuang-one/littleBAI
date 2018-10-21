/*
* @Author: 小锅
* @Date:   2018-10-21 09:33:21
* @Last Modified by:   小锅
* @Last Modified time: 2018-10-21 09:54:21
*/
var tool = require('util/tool.js');

var user = {
	//检查登录状态
	checkLogin: function(resolve, reject){
		tool.request({
			url: tool.getServerUrl('/user/get_user_info.do'),
			method: 'POST',
			success: resolve,
			error: reject
		});
	},
	// 登出操作
	logout: function(resolve, reject){
		tool.request({
			url: tool.getServerUrl('/user/logout.do'),
			method: 'POST',
			success: resolve,
			error: reject
		});
	}
}
module.exports = user;