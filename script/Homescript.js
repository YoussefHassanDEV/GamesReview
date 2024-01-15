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
            'X-RapidAPI-Key': '76fc61f8a7msh4770286876bd989p1fe559jsnc574e69ef844', // Replace with your RapidAPI key
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    });
    if (response.ok) {
        data = await response.json();
        display(catg);
    } else {
        console.error('Request failed with status:', response.status);
    }
}

function display(catg) {
    let cartona = '';
    for (let i = 0; i < Math.min(data.length, 150); i++) {
        cartona +=
            `
            <a class="col-md-3 bg-dark text-white" id="${i}" href="../index/OpendGame.html">
            <div onclick="disgame(${i})" class="bg-dark">
            <div><img src="${data[i].thumbnail}" alt="">
            </div>
            <div>${data[i].title}</div>
            <div>${data[i].short_description}</div>
            <div class='d-flex'>
                <div class='justify-content-start'>${data[i].genre}</div>
                <div class='justify-content-end'>${data[i].platform}</div>
            </div>
        </div></a> `;

    }
    let targetElement = document.querySelector(`#${catg}1`);
    if (targetElement) {
        targetElement.innerHTML = cartona;
    } else {
        console.error(`Element with id '${catg}1' not found.`);
    }
}

function disgame(index) {
    localStorage.setItem('data', JSON.stringify(data[index]));
}

fetchgame('MMORPG');
MMORPG?.addEventListener('click', function () {
    fetchgame('MMORPG');
});
SHOOTER?.addEventListener('click', function () {
    fetchgame('SHOOTER');
});
SAILING?.addEventListener('click', function () {
    fetchgame('SAILING');
    // display('SAILING')
});
PERMADEATH?.addEventListener('click', function () {
    fetchgame('PERMADEATH');
});
SUPERHERO?.addEventListener('click', function () {
    fetchgame('SUPERHERO');
});
PIXEL?.addEventListener('click', function () {
    fetchgame('PIXEL');
});