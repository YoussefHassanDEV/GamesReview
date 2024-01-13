'strict mode'
let MMORPG = document.querySelector('#MMORPG-tab');
let MMORPG1 = document.querySelector('#MMORPG1');

let SHOOTER = document.querySelector('#SHOOTER-tab');
let SHOOTER1 = document.querySelector('#SHOOTER1');

let SAILING = document.querySelector('#SAILING-tab');
let SAILING1 = document.querySelector('#SAILING1');

let PERMADEATH = document.querySelector('#PERMADEATH-tab');
let PERMADEATH1 = document.querySelector('#PERMADEATH1');

let SUPERHERO = document.querySelector('#SUPERHERO-tab');
let SUPERHERO1 = document.querySelector('#SUPERHERO1');

let PIXEL = document.querySelector('#PIXEL-tab');
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
        display(catg);

    } else {
        console.error('Request failed with status:', response.status);
    }
    console.log('hello8');

}

function display(catg) {
    console.log("Hello6")
    let cartona = '';
    document.querySelector(`#${catg}1`).innerHTML = cartona;

    for (let i = 0; i < Math.min(data.length, 60); i++) {
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
    console.log(data[0].genre)
    document.querySelector(`#${catg}1`).innerHTML = cartona;
}

MMORPG?.addEventListener('click', function () {
    fetchgame('mmorpg');
    // display('MMORPG')
});
SHOOTER?.addEventListener('click', function () {
    fetchgame('shooter');
    // display('SHOOTER')
});
SAILING?.addEventListener('click', function () {
    fetchgame('sailing');
    // display('SAILING')
});
PERMADEATH?.addEventListener('click', function () {
    fetchgame('permadeath');
    // display('PERMADEATH')

});
SUPERHERO?.addEventListener('click', function () {
    fetchgame('superhero');
    // display('SUPERHERO')

});
PIXEL?.addEventListener('click', function () {
    fetchgame('pixel');
    // display('PIXEL')

});