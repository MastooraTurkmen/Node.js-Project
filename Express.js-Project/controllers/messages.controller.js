const path = require('path');

function getMessages(req, res) {
    const imagePath = path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg');
    res.sendFile(imagePath);
}

function postMessage(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage
}