// Five most commmon array methods used: forEach(), map(), sort(), filter(), reduce()

const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBTN = document.getElementById('double');
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

  console.log(newUser);
}

// Add the new obj to data arr
function addData(obj) {
  data.push(obj);
}
