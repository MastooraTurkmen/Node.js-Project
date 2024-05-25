const modal = require('../models/friends.modal')

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }
    const newFriends = {
        name: req.body.name,
        id: modal.length
    }
    modal.push(newFriends);
    res.json(newFriends)
}

function getFriends(req, res) {
    res.json(modal);
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = modal[friendId]
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        })
    }
}


module.exports = {
    postFriend,
    getFriends,
    getFriend
}