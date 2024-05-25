const express = require('express')
const friendController = require('./controllers/friends');
const friendsRouter = express.Router();

friendsRouter.post('/', friendController.postFriend);
friendsRouter.get('/', friendController.getFriends);
friendsRouter.get('/:friendId', friendController.getFriend);

module.exports = friendsRouter;