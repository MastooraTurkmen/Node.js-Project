import { send } from './request.mjs';
import { read } from './response.mjs';

function make(url, data) {
    send(url, data);
    return read();
}

const responseData = make('https://google.com', 'hello');
console.log(responseData);