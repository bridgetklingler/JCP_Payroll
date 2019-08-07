import ApiActions from "../api/api-actions"

export default function SingleEmployee(employee){
        ApiActions.getRequest('https://localhost:44390/api/role/'+employee.roleId,
roletoname=> {
document.getElementById(employee.employeeId).innerHTML = roletoname.roleName;
})
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
            <roleId>roleId</roleId>
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
            <bd>${employee.birthdate.substring(0,10)}</bd>
            <email>${employee.email}</email>
            <roleId id='${employee.employeeId}'>
            <input id='roleidtoname' type="hidden" value="${employee.roleId}">
            </roleId>
            <employeebuttons>
            <button class="edit_employee multibutton">Edit 
            <input class="employee_id" type="hidden" value="${employee.employeeId}"> 
            </button> 
            <button class="delete_employee_submit multibutton">Delete 
            <input class="delete_employee_id" type="hidden" value="${employee.employeeId}"> 
            </button> 
            <button class='return_employee_submit multibutton'>Return to Index
            <input class='return_employee_id' type='hidden' value ='${employee.employeeId}'>
            </button>
            </button>
            </button>
            </employeebuttons>
            </employee>
            </employees>
    `
}