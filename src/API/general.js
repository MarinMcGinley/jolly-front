require('dotenv').config();

const url = process.env.REACT_APP_URL;

function test() {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
}

async function postData(additionalUrl, data) { //register, login
    const newUrl = url + additionalUrl;

    console.log('url: ' + newUrl);

    const response = await fetch(newUrl, {
        method: 'POST',
        mode: 'cors',
        cahce: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

module.exports = { postData }