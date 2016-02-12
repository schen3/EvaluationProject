var AbstractSubject = require('./Observer.js').AbstractSubject;
var AbstractObserver = require('./Observer.js').AbstractObserver;

var C2SObserver = function(uuid_socket, socket) {
	AbstractObserver.call(this, uuid_socket, socket);

	this.update = function(msg) {
		//TODO 1) find the propriate socket in the redis
		//TODO 2) redircect message to the next socket
		console.log("Hello xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
		console.log("Hello", msg);

		this.getSocket().emit('msg', {
			message: "received message"
		});

		//MSG_SINGLE, 
		// find the socket ID in the redis,
		// send message to other socket



		//MSG_GROUP, 
		// find the socket ID in the redis,
		// send message to other socket

		//broadcast();
	}
}

/**
 * when a client login in, 
 * firstly, create a observer for him, add the observer in the subject center
 * 
 **/
var C2SSubjectManage = function() {
	//client side uuid;
	AbstractSubject.call(this);
}

C2SObserver.prototype = Object.create(AbstractObserver.prototype);
C2SSubjectManage.prototype = Object.create(AbstractSubject.prototype);

C2SObserver.prototype.contructor = C2SObserver;
C2SSubjectManage.prototype.contructor = C2SSubjectManage;

module.exports.C2SObserver = C2SObserver;
module.exports.C2SSubjectManage = C2SSubjectManage;