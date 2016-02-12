var S2SObserver = require('./S2SObserver.js').S2SObserver;
var S2SSubjectManage = require('./S2SObserver.js').S2SSubjectManage;
var $injector = require('./Injector.js');
var util = require('./Util.js');


var s2ssubjectManage = $injector.getInstance('s2ssubjectManage', S2SSubjectManage);
var s1sObserver = $injector.getInstance('s1sObserver', S2SObserver, 'id1');
var s2sObserver = $injector.getInstance('s2sObserver', S2SObserver, 'id2');
var s2_same_sObserver = $injector.getInstance('s2sObserver', S2SObserver, 'id2');
var s2sObserver_fake = $injector.getInstance('s2sObserver_fake', S2SObserver, 'id2_fake');
var s3sObserver = $injector.getInstance('s3sObserver', S2SObserver, 'id3');

//test
// var s2sObserver = new S2SObserver("id1");
// var s3sObserver = new S2SObserver("id2");

var s2ssubjectManage = new S2SSubjectManage();


// s2ssubjectManage.attach(s2sObserver);
s2ssubjectManage.attach(s3sObserver);
s2ssubjectManage.attach(s1sObserver);
s2ssubjectManage.attach(s2sObserver);
s2ssubjectManage.attach(s2_same_sObserver);

s2ssubjectManage.detach(s3sObserver);



var msg = {
	from: 'xx',
	to: 'id2,id3,id4,id1',
	msgtype: util.constant.MSG_GROUP,
	msgcontent: ''
}

console.log($injector.instances.length);

s2ssubjectManage.dispatchMsg(msg);


//Singleton Mode, Observer Pattern Finished
// Chat ?
// 1: single Socket send or receive message
//
//
//
//
// 2: Message -> sendMessage, receiveMessage
// EventRoute => on -> || 1: SubjectManage -> persist -> redis?_localmachine  -> Observer 
//					   || 2: SubjectManage -> persist -> redis?_redirect_msg -> 
//							 EventRoute => on(SubjectManage -> Observer) Server Side Message
//
//					   || group: [persist] route the message in the localmachine
//								 route the message over the Server Side 
//
//
//
//
// 
// 3: Api:// api/chathistory/xxx/start&per
// 
// 
// [Server <=> Client], [Client <=> Client]
// 