var MongoDB = require('./mongodb.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var user = {
	input: "kkkkkkk",
	password: "1"
}
// @@@@ checklogin test
// MongoDB.checklogin(user).then((status) => {
// 	console.log(status);
// }).catch((status) => {
// 	console.log('status', status);
// 	console.log('failedreason', failedreason);
// })

// @@@@ userCreate test
// var userCreate = {
// 	username: "kkkkkkk1",
// 	password: "1",
// 	email: 'zfdsfds1',
// 	sex: 'male',
// }

// MongoDB.register(userCreate).then((profile) => {
// 	console.log('profile', profile);
// }).catch((error) => {
// 	console.log('error', error);
// })

// @@@@ History test
var msg = {
	from: "xxxxx1",
	to: "xxxxx2",
	msgtype: 'MSG_SINGLE',
	content: 'xxfsfdsfds'
};

MongoDB.logchat(msg).then((saveObj) => {
	console.log(saveObj);
}).catch((err) => {
	console.log(err);
});


