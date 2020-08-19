var audioElement = new Audio('car_horn.wav');
audioElement.play();
const alarmSubmit = document.getElementById('alarmsubmit');
alarmSubmit.addEventListener('click', setAlarm);

function setAlarm(e) {
    e.preventDefault();
    const alarm=document.getElementById("alarm");
    alarmDate=new Date(alarm.value);
    now=new Date();

}