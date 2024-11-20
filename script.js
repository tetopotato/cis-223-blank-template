// create paragraph element
const paraElement = document.createElement('p');


// timer start time
let seconds = 0;


// function to update time
function updateTime() {
    seconds++;
    paraElement.textContent = seconds;
}


// call the updateTime function every second
setInterval(updateTime, 1000);


// add the paragraph element to the web page
document.body.appendChild(paraElement);


// call updateTime to show seconds as soon as page is open or refreshed
updateTime();