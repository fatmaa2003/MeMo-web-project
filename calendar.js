const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();
let events;

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
    liTag += `<li class="inactive" onclick="navigateToDiary('${new Date(currYear, currMonth - 1, lastDateofLastMonth - i + 1).getTime()}')">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday = i === date.getDate() && currMonth === new Date().getMonth()
      && currYear === new Date().getFullYear() ? "active" : "";
    liTag += `<li class="${isToday}" onclick="navigateToDiary('${new Date(currYear, currMonth, i).getTime()}')">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
    liTag += `<li class="inactive" onclick="navigateToDiary('${new Date(currYear, currMonth + 1, i - lastDayofMonth + 1).getTime()}')">${i - lastDayofMonth + 1}</li>`
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
  daysTag.innerHTML = liTag; 4

  getEvents().then(e => {
    console.log(e);
    events = e;
  })
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
  icon.addEventListener("click", () => { // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(); // calling renderCalendar function
  });
});



let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});
searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});
// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
  }
}

async function getEvents() {
  let url = `http://localhost:3000/events`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "authorization": localStorage.getItem('tokenKey')
    }
  });
  if (response.status === 200) {
    let resp = await response.json()
    return resp.events;
  }
}


function navigateToDiary(date) {
  console.log(date);
  window.location.href = `/diarypage.html?date=${date}&event=${JSON.stringify(events[date])}`
  // if(events.date){
  // }
  // else{
  //   window.location.href=`/diarypage.html?date=${date}`
  // }
}