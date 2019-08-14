import ApiActions from "../../api/api-actions"

export default function AdminHoursIndex(hourslist){
    console.log("Hours Index")
    var i = 1;
    return `
    <p>Lookup by Last Name</p>
    <input type='text' class='searchIn'>
    <button class="searchbutton">Search</button>
    <p>Select Range</p>
    <input type="datetime-local" class="range_date1">
    <input type="datetime-local" class="range_date2">
    <button class="getdaterange">Range</button>
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
    </hour>
        ${hourslist.map(hours => {
            ApiActions.getRequest('https://localhost:44390/api/employee/'+ hours.employeeId,
                hourtoname=> {
                document.getElementById(hours.hoursId).innerHTML = hourtoname.firstName + " " + hourtoname.lastName;
            })
            var x = "";
            i += 1;
            if(i % 2 === 0){x = 'green'}else{x='blue'}
            console.log("***************");
            console.log(hours);
            console.log(hourslist);
            return `  
        <employee class='${x}'>
            
                <dates>
                    <dateworked> ${hours.timeIn.substring(0, 10)}</dateworked>
                    <timein> ${hours.timeIn.substring(11, 19)}</timein>
                    <timeout> ${hours.timeOut.substring(11, 19)}
                    </timeout>        
                </dates>
                    <fname id="${hours.hoursId}"></fname>
                    <totalhours> ${hours.totalHours} </totalhours>
                    <approved> ${hours.approved} </approved>
                    
                    <hoursbuttons>
                    <button class="edit_hours multibutton">Edit 
                            <input class="hours_id" type="hidden" value="${hours.hoursId}"> 
                        </button> 
                        <button class="delete_hours_submit multibutton">Delete 
                        <input class="delete_hours_id" type="hidden" value="${hours.hoursId}"> 
                        </button>
                        <!--<button class="single_hours_submit multibutton">Select
                        <input class="single_hours_id" type="hidden" value="${hours.hoursId}"> 
                        >/button>-->
                        <button class="approve_hours_submit multibutton">Approve
                            <input class="single_hours_id" type="hidden" value="${hours.hoursId}"> 
                            <input class="singleemployee_hours_id" type="hidden" value="${hours.employeeId}"> 
                            <input class="time_in" type="hidden" value="${hours.timeIn}">
                            <input class="time_out" type="hidden" value="${hours.timeOut}">
                            <input class="total_hours" type="hidden" value="${hours.totalHours}">
                        </button>
                
                    </hoursbuttons>
            
            </employee>
            
            `      
        })     
        .join("")}
        
    </hours>
    `
}
