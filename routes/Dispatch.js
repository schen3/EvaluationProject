var $injector = require('../util/Injector.js');
var C2SObserver = require('../util/C2SObserver.js').C2SObserver;
var C2SSubjectManage = require('../util/C2SObserver.js').C2SSubjectManage;
var util = require('../util/Util.js');

var dispatch = function(server) {
		var io = require('socket.io')(server);
		console.log('io', io);

	/**
	 * if C2SSubjectManage not exist, create a new one for him!
	 */
	if(!$injector.statics.SubjectManager) {
		$injector.statics.SubjectManager = $injector.getInstance(util.string.uuid(), C2SSubjectManage);
	};

	/**
	 * connection socket 
	 **/
	io.on('connection', function(socket) {
		
		//notify the client, I've successful connect to your device
		socket.emit('connected');

		var currentObserver = null;

		//login first
		socket.on('login', function(data) {

			console.log('login called!!', socket.client.id);
			//success TODO
			//socketID comes from 
			currentObserver = $injector.getInstance(socket.client.id, 
														C2SObserver, 
														data.socketId, socket);
			
			$injector.statics.SubjectManager.attach(currentObserver);
			
			socket.on('msg', function(msg) {
				$injector.statics.SubjectManager.dispatchMsg(msg);
			});

			//error		 TODO	
		});

		socket.on('disconnect', function() {
			console.log('disconnect is called!!', socket.client.id);
			// if register with wrap the socket in observer,
			// then detach observer
			// else delete socket itself
			
			if(!!currentObserver) {
				$injector.statics.SubjectManager.detach(currentObserver);	
			} else {
				delete socket.nsp.sockets[socket.id];
			}
				
		})
	});
}


module.exports = dispatch;