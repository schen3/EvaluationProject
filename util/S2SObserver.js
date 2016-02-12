var AbstractSubject = require('./Observer.js').AbstractSubject;
var AbstractObserver = require('./Observer.js').AbstractObserver;

var S2SObserver = function  (uuid_socket, socket) {
	AbstractObserver.call(this, uuid_socket, socket);
	
	this.update = function  (msg) {
		//TODO 
		console.log(uuid_socket, msg);

		//MSG_SINGLE, 
		// find the socket ID in the redis,
		// send message to other socket



		//MSG_GROUP, 
		// find the group via groupid
		// find the socket ID in the redis,
		// send message to the Group socket

		//broadcast();


	}
}



var S2SSubjectManage = function  () {
	AbstractSubject.call(this);
}


S2SObserver.prototype = Object.create(AbstractObserver.prototype);
S2SSubjectManage.prototype = Object.create(AbstractSubject.prototype);

S2SObserver.prototype.contructor = S2SObserver;
S2SSubjectManage.prototype.contructor = S2SSubjectManage;

module.exports.S2SObserver = S2SObserver;
module.exports.S2SSubjectManage = S2SSubjectManage;
