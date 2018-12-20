'use strict';

const express = require('express');
const mysql  = require('mysql');

// Constants
const PORT = 3000;


// App
const app = express();
app.get('/', function (req, res) {

  //Connect to DB
  const mysqlCon = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  });

  mysqlCon.connect((err) => {
    if(err) {
      return res.json({
        confirmation: 'fail',
        message: err
      })
    }
    return res.json({
      confirmation: 'success',
    })
  })

});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

