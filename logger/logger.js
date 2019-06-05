'use strict';

require('dotenv').config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const HOST_URL = `${HOST}:${PORT}`;

const socketIOClient = require('socket.io-client');
const socket = socketIOClient(HOST_URL);

const events = require('../util/events.js');

socket.on('connect_error', (error) => {
  throw error;
});

socket.on(events.LOG_ERROR_EVENT, (error) => {
  console.log(error);
});

socket.on(events.LOG_SAVE_EVENT, (message) => {
  console.log(message);
});

