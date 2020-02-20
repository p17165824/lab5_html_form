"use-strict";
document.getElementById("the-form");

const theForm = document.getElementById("the-form");
const theDate = document.getElementById("date");
const getDate = document.querySelector('input[type="date"]');

const template = theDate.innerText;
getDate.addEventListener('change', showDate);
//event handler
function showDate(){
  const d = new Date (getDate.value);
  buildDate(d);
}
//useful re-usable function
function buildDate(d){
  theDate.innerText = `${template} ${d.toDateString()}`;
}
//register event handler
 getDate.addEventListener('change', showDate);

 let today = new Date();
 buildDate(today);


 const theParagraph = document.getElementById("the-value");
 const getColour = document.getElementById("colour");

function setColor(){
  theParagraph.style.backgroundColor = getColour.value;

}
setColor();

getColour.addEventListener('change', setColor);

 const getRange = document.getElementById("range");

 function rangeAction(){
   theParagraph.innerText = getRange.value;
   theParagraph.style.width = `${getRange.value}%`;

 }
 getRange.addEventListener('input', rangeAction);

 
