import ApiActions from "../../api/api-actions"

export default function AdminHoursIndex(hourslist){
    console.log("Hours Index")
    

    
    return `
    <p>Lookup by Last Name</p>
    <input type='text' class='searchln'>
    <button class="searchbutton">Search</button>
    <p>Select Range</p>
    <input type="date" class="range_date1">
    <input type="date" class="range_date2">
    <button class="getdaterange">Range</button>
    <h1>Hours Index</h1>
    <table style="width:100%" class="indextable">
        <tr>
            <th class="tableheader">Date Worked</th>
            <th class="tableheader">Time In</th>
            <th class="tableheader">Time Out</th>
            <th class="tableheader">Total Hours</th>
            <th class="tableheader">Approved</th>
            <th class="tableheader"></th>

        </tr>
        ${hourslist.map(hours => {
            ApiActions.getRequest('https://localhost:44390/api/employee/' + hours.employeeId, 
            hourtoname=> {
            document.getElementById(hours.hoursId).innerHTML = hourtoname.firstName + " " + hourtoname.lastName;
            })

            var utcTimeIn = hours.timeIn + "Z";
            var utcdate = new Date(utcTimeIn).toLocaleString()
            console.log(utcdate)
            var date = new Date(utcdate).toDateString()
            console.log(date)
            var inTime = new Date(utcTimeIn).toLocaleTimeString()
            var utcTimeOut = hours.timeOut + "Z";
            var outTime = new Date(utcTimeOut).toLocaleTimeString();

            return            ` 

        <tr>
            <td>${date}</td>
            <td>${inTime}</td>
            <td>${outTime}</td>
            <td>${hours.totalHours}</td>
            <td>${hours.approved}</td>
            <td>
            <button class="edit_hours_submit multibutton">Edit 
            <input class="hours_id" type="hidden" value="${hours.hoursId}"> 
            <input class="edit_time_in" type="hidden" value="${hours.timeIn}">
            <input class="edit_time_out" type="hidden" value="${hours.timeOut}">
            <input class="edit_total_hours" type="hidden" value="${hours.totalHours}">
            </button> 
            <button class="delete_hours_submit multibutton">Delete 
            <input class="delete_hours_id" type="hidden" value="${hours.hoursId}"> 
            </button>
            <!--<button class="single_hours_submit multibutton">Select
            <input class="single_hours_id" type="hidden" value="${hours.hoursId}"> 
            >/button>-->
            <button class="approve_hours_submit multibutton">Approve
                <input class="single_hours_id" type="hidden" value="${hours.hoursId}"> 
                <input class="single_employee_hours_id" type="hidden" value="${hours.employeeId}"> 
                <input class="time_in" type="hidden" value="${hours.timeIn}">
                <input class="time_out" type="hidden" value="${hours.timeOut}">
                <input class="total_hours" type="hidden" value="${hours.totalHours}">
            </button>
            </td>

        </tr>
        `     
    })    .join("")}
    
    </table>

       `
}
