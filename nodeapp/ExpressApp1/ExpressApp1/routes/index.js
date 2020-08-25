'use strict';
const fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/discography/:id', function (req, res) {
    let rawdata = fs.readFileSync('C:/Users/shadowlerone/source/repos/ExpressApp1/ExpressApp1/routes/Json.json');
    let album = JSON.parse(rawdata)[req.params.id];
    console.log(album);
    res.render('album', album);
});

module.exports = router;
