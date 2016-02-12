require('./common.js');
var util = require('./Util.js');

/**
 * use singleton pattern to keep all singleton of objClass
 */
var Injector = function() {
	var instances = [];

	// retrieve the instance from instances via objName
	function _retrieveInstance(objName) {
		instances.forEach(function(obj) {
				if(!!obj && obj.name == objName) {
					return obj.instance;
				}
		});
		return null;
	};

	// create Instance
	function _createInstance(objName, objClass, args) {
		if(typeof objClass !== 'function') {
			console.log('[Singleton.js] Error to create Instance code');
			return;
		}
		var tmp = {
			name : objName,
			instance : util.args.construct(objClass, args)
		};

		instances.push(tmp);
		return tmp.instance;
	}

	// Get Instance
	// if not found, create a new one for objClass
	function getInstance(objName, objClass) {
		var instance = _retrieveInstance(objName);
		if(!instance) {
			return _createInstance(objName, objClass, util.args.list(arguments, 2));
		} else {
			return instance;
		}
	}

	// if need to remove instance
	// please give the socket-uuid name
	function removeInstance(objName) {
		var index = -1;
		instances.forEach(function(obj, i) {
				if(!!obj && !!obj.instance.getUUID_Socket && obj.instance.getUUID_Socket() == objName) {
					index = i;
				}
		});

		if(index !== -1) {
			delete instances[index];
			instances.remove(index)
		} 
	}

	return {
		getInstance : getInstance,
		removeInstance : removeInstance,
		instances : instances,
		statics : {}
	};
};


// SubjectManager;
//Injector.statics.SubjectManager;


module.exports = new Injector();