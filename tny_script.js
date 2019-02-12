"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Bryan Vargas
   Date:   02/05/19

*/
// window.alert("Welcome to Tulsa");

/* display time and date */

document.getElementById("dateNow").innerHTML = "m/d/y<br />h:ms";

// displayed time left till New Years Eve

document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";

//Store the Current date and Time
var currentDay = new Date("May 23, 2018 14:35:05");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

//Display the current Time and Date
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

//Calculate the dates and time
var newYear = new Date("January 1, 2018");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysleft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

//display time until new years
document.getElementById("days").textContent = daysleft;

document.getElementById("days").textContent = Math.floor(daysleft);

/* Calculate the hours left in the current day */
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
var secLeft = (minsLeft - Math.floor(minsLeft)) *

    document.getElementById("days").textContent = Math.floor(daysleft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";