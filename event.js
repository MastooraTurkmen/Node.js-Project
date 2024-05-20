const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on('race win', function () {
    console.log('Congratulation! you are the best!');
})

// Subscribe to celebrity for Observer 2
celebrity.on('race win', function () {
    console.log('Boo i could have better than that!');
})

celebrity.emit('race win');
celebrity.emit('race lost');
celebrity.emit('race win');