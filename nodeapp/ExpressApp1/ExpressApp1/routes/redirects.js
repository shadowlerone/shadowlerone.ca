'use strict';
const fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET users listing. */
/* Redirects */
router.get(['/twitch','ttv'], function (req,res){
	res.redirect('https://twitch.tv/shadowlerone');
});

router.get(['/instagram', '/insta'], function (req,res){
	res.redirect('https://instagram.com/shadowlerone');
});

router.get(['/youtube','/yt'], function (req,res){
	res.redirect('https://youtube.com/shadowlerone');
});
router.get(['/bandcamp','/bc'], function (req,res){
	res.redirect('https://shadowlerone.bandcamp.com/');
});

router.get(['/soundcloud','/sc'], function (req,res){
	res.redirect('https://soundcloud.com/shadowlerone/');
});

router.get(['/twitter'], function (req,res){
	res.redirect('https://twitter.com/shadowlerone');
});

router.get(['/socials','/links'], function (req, res){
	let rawdata = fs.readFileSync('routes/socials.json');
	let socials = JSON.parse(rawdata);
	res.render('socials', socials);
});


module.exports = router;
