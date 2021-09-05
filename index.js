


function getDateTime() {
    let timeNow  = new Date(); 
    let year    = timeNow.getFullYear();
    let month   = timeNow.getMonth()+1; 
    let day     = timeNow.getDate();
    let dayOfWeek = timeNow.getDay();
    let hour    = timeNow.getHours();
    let minute  = timeNow.getMinutes();
    let second  = timeNow.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    let date = month+'/'+year;  
    let time = hour +':' + minute+':' + second; 
    const dayOfWeekString = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
    return [date, time, day, dayOfWeekString[dayOfWeek - 1]];
}


setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("Clock-Display").innerHTML = currentTime[1];
    document.getElementById("Date-Display").innerHTML = currentTime[0];
    document.getElementById("Day-Display").innerHTML = currentTime[2];
    document.getElementById("Day-Of-Week-Display").innerHTML = currentTime[3];
}, 1000);

document.getElementById("Toggle").addEventListener("click", setAlarmMethod);

    function setAlarmMethod () {

    let setAlarmHour = prompt("Please enter HOUR for alarm");
    let setAlarmMinute = prompt("Please enter MIN for alarm");
    let setAlarmSecond = prompt("Please enter SECOND for alarm");
    let setAlarmDayOfWeek = prompt("Please enter DAY OF WEEK for alarm: Monday -> Mon Tuesday ->\n
     Tue Wednesday -> Wed Thursday -> Thur Friday -> Fri Saturday -> Sat Sunday -> Sun");

        
    let setAlarmTime = setAlarmHour + ':' + setAlarmMinute + ':' + setAlarmSecond;
     
     return [setAlarmTime, setAlarmDayOfWeek];
        
    }


    let setAlarm = setAlarmMethod();

        if (setAlarm[0] == time) {

            if (setAlarm[1] == dayOfWeekString[dayOfWeek - 1] ) {

                var audio = new Audio('enrique_granados-twelve_spanish_dances-oriental.mp3');
                audio.play();
            }

        }

    /*

    document.getElementById("Toggle").addEventListener("click", function() {

   
    
    let setAlarmDayOfWeek = "1";
    let setAlarmHour = "0";
    let setAlarmMinute = "0";
    let setAlarm = setAlarmHour + ':' + setAlarmMinute;
    
    document.getElementById("Clock-Display").innerHTML = setAlarm;
    document.getElementById("Day-Display").innerHTML = setAlarmDayOfWeek;

    

    });


    document.getElementById("Toggle").addEventListener("click", function() {

           
        getDateTime();

    function setHour() {
        
        If (setAlarmHour < 24 || setAlarmHour >= 0) {

        setAlarmHour += 1;
        return setAlarmHour;


        } else {



        }
        
    }

    function setMinute() {

        set AlarmMinute +=1;
        return setAlarmMinute;
        
    }

    function setDay() {





    }

}); 
*/   
  
   
    

    




