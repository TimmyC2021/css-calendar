import { drawCalendar } from './calendar.js';

let workingDate = new Date()

// attach event handlers to < and >
document.getElementById("prev").addEventListener('click',() => {
  if (workingDate.getMonth()==0) {
    workingDate = new Date(workingDate.getFullYear()-1,11,workingDate.getDate())
  } else {
    workingDate =new Date(workingDate.getFullYear(),workingDate.getMonth()-1,workingDate.getDate())
  }
  drawCalendar(workingDate)
})

document.getElementById("next").addEventListener('click',() => {
  if (workingDate.getMonth()==11) {
    workingDate = new Date(workingDate.getFullYear()+1,0,workingDate.getDate())
  } else {
    workingDate = new Date(workingDate.getFullYear(),workingDate.getMonth()+1,workingDate.getDate())
  }
  drawCalendar(workingDate)
})


// attach event handlers to << and >>
document.getElementById("prevYear").addEventListener('click',() => {
  workingDate = new Date(workingDate.getFullYear()-1,workingDate.getMonth(),workingDate.getDate())
  drawCalendar(workingDate)
})


document.getElementById("nextYear").addEventListener('click',() => {
  workingDate = new Date(workingDate.getFullYear()+1,workingDate.getMonth(),workingDate.getDate())
  drawCalendar(workingDate)
})

drawCalendar(workingDate)

