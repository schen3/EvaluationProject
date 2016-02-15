var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HistorySchema  = new Schema({
	hid: String,
	msgs: [{
		from: 	 String,
		to:   	 String,
		msgtype: String,
		content: String,
		date:    Date
	}]
});

module.exports = mongoose.model('History', HistorySchema);