export default function UserHoursIndex(hourslist){
    console.log("Hours Index")
    var i = 1;
    return `
    <h1>Hours Index</h1>
    <hours>
    <hour style="font-weight: 800; background-color: rgb(120, 161, 182)">    
        <dates>
            <dateworked> Date Worked </dateworked>
            <timein> Time In </timein>
            <timeout> Time Out </timeout>
        </dates>
            <totalhours> Total Hours </totalhours>
            <approved> Approved </approved>
            <hoursbuttons></hoursbuttons>
            ${hourslist.map(hours => {

            })}
            
    </hour>
        ${hourslist.map(hours => {
            var x = "";
        i += 1;
        if(i % 2 === 0){x = 'green'}else{x='blue'}
        var utcTimeIn = hours.timeIn + "Z";
        var utcdate = new Date(utcTimeIn).toLocaleString()
        console.log(utcdate)
        var date = new Date(utcdate).toDateString()
        console.log(date)
        var inTime = new Date(utcTimeIn).toLocaleTimeString()
        var utcTimeOut = hours.timeOut + "Z";
        var outTime = new Date(utcTimeOut).toLocaleTimeString();
        


        return `  
    <employee class='${x}'>
         
            <dates>
                
                <dateworked> ${date}</dateworked>
                <timein> ${inTime}</timein>
                <timeout> ${outTime}
                </timeout>
            </dates>
                <totalhours> ${hours.totalhours} </totalhours>
                <approved> ${hours.approved} </approved>

                <hoursbuttons>
                <button class="edit_hours multibutton">Edit 
                        <input class="hours_id" type="hidden" value="${hours.hoursId}"> 
                    </button> 
                    <button class="single_hours_submit multibutton">Select
                        <input class="single_hours_id" type="hidden" value="${hours.hoursId}"> 
                    </button>
            
                </hoursbuttons>

        </employee>
         
        `      
        })     
        .join("")}
        
    </hours>
    `
}

