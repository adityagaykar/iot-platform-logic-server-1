var express = require('express');
var router = express.Router();
var request = require('request');

//POST request from event server
router.post('/v1.0/callback',function(req,res,next){
	var callback = Object.keys(req.body);	
	console.log("> "+req.body.callback);	
	res.send("success : "+req.body.callback);
});

module.exports = router;