
const selectMneu=document.querySelectorAll("select"),
currentDate=document.querySelector("h4"),
currentTime=document.querySelector("h2"),
content=document.querySelector(".section"),
addanimation=document.querySelector(".img"),
setAlarmbtn=document.querySelector("button");




let alarmTime,isAlarmSet=false,
ringtone=new Audio("clock.mp3");

for(let i=12; i>0; i--){
    i=i < 10 ? "0"  + i : i;
    let option =`<option value=${i}>${i}</option>`
    selectMneu[0].firstElementChild.insertAdjacentHTML("afterend",option)
    // console.log(option)
}

for(let i=59; i>0; i--){
    i=i < 10 ? "0"  + i : i;
    let option =`<option value=${i}>${i}</option>`
    selectMneu[1].firstElementChild.insertAdjacentHTML("afterend",option)
    // console.log(option)
}

for(let i=2; i>0; i--){
     
    let ampm=i==1 ? "AM" : "PM";
    // i=i < 10 ? "0"  + i : i;
    let option =`<option value=${ampm}>${ampm}</option>`
    selectMneu[2].firstElementChild.insertAdjacentHTML("afterend",option)
    // console.log(option)
}


setInterval(()=>{
    // getting hour, mins, secs
    let date=new Date(),
    h=date.getHours(),
    m=date.getMinutes(),
    s=date.getSeconds(),
    ampm="AM";

    if(h >= 12){
        h=h-12;
        ampm="PM";

    }
    // if hour values is 0, set this value to 12 
    h=h==0? h=12:h;

    // adding 0 before hr,min, sec if this value is less than 10
    h=h <10 ? "0"+h:h;
    m=m<10 ? "0" +m:m;
    s=s<10 ?"0"+s :s;
   
    currentTime.innerText=(`${h}:${m}:${s} ${ampm}`);
    let currentTimes=(`${h}:${m}:${ampm}`);

    console.log(currentTimes ,"both differents",alarmTime) 

    if(alarmTime == `${h}:${m}:${ampm}`){
        console.log('time up.....');
        ringtone.play();
        addanimation.classList.add("alerm");
        ringtone.loop=true;

    }
  
},1000)



const date=new Date().toUTCString().slice(5,16);
currentDate.innerHTML=`<h2>${date}</h2>`;

function setAlarm_value_get(){

    if(isAlarmSet){
        alarmTime='';
        ringtone.pause();
        addanimation.classList.remove("alerm")
        content.classList.remove('disable');
        setAlarmbtn.innerText='Set Alarm';
        return isAlarmSet=false;
    }


    let time=`${selectMneu[0].value}:${selectMneu[1].value}:${selectMneu[2].value}`;
    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
        return alert("plz select the value from the user and  ")
    }
    isAlarmSet=true;
    alarmTime=time;

    content.classList.add("disable");
    setAlarmbtn.innerText="Clear Alarm";
}
setAlarmbtn.addEventListener("click",setAlarm_value_get);



