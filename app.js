var express = require('express');
var bodyParser = require('body-parser');
const path = require("path");

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

var port = 8080;

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/index.html',function(req,res){
	res.redirect('/');
});

app.get('/about',function(req,res){
	res.sendFile(path.join(__dirname+'/views/about.html'));
});
app.get('/about.html',function(req,res){
	res.redirect('/about')
});

app.get('/blog',function(req,res){
	res.sendFile(path.join(__dirname+'/views/blog.html'));
});
app.get('/blog.html',function(req,res){
	res.redirect('/blog')
});

app.get('/contact',function(req,res){
	res.sendFile(path.join(__dirname+'/views/contact.html'));
});
app.get('/contact.html',function(req,res){
	res.redirect('/contact')
});

app.get('/portfolio',function(req,res){
	res.sendFile(path.join(__dirname+'/views/portfolio.html'));
});
app.get('/portfolio.html',function(req,res){
	res.redirect('/portfolio')
});

app.get('/service',function(req,res){
	res.redirect('/')
});
app.get('/service.html',function(req,res){
	res.redirect('/')
});

app.get('/workinprogress',function(req,res){
	res.sendFile(path.join(__dirname+'/views/workinprogress.html'));
});

app.get('/single',function(req,res){
	res.sendFile(path.join(__dirname+'/views/single.html'));
});
app.get('/single.html',function(req,res){
	res.redirect('/single')
});

app.get('/team',function(req,res){
	res.sendFile(path.join(__dirname+'/views/team.html'));
});
app.get('/team.html',function(req,res){
	res.redirect('/team')
});

app.listen(port,function(req,res){
	console.log('Escuchando en el puerto: ' + port);
});

