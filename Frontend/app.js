// Define a list of drives
let drives = [
    {
      name: "Lestyn",
      date: "2023-02-24",
      destination: "Moncton Flight College",
      time: "10:00 AM",
      capacity: 3
    },
    {
      name: "Isaac",
      date: "2023-02-24",
      destination: "Sackville",
      time: "2:00 PM",
      capacity: 5
    },
    {
      name: "Jacob",
      date: "2023-02-25",
      destination: "Sackville",
      time: "3:00 PM",
      capacity: 1
    },
  ];

  // Display a list of drives for a given date
  function displayDrives() {
    let eventDate = document.getElementById("event-date").value;
    let eventList = document.getElementById("event-list");
    eventList.innerHTML = "";

    // Find all drives that match the selected date
    let matchingdrives = drives.filter(event => event.date === eventDate);

    // Display each matching event
    matchingdrives.forEach(event => {
      let eventDiv = document.createElement("div");
      eventDiv.innerHTML = `<h3>${event.name} (${event.time})</h3>
                            <p>Destination: ${event.destination}</p>
                            <p>Capacity: ${event.capacity}</p>
                            <button onclick="reserveSpot('${event.name}')">Reserve a Spot</button>`;
      eventList.appendChild(eventDiv);
    });
  }

  // Reserve a spot for a given event
  function reserveSpot(eventName) {
    let selectedEvent = drives.find(event => event.name === eventName);
    
    if (selectedEvent.capacity > 0) {
      selectedEvent.capacity--;
      let myReservations = document.getElementById("my-reservations");
      let reservationDiv = document.createElement("div");
      reservationDiv.innerHTML = `<p>You have booked a flight with ${eventName} at ${selectedEvent.time}.</p>`;
      myReservations.appendChild(reservationDiv);
    } else {
      alert("Sorry, this event is already full!");
    }
  }

