
export const drawCalendar = (today) => {

  console.log(today);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Sptember", "October", "November", "December"];
  
  let month = months[today.getMonth()]
  let year = today.getFullYear()
  let date = today.getDate()
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const shortdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  let weekday = days[today.getDay()];
  
  // Month and Year in banner
  document.getElementById("monthWord").appendChild(document.createTextNode(month));
  document.getElementById("yearNumber").appendChild(document.createTextNode(year));
  
  // Weekdays Mo-Su
  let index;
  for (index=0;   index<7; index++) {
    let node = document.createElement("li");
    // let nbsp = document.createTextNode("\u00A0")
    node.appendChild(document.createTextNode(shortdays[index]));
    document.getElementById("weekdays").appendChild(node);
    // document.getElementById("weekdays").appendChild(nbsp);
  }
  
  // Padding for dates
  // use getDay() for first of month to be given a number for the day
  let padding = new Date(today.getFullYear(), today.getMonth(), 1).getDay()
  
  // 0-7 == Sun, Mon, ..., Sat
  // Padding required is
  // Mon = 0, Tue = 1, ...., Sun = 6
  // Logic is: if getDays=0 then use 6 else getDays()-1
  padding == 0 ? padding = 6 : padding = padding -1
  
  // Dates 1 to last day of month
  for (index=1-padding;   index<32; index++) {
    let node = document.createElement("li");
    // let nbsp = document.createTextNode("\u00A0")
    if (index > 0) {
      node.appendChild(document.createTextNode(index));
    }
    document.getElementById("days").appendChild(node);
    // document.getElementById("weekdays").appendChild(nbsp);
  }
  }
  