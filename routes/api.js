var router = require('express').Router;
var mongodbAPI = require('../db/mongodb.js');

// login
router.post('/login', function(req, res, next)) {
	var user = req.body;
	mongodbAPI.checklogin(user).then((userFind) => {
		//put it in the session
		req.session.user = {
			user : userFind
		};

		req.session.save();

		res.json({
			'status': "ok"
		});
	}).catch((err) => {
		res.json({
			'status': 'error',
			'msg' :    err
		});
	});
}

// loginout
router.post('/loginout', function(req, res, next)) {
	if(req.session) {
		req.session.destroy(function(err) {
			res.json({});
		});
	}
}

//active login status
router.get('/active/:activecode', function(req, res, next)) {

}


