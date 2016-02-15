var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema  = new Schema({
	rid: String,

	description: {
		createDate: Date,
	},

	status: {
		close: Boolean
	}
});

module.exports = mongoose.model('History', HistorySchema);