import ApiActions from "../../api/api-actions"

export default function AdminSingleEmployee(employeelist){
    return `    
            <h1>Employee: ${employeelist.lastName} , ${employeelist.firstName} </h1>
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
            ${employeelist.map(employees => {
                ApiActions.getRequest('https://localhost:44390/api/role/'+employees.roleId,
        roletoname=> {
        document.getElementById(employees.employeeId).innerHTML = roletoname.roleName;
        })
        return `
        
            <employee>
            <names>
            <fname>${employees.firstName}</fname>
            <lname>${employees.lastName}</lname>
            </names>
            <address>${employees.address}</address>
            <pn>${employees.phoneNumber}</pn>
            <ssn>${employees.ssn}</ssn>
            <bd>${employees.birthdate.substring(0,10)}</bd>
            <email>${employees.email}</email>
            <roleId>${employees.roleId}</roleId>
            <employeebuttons>
                <button class="edit_employee multibutton">Edit 
                <input class="single_employee_id" type="hidden" value="${employees.employeeId}"> 
                </button> 
                <button class="delete_employee_submit multibutton">Delete 
                <input class="single_delete_employee_id" type="hidden" value="${employees.employeeId}"> 
                </button> 
                <button class='return_employee_submit multibutton'>Return to Index
                <input class='single_return_employee_id' type='hidden' value ='${employees.employeeId}'>
                </button>
                </button>
                </button>
            </employeebuttons>
            </employee>
            `
        })     

        .join("")
        
    }
            </employees>
    `
}