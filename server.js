'use strict';

const express = require('express');
const app = express(); //creates a server that is an object

app.use(express.static('./public'));

//this is a route 
//called in browser http://localhost:3000/Portfolio
//response what will show on the browser 

app.get('/Portfolio', function(request,response){
console.log('route portfiolio works');
response.send('this is the response');
});

app.listen(3000, function(){
console.log('starting!');

});



