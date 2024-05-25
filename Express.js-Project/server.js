const express = require('express');
const messagesController = require('./controllers/messages.controller')
const friendController = require('./controllers/friends')

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', friendController.postFriend)
app.get('/friends', friendController.getFriends);
app.get('/friends/:friendId', friendController.getFriend)

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});