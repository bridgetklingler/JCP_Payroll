export default function SingleEmployee(employee){
    return `    
            <h1>Employee: ${employee.lastName} , ${employee.firstName} </h1>
            <employees>
    <employee  style="font-weight: 800; background-color: rgb(120, 161, 182)">    
    <names>
            <fname></fname>
            <lname>Name</lname>
            </names>
            <address>Address</address>
            <pn>Phone Number</pn>
            <ssn>SSN</ssn>
            <bd>BirthDate</bd>
            <email>Email</email>
            <employeebuttons></employeebuttons>
        </employee>
            <employee>
            <names>
            <fname>${employee.firstName}</fname>
            <lname>${employee.lastName}</lname>
            </names>
            <address>${employee.address}</address>
            <pn>${employee.phoneNumber}</pn>
            <ssn>${employee.ssn}</ssn>
            <bd>${employee.birthdate}</bd>
            <email>${employee.email}</email>
            <employeebuttons>
            <button class="edit_employee multibutton">Edit 
            <input class="employee_id" type="hidden" value="${employee.employeeId}"> 
            </button> 
            <button class="delete_employee_submit multibutton">Delete 
            <input class="delete_employee_id" type="hidden" value="${employee.employeeId}"> 
            </button> 
            </button>
            </employeebuttons>
            </employee>
            </employees>
    `
}