const express  =  require('express');
const path =  require('path');
const bobyParser = require('body-parser');

const app = express();
//config del server
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname, '../app/views'));

//midelware

app.use(bobyParser.urlencoded({extended: false}));
module.exports  = app;