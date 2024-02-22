// Forskellige måder at hente dato på.
//console.log(new Date());
//console.log(Date());
//console.log(Date.now());

// Intl funktioner.
const date = new Date();

const danishDate = new Intl.DateTimeFormat("da-dk").format(date);
console.log(danishDate);

const americanDate = new Intl.DateTimeFormat("en-us").format(date);
console.log(americanDate);

window.onload = function() {
    fetchDate();
};

function fetchDate() {
    fetch('https://0e8a-195-249-146-101.ngrok-free.app/')
    .then(response => console.log(response.text()))
    .catch(error => {
        console.error('Error fetching date: ', error);
    })

    /*
    fetch('https://0e8a-195-249-146-101.ngrok-free.app/')
        .then(response => response.json())
        .then(data => {
            displayDate(data.date);
        })
        .catch(error => {
            console.error('Error fetching date:', error);
        });
    */
}

function displayDate(date) {
    const dateDisplay = document.getElementById('dateDisplay');
    dateDisplay.textContent = 'Date: ' + formatDate(date);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
}