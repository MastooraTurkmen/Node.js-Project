const REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'encrypted data'
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

export {
    REQUEST_TIMEOUT,
    send,
}