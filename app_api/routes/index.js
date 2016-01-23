var express = require('express');
var app = express();
var ctrlContact = require('../controllers/contact');

// app.post('/email', ctrlContact.sendEmail);

app.post('/verifyCaptcha', ctrlContact.verifyCaptcha);

module.exports = app;