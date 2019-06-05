'use strict';

require('dotenv').config();

const constants = require('../util/constants.js');
const events = require('../util/events.js');

const PORT = process.env.PORT || constants.PORT;
const HOST = process.env.HOST || constants.SERVER_URL;
const HOST_URL = `${HOST}:${PORT}`;

const socketIOClient = require('socket.io-client');
const socket = socketIOClient(HOST_URL);

socket.on('connect', () => {
  console.log('Socket connected');
});

socket.on('connect_error', (error) => {
  console.log(error);
});

socket.on(events.LOG_ERROR_EVENT, (error) => {
  console.log(error);
});

socket.on(events.LOG_SAVE_EVENT, (message) => {
  console.log(message);
});

