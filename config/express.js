const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = (app) => {

    app.set('views', path.join(__dirname, 'views'));
    app.set('views engine', 'hbs');
    
   
  
    //TODO: Setup the body parser

    //TODO: Setup the static files

};