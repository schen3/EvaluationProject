var util = {};
util.msg = {};
util.args = {};
util.string = {};
util.constant = {};
util.fn = {};

// Constance: server to server : {MSG_SEVER}
// client to server : {MSG_SINGLE, MSG_GROUP}
util.constant.DELIMITER_GROUP = ',';
util.constant.MSG_SINGLE = 'MSG_SINGLE';
util.constant.MSG_GROUP = 'MSG_GROUP';

// Error 
util.constant.ERROR_EXISTING_ACCOUNT = 'There\'s  existing username or email, please check it';

//TODO
// MSGTYPE: server to server : {MSG_SEVER}
//          client to server : {MSG_SINGLE, MSG_GROUP}
util.msg.validateMsgType = function(msgType) {

}

// MSGTYPE: server to server : {MSG_SEVER}
util.msg.validateMsgContent = function(msgContent) {


}

util.msg.validateFrom = function(from) {


}

util.msg.validateTo = function(to) {

}

///////////////////////////////////////////////////////////////////////
///  Util@args is used to manuplate the args and dynamic create object 
///  via new
///////////////////////////////////////////////////////////////////////
util.args.list = function(args, index) {
	return Array.prototype.slice.call(args, index);
}

util.args.construct = function(constructor, args) {
	function F() {
		return constructor.apply(this, args);
	}

	F.prototype = constructor.prototype;
	return new F();
}

///////////////////////////////////////////////////////////////////////
///  Util@args is used to manuplate the args and dynamic create object 
///  via new
///////////////////////////////////////////////////////////////////////
util.string.in = function(targetStr, groups) {
	if (!targetStr || !groups || !(groups instanceof Array)) {
		return false;
	}
	var find = false;
	groups.forEach(function(item) {
		if (targetStr === item) {
			find = true;
		}
	});
	return find;
}

// n = 4, the length output is 16
// n = 5, the length of output is 20 
util.string.uuid = function(n) {
	var num = n || 4;

	function _s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	function _generate() {
		var str = "";
		for(var i = 0; i < num; i++) {
			str = str + _s4();
		}
		return str
	}
	return _generate();
}

// util.function
util.fn.defer = typeof setImmediate === 'function'
  ? setImmediate
  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }

module.exports = util;