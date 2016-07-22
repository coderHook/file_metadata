'user strict'

var express = require('express'),
    multer = require('multer');
    
var upload = multer();

var app = express();

app.use(express.static('public'));

app.post('/get-file-size', upload.single('file'), (req, res)=>{
    
     res.send({"file_size": req.file.size, "name": req.file.originalname});
        
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server running on: https://fcc-basejumps-abel1987.c9users.io')
});