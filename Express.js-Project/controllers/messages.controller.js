const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to my Friends!',
        friend: 'Elon Musk'
    });
}

function postMessage(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage
}