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

async function postDataWithToken(additionalUrl, data, token) {
    const newUrl = url + additionalUrl;

    const response = await fetch(newUrl, {
        method: 'POST',
        mode: 'cors',
        cahce: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        redirect: 'follow',
        referrPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

async function getData(additionalUrl, token) { //register, login
    const newUrl = url + additionalUrl;

    const response = await fetch(newUrl, {
        method: 'GET',
        mode: 'cors',
        cahce: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        redirect: 'follow',
        referrPolicy: 'no-referrer',
    });
    return response.json();
}

module.exports = { postData, getData, postDataWithToken }