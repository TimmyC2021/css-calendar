const today = new Date()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Sptember", "October", "November", "December"];

let month = months[today.getMonth()]
let year = today.getFullYear()
let date = today.getDate()

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const shortdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
let weekday = days[today.getDay()];

console.log("Console log: Today is " + today.toDateString())
console.log(month)
console.log(year)
console.log(date)
console.log(weekday)

document.getElementById("monthWord").appendChild(document.createTextNode(month));
document.getElementById("yearNumber").appendChild(document.createTextNode(year));

let index;
for (index=0;   index<7; index++) {
  let node = document.createElement("li");
  let nbsp = document.createTextNode("\u00A0")
  node.appendChild(document.createTextNode(shortdays[index]));
  document.getElementById("weekdays").appendChild(node);
  document.getElementById("weekdays").appendChild(nbsp);
}

