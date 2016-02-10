
var sayHello = function(newV) {
    return function() {
        console.log(newV);
    };
};

var delaySayHello = function(delayString) {
    setTimeout(sayHello(delayString), 1000);
};
