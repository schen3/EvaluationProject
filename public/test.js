// var sayHello = function(newV) {
//     return function() {
//         console.log(newV);
//     };
// };

// var delaySayHello = function(delayString) {
//     setTimeout(sayHello(delayString), 1000);
// };

//  var socket = io('ws://localhost:8090/');

//  socket.on('message', function(msg) {
//  	console.log(msg);
//  	socket.emit('get', {"sever" : "server"});
//  	setTimeout(function() {
//  		socket.disconnect();
//  	}, 3000);
//  })


(function(obj) {
    'use strict';
    var socket0 = io.connect('http://localhost:8090');

    socket0.on('connected', function(data) {
        socket0.emit('registerOnChanel', {
            roomId: 'rrr1',
            socketId: 'xxxx1'
        });

        socket0.on('msg', function(data) {
            console.log(" xxxx1 received data", data);
        });
    });

    var socket1 = io.connect('http://localhost:8090');
    socket1.on('connected', function(data) {
        socket1.emit('registerOnChanel', {
            roomId: 'rrr2',
            socketId: 'xxxx2'
        });

        socket1.on('msg', function(data) {
            console.log("xxxx2 received data", data);
        });
    });

    var socket2 = io.connect('http://localhost:8090');
    socket2.on('connected', function(data) {
        socket2.emit('registerOnChanel', {
            roomId: 'rrr1',
            socketId: 'xxxx3'
        });

        socket2.on('msg', function(data) {
            console.log("xxxx3 received data", data);
        });
    });

    // setTimeout(function(){
    //         socket.close();
    //     }, 3000);
    obj.socket0 = socket0;
    obj.socket1 = socket1;
})(window);