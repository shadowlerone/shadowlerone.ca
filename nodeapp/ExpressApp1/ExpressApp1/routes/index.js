'use strict';
const fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { desc: fs.readFileSync("routes/desc.txt") });
});

router.get('/discography', function (req, res) {
    let rawdata = fs.readFileSync('routes/albums.json');
    let albums = JSON.parse(rawdata);
    // console.log(rawdata);
    res.render('discography', albums);
});

router.get('/discography/:id', function (req, res) {
    let rawdata = fs.readFileSync('routes/albums.json');
    let albums = JSON.parse(rawdata);
    console.log(albums['albums']);
    var album = albums['albums'][req.params.id];
    res.render('album', album);
});


module.exports = router;
