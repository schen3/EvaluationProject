var $injector = require('../util/Injector.js');
var Subject = require('../util/Observer.js').AbstractSubject;

var SubjectManagers = function() {
	this.subjects = [];
}

SubjectManagers.prototype.find = function(subject) {
	var index = -1;
	this.subjects.forEach(function(item, ind) {
		if(item.equal(subject)) {
			index = ind;
		}
	});
	return index === -1 ? false : true;
}

SubjectManagers.prototype.add = function(subject) {
	if(subject && subject instanceof Subject) {
		if(!this.find(subject)) {
			this.subjects.push(subject);
		}
	}
}

module.exports = SubjectManagers;