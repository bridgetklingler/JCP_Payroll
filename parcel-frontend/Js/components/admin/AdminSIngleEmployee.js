export default function AdminSingleEmployee(employee){
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
            <roleId>${employee.roleId}</roleId>
            <employeebuttons>
                <button class="admin_edit_employee multibutton">Edit 
                <input class="edit_employee_id" type="hidden" value="${employee.employeeId}"> 
                </button> 
                <button class="admin_delete_employee_submit multibutton">Delete 
                <input class="delete_employee_id" type="hidden" value="${employee.employeeId}"> 
                </button> 
                <button class='return_employee_submit multibutton'>Return to Index
                <input class='single_return_employee_id' type='hidden' value ='${employee.employeeId}'>
                </button>
                </button>
                </button>
            </employeebuttons>
            </employee>
            </employees>
            `

}