const express = require('express');
const app = express();
 require('dotenv').config();


app.set('port', process.env.PORT_APP || 3000);


module.exports = app;