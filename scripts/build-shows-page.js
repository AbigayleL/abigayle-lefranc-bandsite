import BandSiteApi from "./band-site-api.js";

const bandSiteApi = new BandSiteApi();
let showDates = [];
let selectedRow = null;

/* 
const showDates = [
  {
    DATE: "Mon Sept 09 2024",
    VENUE: "Ronald Lane ",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Tue Sept 17 2024",
    VENUE: "Pier 3 East ",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Sat Oct 12 2024",
    VENUE: "View Lounge ",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Sat Nov 16 2024",
    VENUE: "Hyatt Agency ",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Fri Nov 29 2024",
    VENUE: "Moscow Center ",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Wed Dec 18 2024",
    VENUE: "Press Club ",
    LOCATION: "San Francisco, CA",
  },
];

*/
async function displayShows() {
  const showsContainer = document.getElementById("currentshows__div");
  showDates = await bandSiteApi.getShows();
  showDates.forEach(function (show) {
    const showDateEl = document.createElement("div");
    showDateEl.classList.add("show-items");

    const showDate = new Date(show.date);
    const formattedDate = showDate.toLocaleDateString();

    showDateEl.innerHTML = `
        <h6>Date</h6>
        <p>${formattedDate}</p>
        <h6>Venue</h6>
        <p>${show.place}</p>
        <h6>Location</h6>
        <p>${show.location}</p>`;

    const buttonEl = document.createElement("button");
    buttonEl.textContent = "BUY TICKETS";
    showDateEl.appendChild(buttonEl);

    showsContainer.appendChild(showDateEl);
  });
  /*
  document.addEventListener("DOMContentLoaded", function () {
    const showItems = document.querySelectorAll(".show-items");
    showItems.forEach(function (showItem) {
      showItem.addEventListener("click", function () {
        showItems.forEach(function (s) {
          s.classList.remove("selected");
        });
        this.classList.add("selected");
      });
    });
  });

  */

  const showItems = document.querySelectorAll(".show-items");
  showItems.forEach(function (showItem) {
    showItem.addEventListener("click", function () {
      showItems.forEach(function (item) {
        item.classList.remove("selected");
      });
      this.classList.add("selected");
    });
  });
}

displayShows();
