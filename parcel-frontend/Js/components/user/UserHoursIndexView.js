export default function UserHoursIndex(hourslist){
    console.log("Hours Index")
    var i = 1;
    return `
    <h1>Hours Index</h1>
    <table style="width: 100%">
        <tr>
            <th class="tableheader">Date Worked</th>
            <th class="tableheader">Time In</th>
            <th class="tableheader">Time Out</th>
            <th class="tableheader">Total Hours</th>
            <th class="tableheader">Approved</th>
            <th class="tableheader" id="hoursbuttons"></th>
        </tr>
        ${hourslist.map(hours => {
            return `
                <tr>
                    <td>${hours.timeIn.substring(0, 10)}</td>
                    <td>${hours.timeIn.substring(11, 19)}</td>
                    <td>${hours.timeOut.substring(11, 19)}</td>
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

