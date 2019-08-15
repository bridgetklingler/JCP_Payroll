import ApiActions from "../../api/api-actions"

export default function AdminPastHoursIndex(hourslist){
    
    return `
    <h2>Previous Pay-Period</h2>
    <div style="display: flex; justify-content: space-between; padding-top:2vh;">
    <div>
    <input placeholder="Search Last Name" type='text' class='searchIn' id="searchbar">
    <button class="searchbutton rangebutton">Search</button>
    </div>
    <div>
        <input type="date" class="range_date1" style="width: 15vw;">
        <input type="date" class="range_date2" style="width: 15vw;">
        <button class="getdaterange rangebutton">Range</button>
</div>
</div>
    <table style="width:100%" class="indextable">
        <tr>
            <th class="tableheader">Employee</th>
            <th class="tableheader">Date Worked</th>
            <th class="tableheader">Time In</th>
            <th class="tableheader">Time Out</th>
            <th class="tableheader" style="text-align: center">Hours</th>
            <th class="tableheader" style="text-align: center">Approved</th>
            <th class="tableheader"></th>
        </tr>
        ${hourslist.map(hours => {
            ApiActions.getRequest('https://localhost:44390/api/employee/' + hours.employeeId, 
            hourtoname=> {
            document.getElementById(hours.hoursId).innerHTML = hourtoname.lastName + ", " + hourtoname.firstName;
            })
            var utcTimeIn = hours.timeIn + "Z";
            var utcdate = new Date(utcTimeIn).toLocaleString()
            var date = new Date(utcdate).toDateString()
            var inTime = new Date(utcTimeIn).toLocaleTimeString()
            var utcTimeOut = hours.timeOut + "Z";
            var outTime = new Date(utcTimeOut).toLocaleTimeString();

            if(hours.approved == true){
                var approval = `<approve id="approve"></approve>`
            }
            else{
                var approval = `<pend id="pending"></pend>`
            }

            return ` 

        <tr>
            <td><hourstoname id="${hours.hoursId}"></hourstoname></td>
            <td width="19%">${date}</td>
            <td width="14%">${inTime}</td>
            <td width="14%">${outTime}</td>
            <td width="11%" style="text-align: center">${hours.totalHours}</td>
            <td width="11%" style="text-align: center">${approval}</td>
            <td style="text-align: right; padding: 0;">

            <button class="delete_hours_submit_past multibutton">Delete 
                <input class="delete_hours_id" type="hidden" value="${hours.hoursId}"> 
            </button>
            <button class="approve_hours_past_submit multibutton">Approve
                <input class="single_hours_id" type="hidden" value="${hours.hoursId}"> 
                <input class="singleemployee_hours_id" type="hidden" value="${hours.employeeId}"> 
                <input class="time_in" type="hidden" value="${hours.timeIn}">
                <input class="time_out" type="hidden" value="${hours.timeOut}">
                <input class="total_hours" type="hidden" value="${hours.totalHours}">
            </button>
            </td>
        </tr>
        `     
    }).join("")}
    
    </table>
       `
}
