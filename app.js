const express = require('express');
const request = require('request');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const app = express();
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render('search');
});

app.get('/results', function(req, res){
    var query = req.query.search;
    var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=ca9bf8a1';
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body)
            res.render('results', {data: data});
        }
    });
});






 app.listen(3000, function(){
     console.log('Movie app started on port: 3000');
 });
