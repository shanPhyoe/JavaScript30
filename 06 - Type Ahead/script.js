const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        cities.push(...data);
        // console.log(cities);
    });

const findMatches = function (wordToMatch, cities) {
    return cities.filter(place => {
        const regExp = new RegExp(wordToMatch, 'gi');
        return place.city.match(regExp) || place.state.match(regExp);
    });
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const displayMatches = function () {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray
        .map(place => {
            const regEx = new RegExp(this.value, 'gi');
            const cityName = place.city.replace(
                regEx,
                `<span class='hl'>${this.value}</span>`
            );
            const stateName = place.state.replace(
                regEx,
                `<span class='hl'>${this.value}</span>`
            );
            return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(
                    place.population
                )}</span>
            </li>
        `;
        })
        .join('');
    suggestions.innerHTML = html;
};

searchInput.addEventListener('keyup', displayMatches);
searchInput.addEventListener('change', displayMatches);
