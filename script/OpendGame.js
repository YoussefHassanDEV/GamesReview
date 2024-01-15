class GameDetails {
    constructor(data) {
        this.data = data;
    }

    display() {
        let cartona = `
            <div><img src="${this.data.thumbnail}" alt=""></div>
            <div class="d-flex flex-column">
                <div>Title: ${this.data.title}</div>
                <div>Category: ${this.data.genre}</div>
                <div>Platform: ${this.data.platform}</div>
                <div>Short Description: ${this.data.short_description}</div>
            </div>
        `;

        let targetElement = document.querySelector(`#Card`);
        if (targetElement) {
            targetElement.innerHTML = cartona;
        } else {
            console.error(`Element with id 'Card' not found.`);
        }
    }
}

let data = localStorage.getItem('data');
console.log(JSON.parse(data));
data = JSON.parse(data);

let gameDetails = new GameDetails(data);
gameDetails.display();
