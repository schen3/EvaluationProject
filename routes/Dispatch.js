var $injector = require('../util/Injector.js');
var C2SObserver = require('../util/C2SObserver.js').C2SObserver;
var C2SSubject = require('../util/C2SObserver.js').C2SSubject;
var SubjectManagers = require('../util/SubjectManagers.js');
var util = require('../util/Util.js');
var mongodbAPI = require('../db/mongodb.js');

var dispatch = function(server) {
	var io = require('socket.io')(server);

	/**
	 * if C2SSubjectManage not exist, create a new one for him!
	 */
	 var subjectManagers = null;
	if (!$injector.statics.SubjectManagers) {
		subjectManagers = $injector.statics.SubjectManagers = $injector.getInstance(util.string.uuid(), SubjectManagers);
	};

	/**
	 * connection socket 
	 **/
	io.on('connection', function(socket) {

		//notify the client, I've successful connect to your device
		socket.emit('connected');

		console.log('socket', socket.handshake.session);

		var currentObserver = null;
		var roomInstance = null;

		socket.on('registerOnChanel', function(data) {

			//data.roomId, create a room
			roomInstance = $injector.getInstance(data.roomId, C2SSubject, data.roomId);

			//client, create instance for the client
			currentObserver = $injector.getInstance(socket.client.id,
				C2SObserver,
				data.socketId, socket);

			roomInstance.attach(currentObserver);

			

			//add roomInstance to rooms
			subjectManagers.add(roomInstance);

		});


		socket.on('msg', function(msg) {
			roomInstance.dispatchMsg(msg);
		});


		socket.on('disconnect', function() {
			console.log('disconnect is called!!', socket.client.id);
			// if register with wrap the socket in observer,
			// then detach observer
			// else delete socket itself

			if (currentObserver) {
				roomInstance.detach(currentObserver);
			} else {
				delete socket.nsp.sockets[socket.id];
			}

		})
	});

	return io;
}


module.exports = dispatch;