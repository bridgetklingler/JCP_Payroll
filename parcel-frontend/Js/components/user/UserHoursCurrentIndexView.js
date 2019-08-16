export default function UserCurrentHoursIndex(hourslist){
    
    return `
    <h1>Current Pay-Period</h1>

    <table style="width: 100%" class="indextable" id="Table_User_Current_Pay">
        <tr>
            <th class="tableheader">Date Worked</th>
            <th class="tableheader">Time In</th>
            <th class="tableheader">Time Out</th>
            <th class="tableheader">Total Hours</th>
            <th class="tableheader">Approved</th>
        </tr>

        ${hourslist.map(hours => {
       
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
            <td>${date}</td>
            <td>${inTime}</td>
            <td>${outTime}</td>
            <td width="15%" style="text-align: center">${hours.totalHours}</td>
            <td width="15%" style="text-align: center">${approval}</td>
        </tr>
        `      
        })     
        .join("")}
        </table>
        <button class="export_table rangebutton">Export Hours</button>
        `
}