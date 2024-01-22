class GameApp {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.data = '';
        this.OpendGame = document.querySelector("#OpendGame");
        this.hero = document.querySelector("#hero");
        this.closeButton = document.querySelector("#Close");
        this.categories = {
            MMORPG: { tab: '#MMORPG-tab', display: '#MMORPG1' },
            SHOOTER: { tab: '#SHOOTER-tab', display: '#SHOOTER1' },
            SAILING: { tab: '#SAILING-tab', display: '#SAILING1' },
            PERMADEATH: { tab: '#PERMADEATH-tab', display: '#PERMADEATH1' },
            SUPERHERO: { tab: '#SUPERHERO-tab', display: '#SUPERHERO1' },
            PIXEL: { tab: '#PIXEL-tab', display: '#PIXEL1' }
        };

        this.init();
    }

    init() {
        this.fetchGame('MMORPG');
        this.setupEventListeners();
    }

    async fetchGame(catg) {
        let apiUrl = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catg}`;
        let response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });
        if (response.ok) {
            this.data = await response.json();
            this.display(catg);
        } else {
            console.error('Request failed with status:', response.status);
        }
    }

    display(catg) {
        let cartona = '';
        for (let i = 0; i < Math.min(this.data.length, 150); i++) {
            cartona +=
                `
                <div class="col-md-3 bg-dark text-white" id="${i}" >
                <div onclick="gameApp.disgame(${i})" class="bg-dark">
                <div><img src="${this.data[i].thumbnail}" alt="">
                </div>
                <div>${this.data[i].title}</div>
                <div>${this.data[i].short_description}</div>
                <div class='d-flex'>
                    <div class='justify-content-start'>${this.data[i].genre}</div>
                    <div class='justify-content-end'>${this.data[i].platform}</div>
                </div>
            </div></div> `;
        }
        let targetElement = document.querySelector(this.categories[catg].display);
        if (targetElement) {
            targetElement.innerHTML = cartona;
        } else {
            console.error(`Element with id '${catg}1' not found.`);
        }
    }

    disgame(index) {
        this.OpendGame.classList.remove("d-none");
        this.hero.classList.add("d-none");
        let cartona = `
        <div><img src="${this.data[index].thumbnail}" alt=""></div>
        <div class="d-flex flex-column">
            <div>Title: ${this.data[index].title}</div>
            <div>Category: ${this.data[index].genre}</div>
            <div>Platform: ${this.data[index].platform}</div>
            <div>Short Description: ${this.data[index].short_description}</div>
        </div>
    `;

        let targetElement = document.querySelector(`#Card`);
        if (targetElement) {
            targetElement.innerHTML = cartona;
        } else {
            console.error(`Element with id 'Card' not found.`);
        }
    }

    setupEventListeners() {
        for (const category in this.categories) {
            const tab = document.querySelector(this.categories[category].tab);
            if (tab) {
                tab.addEventListener('click', () => this.fetchGame(category));
            }
        }

        this.closeButton?.addEventListener('click', () => {
            this.OpendGame.classList.add("d-none");
            this.hero.classList.remove("d-none");
        });
    }
}

// Usage
const apiKey = '76fc61f8a7msh4770286876bd989p1fe559jsnc574e69ef844';
const gameApp = new GameApp(apiKey);
