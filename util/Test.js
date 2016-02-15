var C2SObserver = require('./C2SObserver.js').C2SObserver;
var C2SSubject = require('./C2SObserver.js').C2SSubject;
var SubjectManagers = require('./SubjectManagers.js');
var $injector = require('./Injector.js');
var util = require('./Util.js');

var subjectManages = null;
if(!$injector.statics.SubjectManagers) {
	subjectManages = $injector.statics.SubjectManagers = $injector.getInstance('xxxxManagers', SubjectManagers);
}

var s2ssubject = $injector.getInstance('s2ssubjectManage', C2SSubject, 'xxxRoom');
var s1sObserver = $injector.getInstance('s1sObserver', C2SObserver, 'id1');
var s2sObserver = $injector.getInstance('s2sObserver', C2SObserver, 'id2');
var s2_same_sObserver = $injector.getInstance('s2sObserver', C2SObserver, 'id2');
var s2sObserver_fake = $injector.getInstance('s2sObserver_fake', C2SObserver, 'id2_fake');
var s3sObserver = $injector.getInstance('s3sObserver', C2SObserver, 'id3');

//test
// var s2sObserver = new S2SObserver("id1");
// var s3sObserver = new S2SObserver("id2");



// s2ssubjectManage.attach(s2sObserver);
s2ssubject.attach(s3sObserver);
s2ssubject.attach(s1sObserver);
s2ssubject.attach(s2sObserver);
s2ssubject.attach(s2_same_sObserver);

s2ssubject.detach(s3sObserver);


subjectManages.add(s2ssubject);
console.log('subjectManages',  subjectManages.subjects[0]);

var msg = {
	from: 'xx',
	to: 'id2,id3,id4,id1',
	msgtype: util.constant.MSG_GROUP,
	msgcontent: ''
}



s2ssubject.dispatchMsg(msg);


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