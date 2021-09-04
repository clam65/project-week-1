


function getDateTime() {
    var timeNow  = new Date(); 
    var year    = timeNow.getFullYear();
    var month   = timeNow.getMonth()+1; 
    var day     = timeNow.getDate();
    var dayOfWeek = timeNow.getDay();
    var hour    = timeNow.getHours();
    var minute  = timeNow.getMinutes();
    var second  = timeNow.getSeconds(); 
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
    var date = month+'/'+year;  
    var time = hour+':'+minute+':'+second; 
    var dayOfWeekString = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
    return [date, time, day, dayOfWeekString[dayOfWeek - 1]];
}


setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("Clock-Display").innerHTML = currentTime[1];
    document.getElementById("Date-Display").innerHTML = currentTime[0];
    document.getElementById("Day-Display").innerHTML = currentTime[2];
    document.getElementById("Day-Of-Week-Display").innerHTML = currentTime[3];
}, 1000);

document.getElementById("Toggle").addEventListener("click", function() {

   
    
    let setAlarmDayOfWeek = "1";
    let setAlarmHour = "0";
    let setAlarmMinute = "0";
    let setAlarm = setAlarmHour + ':' + setAlarmMinute;
    
    document.getElementById("Clock-Display").innerHTML = setAlarm;
    document.getElementById("Day-Display").innerHTML = setAlarmDayOfWeek;

    document.getElementById("Toggle").addEventListener("click", function() {

           
        getDateTime();

    });
    

    function setHour {

        setAlarmHour += 1;
        return setAlarmHour;

    }

    function setMinute {

        set AlarmMinute +=1;
        return setAlarmMinute;
        
    }

    function setDay {





    }

}); 
   
  
   
    

    




