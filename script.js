
function displaytime()
{
let date = new Date();

let hrs = document.getElementById("ho");
let mins = document.getElementById("mi");
let secs = document.getElementById("sc");

// getting hour , mins , secs from data

let hh = date.getHours()*30;
let mm = date.getMinutes()*6;
let ss = date.getSeconds()*6;


hrs.style.rotate = `${hh}deg` ;
mins.style.rotate = `${mm}deg` ;
secs.style.rotate = `${ss}deg` ;
}

setInterval(displaytime,  1000);