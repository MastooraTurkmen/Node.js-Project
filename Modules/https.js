import { send } from './request.js';
import { read } from './response.js';

function make(url, data) {
    send(url, data);
    return read();
}

const responseData = make('https://google.com', 'hello');
console.log(responseData);