'use strict';

const fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
	res.redirect('/');
	
});

router.get('/album/:id/:format', function (req, res){
	let rawdata = fs.readFileSync('routes/albums.json');
	let albums = JSON.parse(rawdata);
	var callback;
	if (req.query.callback){
		callback = req.query.callback;
	} else {
		callback = `/discography/${req.params.id}`;
	}
	var album = albums['albums'][req.params.id]['title'];
	res.download(`${__dirname}/../downloads/albums/${req.params.format}/${album}.zip`);
	res.redirect(`/${callback}`);
});

module.exports = router;
