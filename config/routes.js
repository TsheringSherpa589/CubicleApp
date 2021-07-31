// TODO: Require Controllers...
const express = require("express");
const bodyParser = require("body-parser");



module.exports = (app) => {
    app.get('/', function (req,res) {
         res.render('index');
    });
    app.get('/about', function(req,res) {
        res.render('Welcome to the about page');
   });
   app.get('/create', function (req,res) {
    res.render('Get request to create page');
    });
    app.get('/details/:id', function (req,res) {
        res.render('details page about selected cude');
   });

    // TODO...
};