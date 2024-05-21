const { send } = require('./request.js');
const { read } = require('./response.js')

function make(url, data) {
    send(url, data);
    return read();
}

const responseData = make('https://google.com', 'hello');
console.log(responseData);