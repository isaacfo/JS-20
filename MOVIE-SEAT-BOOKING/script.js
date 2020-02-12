const container = document.querySelector('.container');
// puts all seat classes an a array known as nodeList
const seats = document.querySelectorAll('.row .seat:not(occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// + makes string into a number
let ticketPrice = +movieSelect.value;

// update total and count
function updateSelectedCount() {
  // put all seats that are selected into a nodelist which is an array
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}
// movie selct event to change prices based on movie
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  // only logs when seats are clicked that are open
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    //   changes seat to selected color
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
