function getMessages(req, res) {
    res.send('<url><li>Hello Albert!</li></url>');
}

function postMessage(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage
}