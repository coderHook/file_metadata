'user strict'

var express = require('express'),
    multer = require('multer');
    
var upload = multer({dest: 'uploads/'});

var app = express();

app.use(express.static('public'));


app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server running on: https://fcc-basejumps-abel1987.c9users.io')
});