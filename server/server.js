'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const socketIO = require('socket.io')(PORT);

const events = require('../util/events.js');

socketIO.on('connection', (socket) => {
  console.log('New socket connected', socket.id);

  socket.on(events.SAVE_EVENT, (message) => {
    socketIO.emit(events.LOG_SAVE_EVENT, message);
  });

  socket.on(events.ERROR_EVENT, (error) => {
    socketIO.emit(events.LOG_ERROR_EVENT, error);
  });

  socket.on('error', (error) => {
    throw error;
  });
});

