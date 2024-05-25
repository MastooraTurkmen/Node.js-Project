const express = require('express');
const app = express();
const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Alber Einstein'
    },
    {
        id: 1,
        name: 'Sir Isaac Newton'
    }
];

app.get('/friends', (req, res) => {
    res.json(friends);
})

// Get /friends/22
app.get('/friends/:friendId', () => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId]
    if (friend) {
        res.json(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        })
    }
})

app.get('/messages', (req, res) => {
    res.send({
        id: 1,
        name: 'Sir Isaac Newton'
    });
});

app.post('/messages', (req, res) => {
    console.log('Updating messages...');
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});