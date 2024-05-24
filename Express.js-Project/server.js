const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('HEEEELLOOOOO')
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