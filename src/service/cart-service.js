/*
* @Author: 小锅
* @Date:   2018-10-21 09:59:12
* @Last Modified by:   小锅
* @Last Modified time: 2018-10-21 18:54:48
*/
var tool = require('util/tool.js');


var cart = {
	// 获取购物车数量
	getCartCount: function(resolve, reject){
		tool.request({
			url: tool.getServerUrl('/cart/get_cart_product_count.do'),
			success: resolve,
			error: reject
		});
	}
};
module.exports = cart;