export default function SingleEmployee(employee){
    return `    
            <h1>Employee: ${employee.lastName} , ${employee.firstName} </h1>
            <names>
            <sfname><h3>First Name:</h3>      ${employee.firstName}</sfname>
            <slname><h3>Last Name: </h3>      <strong>${employee.lastName}</strong></slname>
            </names>
            <semail><h3>Email:</h3>           <strong>${employee.email}</strong></semail>
            <sroleId><h3>Role:</h3>           ${employee.roleId}</sroleId>
            <br/>
            <saddress><h3>Address:</h3>       ${employee.address}</saddress>
            <spn><h3>Phone:</h3>              ${employee.phoneNumber}</spn>
            <sssn><h3>SSN:</h3>               ${employee.ssn}</sssn>
            <sbd><h3>Date of Birth:</h3>      ${employee.birthdate.substring(0,10)}</sbd>
            <employeebuttons>
            <button class="edit_employee multibutton">Edit 
            <input class="employee_id" type="hidden" value="${employee.employeeId}"> 
            </button> 
            <button class="delete_employee_submit multibutton">Delete 
            <input class="delete_employee_id" type="hidden" value="${employee.employeeId}"> 
            </button> 
            </button>
            </button>
            </employeebuttons>
    `
}