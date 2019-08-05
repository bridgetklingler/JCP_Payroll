export default function EmployeeHoursIndex(hourslist){
    console.log("Hours Index")
    return `
    <h1>Hours Index</h1>
    <hours>
    <hours style="font-weight: 800; background-color: rgb(120, 161, 182)">    
        <dates>
            <dateworked> Date Worked </dateworked>
            <timein> Time In </timein>
            <timeout> Time Out </timeout>
        </dates>
            <totalhours> Total Hours </totalhours>
            <approved> Approved </approved>
            <hoursbuttons></hoursbuttons>
    </hours>
        ${hourslist.map(hours => {
        return `  
            <employee>
            <names>
            <fname>${employee.firstName}</fname>
            <lname>${employee.lastName}</lname>
            </names>
            <address>${employee.address}</address>
            <pn>${employee.phoneNumber}</pn>
            <ssn>${employee.ssn}</ssn>
            <bd>${employee.birthdate.substring(0,10)}</bd>
            <email>${employee.email}</email>
            <employeebuttons>
            <button class="edit_employee multibutton">Edit 
            <input class="employee_id" type="hidden" value="${employee.employeeId}"> 
            </button> 
            <button class="delete_employee_submit multibutton">Delete 
            <input class="delete_employee_id" type="hidden" value="${employee.employeeId}"> 
            </button> 
            <button class="single_employee_submit multibutton">Select
            <input class="single_employee_id" type="hidden" value="${employee.employeeId}"> 
            </button>
            </employeebuttons>
            </employee>

                 `      
        })     
        .join("")}
        
    </employees>
    `
}
