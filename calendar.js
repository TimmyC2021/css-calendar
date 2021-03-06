
export const drawCalendar = (today) => {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  
  const longDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const shortDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const weekday = longDays[today.getDay()];
  
  // Month and Year in banner
    const monthWord = document.getElementById("monthWord");
    monthWord.innerHTML = "";
    monthWord.appendChild(document.createTextNode(month));
    
    const yearNumber = document.getElementById("yearNumber");
    yearNumber.innerHTML = "";
    yearNumber.appendChild(document.createTextNode(year));
    
  // Weekdays Mo-Su
    let index;
    const weekDays = document.getElementById("weekdays");
    weekDays.innerHTML = "";
    
    for ( index=0;   index<7; index++) {
      let node = document.createElement("li");
      node.appendChild(document.createTextNode(shortDays[index]));
      weekDays.appendChild(node);
    }
  
  // days (1-31)
    // Padding for dates
    // use getDay() for first of month to be given a number for the day
    let padding = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    // 0-7 == Sun, Mon, ..., Sat
    // Padding required is
    // Mon = 0, Tue = 1, ...., Sun = 6
    // Logic is: if getDays=0 then use 6 else getDays()-1
    padding == 0 ? padding = 6 : padding = padding -1

    // Number of days in month
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    
    const daysObj = document.getElementById("days");
    daysObj.innerHTML = "";
    // Dates 1 to last day of month
    for (index=1-padding;   index<daysInMonth+1; index++) {
      let node = document.createElement("li");
      if (index > 0) {
        node.appendChild(document.createTextNode(index));
      }
      daysObj.appendChild(node);
    }

    // Add event listener to days
    for (index=0;index<daysObj.children.length;index++) {
      daysObj.children[index].addEventListener('click',(ev) => {
        let message = month + " " + year;
        message = ev.target.innerHTML + " " + message;
        alert(message)})
    }
}
  