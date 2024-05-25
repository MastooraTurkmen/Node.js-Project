const express = require('express')
const messagesController = require('./controllers/messages.controller');
const messagesRouter = express.Router();

app.get('/', messagesController.getMessages);
app.post('/', messagesController.postMessage);

module.exports = messagesRouter;