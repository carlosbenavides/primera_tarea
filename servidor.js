var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');


app.get('/',function(req,res){
    res.send('mi servidos');
});

var generarUsuario = function(){
   var randomName = faker.name.findName();
   var randomEmail = faker.internet.email();
   var randomImage = faker.image.avatar();
   return {
       nombre : randomName,
       email  : randomEmail,
       image  : randomImage	
   }
}
var generarPost = function(){
   var randomNumber = faker.random.number();
   var randomName = faker.name.jobTitle();
   var randomWord = faker.name.jobDescriptor();
   var randomDate = faker.date.past();
   return {
	numero :randomNumber,
	name   :randomName,
	word   :randomWord,
	date   :randomDate
	}
}
var generarCompany = function(){
    var randomSuff   = faker.company.suffixes();
    var randomName   = faker.company.companyName();
    var randomBs     = faker.company.bs();
    var randomAddress = faker.address.city();
    var randomStreet = faker.address.streetAddress();
    return {
	suff : randomSuff,
        name : randomName,
	bs   : randomBs,
        city : randomAddress,
	street : randomStreet
	}
}


app.get('/friends',function(req,res){
    var cantidad = _.random(5,10);
    var usuarios = _.times(cantidad,generarUsuario);   
    res.json(usuarios);
});

app.get('/post',function(req,res){
    var cantidad = _.random(10,15);
    var post = _.times(cantidad,generarPost);
    res.json(post);
});

app.get('/amigos',function(req,res){
    res.send('mis amigos');
});

app.get('/company',function(req,res){
    var cantidad = _.random(20,50);
    var companies = _.times(cantidad,generarCompany);
    res.json(companies);
})

app.listen(3000);
