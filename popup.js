const text  = document.getElementById("text")
const inner = document.getElementById("inner")

const today = new Date()

// Total number of days in a year
const firstDay = new Date(today.getFullYear(), 0, 1);
const lastDay = new Date(today.getFullYear(), 11, 31)
const timeDifferenceYear = lastDay.getTime() - firstDay.getTime();
const totalDays = ( timeDifferenceYear / (1000*60*60*24) ) + 1;

// Total number of days between today and last day
const timeDifference = lastDay.getTime() - today.getTime();
const remainingDays = timeDifference / (1000*60*60*24);

// Percentage

let percentage = 100 - ( ( remainingDays / totalDays ) * 100 )

text.textContent  = Math.floor(percentage) + " %"

inner.style.width = percentage + "%";
