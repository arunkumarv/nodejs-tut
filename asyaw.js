/* 
Async Await tutorial
This code uses a request module to make http requests from a code.
You should only await on something that returns a Promise.
*/
const request = require('request');

function doRequest(url) {
    return new Promise(function (resolve, reject) {
        request(url, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
}

async function main() {
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    let res = await doRequest(url);
    console.log(res);
}

main();