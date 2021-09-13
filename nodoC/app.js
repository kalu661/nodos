require('dotenv').config();
const fetch = require('node-fetch');

const Server = require('./models/server');

const server = new Server();

server.listen();

/* const nodoA = {
  'nodos': [{
      'msg': {
          'ip': '192.168.80.207', 'name': 'A'
      }, 'ip-send': '192.168.0.93', 'ip-recibe': '192.168.0.93'
  }]
};

fetch('http://192.168.0.26:3000/', {
  method: 'post',
  body: JSON.stringify(nodoA),
  headers: { 'Content-Type': 'application/json' }
}); */


/* const data = {};

fetch('http://192.168.0.26:3000/', {
    method: 'post',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
}); */


/* require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000) */