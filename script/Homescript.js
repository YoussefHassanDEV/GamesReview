class GameManager {
    constructor() {
        this.categories = [
            'MMORPG',
            'SHOOTER',
            'SAILING',
            'PERMADEATH',
            'SUPERHERO',
            'PIXEL'
        ];
        this.data = '';
        this.currentCategory = 'MMORPG';

        this.initializeElements();
        this.attachEventListeners();
        this.fetchGame(this.currentCategory);
    }

    initializeElements() {
        this.categoryTabs = this.categories.map(category => document.querySelector(`#${category}-tab`));
        this.categoryContainers = this.categories.map(category => document.querySelector(`#${category}1`));
    }

    attachEventListeners() {
        this.categoryTabs.forEach((tab, index) => {
            tab?.addEventListener('click', () => {
                this.fetchGame(this.categories[index]);
            });
        });
    }

    async fetchGame(catg) {
        let apiUrl = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catg}`;
        let response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '76fc61f8a7msh4770286876bd989p1fe559jsnc574e69ef844',
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
                <a class="col-md-3 bg-dark text-white" id="${i}" href="../index/OpendGame.html">
                <div onclick="this.disgame(${i})" class="bg-dark">
                <div><img src="${this.data[i].thumbnail}" alt=""></div>
                <div>${this.data[i].title}</div>
                <div>${this.data[i].short_description}</div>
                <div class='d-flex'>
                    <div class='justify-content-start'>${this.data[i].genre}</div>
                    <div class='justify-content-end'>${this.data[i].platform}</div>
                </div>
            </div></a> `;
        }

        let targetContainer = document.querySelector(`#${catg}1`);
        if (targetContainer) {
            targetContainer.innerHTML = cartona;
        } else {
            console.error(`Element with id '${catg}1' not found.`);
        }
    }

    disgame(index) {
        localStorage.setItem('data', JSON.stringify(this.data[index]));
    }
}

const gameManager = new GameManager();
