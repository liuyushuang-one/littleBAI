/*
* @Author: 小锅
* @Date:   2018-10-11 20:37:11
* @Last Modified by:   小锅
* @Last Modified time: 2018-10-21 19:41:52
*/
var tool = require('util/tool.js');
//顶部导航
require('page/common/nav/index.js');
//头部搜索
require('page/common/header/index.js');
//侧边导航
var navSide = require('page/common/nav-side/index.js');
navSide.init({
	name: 'pass-update'
});
