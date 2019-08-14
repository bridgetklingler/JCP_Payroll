export default function UserPastHoursIndex(hourslist){

    return `
    <h1>Previous Pay-Period</h1>

    <table style="width: 100%" class="indextable">
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
        console.log(utcdate)
        var date = new Date(utcdate).toDateString()
        console.log(date)
        var inTime = new Date(utcTimeIn).toLocaleTimeString()
        var utcTimeOut = hours.timeOut + "Z";
        var outTime = new Date(utcTimeOut).toLocaleTimeString();

        if(hours.approved == true){
            var approval = `<approve id="approve">Approved</approve>`
        }
        else{
            var approval = `<pend id="pending"><em>pending</em></pend>`
        }

        return `  
        <tr>
            <td>${date}</td>
            <td>${inTime}</td>
            <td>${outTime}</td>
            <td>${hours.totalHours}</td>
            <td width="10%" style="text-align: center">${approval}</td>
        </tr>
        `      
        })     
        .join("")}
        </table>
    `
}