const results = document.getElementById('results');
console.log(data)
function genereteCard() {
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
          <span class="cost" id="cost">${data[i].cost}</span>
          <span class="value" id="value">${data[i].value}</span>
        </div>
      </div>
    </div>
    `)
  }
  return cards;
}

const cardArr = genereteCard(10);
console.log(cardArr);
results.innerHTML = cardArr.join('');