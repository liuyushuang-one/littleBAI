/*
* @Author: 小锅
* @Date:   2018-10-21 23:03:52
* @Last Modified by:   小锅
* @Last Modified time: 2018-10-21 23:42:34
*/
require('./index.css');
require('page/common/nav-simple/index.js');
var tool = require('util/tool.js');
//获取对应的type值，令其对应的显示出来
$(function(){
	var type = tool.getUrlParam('type') || 'default',
		$element = $('.' +type+ '-success').show()
})