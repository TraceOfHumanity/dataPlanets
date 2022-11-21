const domElements = {
  results: document.getElementById('results'),
  search: {
    input: document.getElementById('search-input'),
    button: document.getElementById('search-button'),
  },
  filters: {
    age: document.getElementById('filter-age'),
    type: document.getElementById('filter-color'),
  }
}

// console.log(domElements)
function genereteCard(data) {
  const cards = [];
  for (i = 0; i < data.length; i++) {
    cards.push(`
    <div class="card">
      <div class="card__content">
        <div class="blurBg"></div>
        <div class="cover__img">
          <a href="#">
            <img src="${data[i].img}" alt="">
          </a>
        </div>
        <h3>${data[i].title}</h3>
        <div class="card__info">
          <p>
            <label>Age:</label>
            <span id="age">${data[i].age} years</span>
          </p>
          <p>
            <label>Weight:</label>
            <span id="weight">${data[i].weight} kg</span>
          </p>
          <p>
            <label>Type:</label>
            <span id="type">${data[i].type}</span>
          </p>
          <p>
            <label>Star:</label>
            <span id="star">${data[i].star}</span>
          </p>
          <p>
            <label>Useful resources:</label>
            <span id="resources">${data[i].resources}</span>
          </p>
        </div>
        <div class="card__cost">
          <label>Cost:</label>
          <span class="cost ${data[i].cost < 4 ? 'cost__down' : data[i].cost > 7 ? 'cost__up' : ''}" id="cost">${data[i].cost}</span>
          <span class="value" id="value">${data[i].value}</span>
        </div>
      </div>
    </div>
    `)
  }
  return cards;
}

const cardArr = genereteCard(cardData);
console.log(cardArr);
domElements.results.innerHTML = cardArr.join('');

{
  let searchValue = ''

  domElements.search.input.oninput = (event) => {
    searchValue = event.target.value
    // console.log(searchValue)
    filterSearch()
  }

  domElements.search.button.onclick = () => {
    // alert('1')
    filterSearch()
  }

  function filterSearch() {
    const rgx = new RegExp(searchValue, 'i')
    console.log(rgx)
    let filteredCardsData = cardData.filter(card => {
      if (rgx.test(card.title)) {
        return true
      } else {
        return false
      }
    })
    domElements.results.innerHTML = genereteCard(filteredCardsData).join('')
  }
}
{
  domElements.filters.type.onchange = ()=> {
    console.log('message')
  }
}