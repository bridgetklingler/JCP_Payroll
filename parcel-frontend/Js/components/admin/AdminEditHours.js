import apiActions from "../../api/api-actions"

export default function adminEditHours(hourslist){
    console.log("Edit Hours")
    return `
    <h1>Edit Hours</h1>

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
            // ApiActions.getRequest('https://localhost:44390/api/employee/' + hours.employeeId, 
            // hourtoname=> {
            // document.getElementById(hours.hoursId).innerHTML = hourtoname.firstName + " " + hourtoname.lastName;
            // })
       
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
        <td><input type="text" class="edit_date" value="${hours.date}"</td>
        <td><input type="text" class="edit_intime" value="${hours.inTime}"</td>
        <td><input type="text" class="edit_outtime" value="${hours.outTime}"</td>
        <td><input type="text" class="edit_total_hours" value=${hours.totalHours}</td>
        <td><input type="text" class="edit_hours_approved" value=${hours.approved}</td>
        <td><button class="edit_hours multibutton">Edit 
            <input class="hours_id" type="hidden" value="${hours.hoursId}"> 
        </button> 
        </tr>
            
        `      
        })     
        .join("")}
        </table>
    `
}