export default function UserHoursIndex(hourslist){
    console.log("Hours Index")
    return `
    <h1>Hours Index</h1>

    <table style="width: 100%" class="indextable">
        <tr>
            <th class="tableheader">Date Worked</th>
            <th class="tableheader">Time In</th>
            <th class="tableheader">Time Out</th>
            <th class="tableheader">Total Hours</th>
            <th class="tableheader">Approved</th>
            <th class="tableheader" id="hoursbuttons"></th>
        </tr>

        ${hourslist.map(hours => {
       
        var utcTimeIn = hours.timeIn + "Z";
        var utcdate = new Date(utcTimeIn).toLocaleString()
        console.log(utcdate)
        var date = new Date(utcdate).toDateString()
        console.log(date)
        var inTime = new Date(utcTimeIn).toLocaleTimeString()
        var utcTimeOut = hours.timeOut + "Z";
        var outTime = new Date(utcTimeOut).toLocaleTimeString();
        


        return `  

        <tr>
        <td>${date}</td>
        <td>${inTime}</td>
        <td>${outTime}</td>
        <td>${hours.totalHours}</td>
        <td>${hours.approved}</td>
        <td><button class="edit_hours multibutton">Edit 
            <input class="hours_id" type="hidden" value="${hours.hoursId}"> 
        </button> 
        <button class="single_hours_submit multibutton">Select
            <input class="single_hours_id" type="hidden" value="${hours.hoursId}"> 
        </button></td>
        </tr>
            
        `      
        })     
        .join("")}
        </table>
    `
}