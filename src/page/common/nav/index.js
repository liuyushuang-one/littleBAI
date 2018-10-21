/*
* @Author: 小锅
* @Date:   2018-10-20 23:46:24
* @Last Modified by:   小锅
* @Last Modified time: 2018-10-21 10:05:52
*/
require('./index.css');
var tool = require('util/tool.js');
var user = require('service/user-service.js');
var cart = require('service/cart-service.js');

//导航
var nav = {
	// 初始化
	init: function(){
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartCount();
		return this;
	},
	bindEvent: function(){
		// 登录事件
		$('.js-login').click(function(){
			tool.dologin();
		});
		// 注册事件
		$('.js-register').click(function(){
			window.location.href = './register.html';
		});
		// 退出事件
		$('.js-logout').click(function(){
			user.logout(function(res){
				window.location.reload();
			}, function(err){
				tools.errorTips(err);
			});
		});
	},
	// 加载用户信息
	loadUserInfo: function(){
		user.checkLogin(function(res){
			$('.user.not-login').hide().siblings('.user.login').show()
				.find('.username').text(res.username);
		}, function(err){
			//do nothing
		});
	},
	// 加载购物车数量
	loadCartCount: function(){
		cart.getCartCount(function(res){
			$('.nav .cart-count').text(res || 0);
		}, function(err){
			$('.nav .cart-count').text(0);
		});
	}
};
module.exports = nav.init();