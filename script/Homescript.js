let MMORPG = document.querySelector('#MMORPG');
let MMORPG1 = document.querySelector('#MMORPG1');

let SHOOTER = document.querySelector('#SHOOTER');
let SHOOTER1 = document.querySelector('#SHOOTER1');

let SAILING = document.querySelector('#SAILING');
let SAILING1 = document.querySelector('#SAILING1');

let PERMADEATH = document.querySelector('#PERMADEATH');
let PERMADEATH1 = document.querySelector('#PERMADEATH1');

let SUPERHERO = document.querySelector('#SUPERHERO');
let SUPERHER1 = document.querySelector('#SUPERHERO1');

let PIXEL = document.querySelector('#PIXEL');
let PIXEL1 = document.querySelector('#PIXEL1');

let data = '';
async function fetchgame(catg) {
    let apiUrl = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catg}`;
    let response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f7cf0866aemsh931debd9ba0ec4cp110723jsn8084da91a82c', // Replace with your RapidAPI key
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    });
    if (response.ok) {
        data = await response.json();
        console.log('hello5');
        // display(catg);
    } else {
        console.error('Request failed with status:', response.status);
    }
    console.log('hello8');

}

function display(catg) {
    console.log("Hello6")
    let cartona = '';
    for (let i = 0; i < Math.min(data.length,60); i++) {
        cartona +=
            `<div class="card col-md-3 bg-dark text-white">
            <div><img src="${data[i].thumbnail}" alt="">
            </div>
            <div>${data[i].title}</div>
            <div>${data[i].short_description}</div>
            <div class='d-flex'>
                <div class='justify-content-start'>${data[i].genre}</div>
                <div class='justify-content-end'>${data[i].platform}</div>
            </div>
        </div>`;
    }
    console.log("Hello7")
    console.log(data.length)
    document.querySelector(`#${catg}1`).innerHTML = cartona;
}

MMORPG?.addEventListener('click', function () {
    fetchgame('MMORPG');
    display('MMORPG')
});
SHOOTER?.addEventListener('click', function () {
    fetchgame('shooter');
    display('SHOOTER')
});
SAILING?.addEventListener('click', function () {
    fetchgame('SAILING');
    display('SAILING')
});
PERMADEATH?.addEventListener('click', function () {
    fetchgame('PERMADEATH');
    display('PERMADEATH')

});
SUPERHERO?.addEventListener('click', function () {
    fetchgame('SUPERHERO');
    display('SUPERHERO')

});
PIXEL?.addEventListener('click', function () {
    fetchgame('PIXEL');
    display('PIXEL')

});