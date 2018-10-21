/*
* @Author: 小锅
* @Date:   2018-10-21 17:12:13
* @Last Modified by:   小锅
* @Last Modified time: 2018-10-21 18:24:49
*/
require('./index.css');
var tool = require('util/tool.js');
//通用页面头部
var header = {
	// 初始化
	init: function(){
		this.bindEvent();
	},
	onload: function(){
		var keyword = tool.getUrlParam('keyword');
		//keyword存在，回填搜索框
		if(keyword){
			$('#search-input').val(keyword);
		};
	},
	bindEvent: function(){
		var _this = this;
		//搜索提交动作--点击按钮
		$('#search-btn').click(function(){
			_this.searchSubmit();
		});
		//搜索提交动作--输入回车
		$('#search-input').keyup(function(e){
			//13是回车的keyword
			if(e.keyCode === 13){
				_this.searchSubmit();
			}
		});
	},
	//搜索提交事件
	searchSubmit: function(){
		var keyword = $.trim($('#search-input').val());
		//跳转到list页
		if(keyword){
			window.location.href = './list.html?keyword=' + keyword;
		}
		//转回首页
		else{
			tool.goHome();
		};
	}
};
header.init();