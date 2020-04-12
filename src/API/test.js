let url = 'http://jolly-backend.herokuapp.com';

function test() {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
}

module.exports = { test }