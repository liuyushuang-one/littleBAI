/*
* @Author: 小锅
* @Date:   2018-10-13 21:15:57
* @Last Modified by:   小锅
* @Last Modified time: 2018-10-20 17:51:21
*/
//定义一个工具类

var conf = {
	serverHost: ''
};
var Hogan = require('hogan.js');

var tools = {
	//网络请求
	request: function(param){
		var _this = this;//缓存tools
		$.ajax({
			type: param.method || 'get',
			url: param.url || '',
			dataType: param.type || 'json',
			data: param.data || '',
			success: function(res){
				//请求成功
				if(0 === res.status){
					typeof param.success === 'function' && param.success(res.data,res.msg);
				}
				//请求时不在登陆状态，进行登陆
				else if(10 === res.status){
					_this.dologin();
				}
				//请求参数错误
				else if(1 === res.status){
					typeof param.error === 'function' && param.error(msg);
				}
			},
			error: function(err){
				typeof param.error === 'function' && param.error(err.statusText);
			}
		});
	},

	//获取服务器地址
	getServerUrl: function(path){
		return conf.serverHost + path;
	},

	//获取url参数
	getUrlParam: function(name){
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var result = window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	},

	//渲染html页面
	renderHtml: function(htmlTemplate, data){
		var template = Hogan.compile(htmlTemplate),
			result = template.render(data);
		return result;
	},

	//成功提示
	successTips: function(msg){
		alert(msg || '操作成功！');
	},

	//失败提示
	errorTips: function(msg){
		alert(msg || '似乎哪里出错了呢~');
	},

	//字段的验证，支持是否为非空、手机、邮箱
	validate: function(value, type){
		var value = $.trim(value);//去空格
		//非空判断
		if('require' === type){
			return !!value;//返回布尔值
		}
		//手机验证
		if('phone' === type){
			return /^1\d{10}$/.test(value);
		}
		//邮箱验证
		if('email' === type){
			return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
		}
	},

	//登陆操作请求
	dologin: function(){
		window.location.href = './login.html?redirect' + encodeURIComponent(window.location.href);
	},

	//返回首页
	goHome: function(){
		window.location.href = './index.html';
	}
};

module.exports = tools;