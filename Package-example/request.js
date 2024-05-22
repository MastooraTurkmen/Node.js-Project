const axios = require('axios');

axios.get('https://www.google.com')
    .then((res) => {
        console.log(res);
    })
    .catch((error) => console.log(error))
    .then(() => console.log('All done'))