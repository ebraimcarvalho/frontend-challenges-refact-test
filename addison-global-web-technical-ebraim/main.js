import data from './data.js';

data.sort(sortBySequence);

function sortBySequence(a, b) {
  return a.sequence < b.sequence ? -1 : a.sequence > b.sequence ? 1 : 0;
}

const $allPromotions = document.querySelector('[data-js="all-promotions"]');
const $newCustomers = document.querySelector('[data-js="new-customers"]');
const $div = document.querySelector('#render');

function initEvents() {
  window.addEventListener('load', renderAll, false);
  $allPromotions.addEventListener('click', renderAll, false);
  $newCustomers.addEventListener('click', renderNew, false);
}

function renderAll() {
  reset();
  render(data);
}

function reset () {
  $div.innerHTML = '';
}

function render(list) {
  for(let i = 0, len = list.length; i < len; i++) {
    createElements(list[i])
  }
}

function renderNew() {
  let filter = data.filter(item => {
    return item.onlyNewCustomers === true;
  });
  reset();
  render(filter);
}

function createElements(item) {
  let markup = `
    <div class="card">
      <img src="${item.heroImageUrl}"/>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div>
        <button>${item.termsAndConditionsButtonText}</button>
        <button>${item.joinNowButtonText}</button>
      </div>
    </div>
  `;
  return $div.innerHTML += markup;
}

initEvents();