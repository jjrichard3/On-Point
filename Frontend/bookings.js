// get references to HTML elements
const datePicker = document.getElementById('date-picker');
const selectedDate = document.getElementById('selected-date');
const ridesList = document.getElementById('rides-list');

// add event listener to date picker
datePicker.addEventListener('change', () => {
  // get selected date from date picker
  const date = datePicker.value;

  // update selected date in HTML
  selectedDate.innerText = date;

  // fetch rides available on selected date
  fetch(`/api/rides?date=${date}`)
    .then(response => response.json())
    .then(rides => {
      // clear existing rides from list
      ridesList.innerHTML = '';

      // add rides to list
      rides.forEach(ride => {
        const rideItem = document.createElement('li');
        rideItem.innerHTML = `
          <h4>${ride.driver}</h4>
          <p>${ride.pickupLocation} to ${ride.dropoffLocation}</p>
          <button>Book</button>
        `;
        ridesList.appendChild(rideItem);
      });
    })
    .catch(error => console.error(error));
});
