// Five most commmon array methods used: forEach(), map(), sort(), filter(), reduce(), called high order array methods

const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionaireBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money
async function getRandomUser() {
  //  async and await remove the need for .then chaining
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);
}

// Double everyones money
function doubleMoney() {
  // map() returns an array ... copies whats in user object and returns it
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

// Add the new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update DOM
// if nothing is passed into the updateDOM the default of == data will show up
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    // adds a class to the new div created
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

//  Format number as money
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
