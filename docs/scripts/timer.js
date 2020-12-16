function get_time_clock() {
  current_date = new Date();

  var minute = current_date.getMinutes();
  var hour = current_date.getHours();

  minute = minute < 10 ? "0" + minute : minute;

  indicator = hour < 12 ? "am" : "pm";

  hour = hour < 13 ? hour : hour - 12;

  if (hour == 0) {
    hour = 12;
  }

  return hour + ":" + minute + indicator;
}

function get_time_log() {
  current_date = new Date();

  var day = current_date.getDate();
  var month = current_date.getMonth() + 1;
  var year = current_date.getFullYear();
  var hour = current_date.getHours();
  var minute = current_date.getMinutes();
  var second = current_date.getSeconds();

  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  return (
    day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second
  );
}

function welcome() {
  current_date = new Date();
  var hour = current_date.getHours();
  if (hour <= 12) {
    var phrase = "Good Morning";
  } else if (hour > 12 && hour <= 18) {
    var phrase = "Good Aftermoon";
  } else {
    var phrase = "Good Evening";
  }
  return phrase;
}

function update_clock() {
  document.getElementById("clock").innerText = get_time_clock();
  document.getElementById("title").innerText = welcome();
}

function get_weather(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src='https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}

//list of Wallpaper
var imgAr = ["wp1.jpg", "wp2.jpg", "wp3.jpg", "wp4.jpg", "wp5.jpg", "wp6.jpg", "wp7.jpg", "wp8.jpg", "wp9.jpg",];
function getImage(n) {
    var path = 'images/'; // default path here
    var num = n;
    var img = imgAr[ num ];
    var imgStr = path + img;
    return imgStr;
}

window.onload = function() {
  //set random wallpaper 
  var n = Math.floor( Math.random() * imgAr.length );
  document.body.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) repeat, #161821 url('" + getImage(n) + "') no-repeat";
  document.body.style.backgroundSize  = "cover";
  //update clock
  document.getElementById("log_time").innerText = get_time_log();
  update_clock();
  //update weather
  get_weather(document,'script','weatherwidget-io-js');
  setInterval(update_clock, 60000);
};
