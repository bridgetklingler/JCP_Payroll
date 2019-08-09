export default function AdminEmployeeIndex(employeelist){
    console.log("employee Index")
    return `
    <h1>Employee Index</h1>
    <employees>
    <employee style="font-weight: 800; background-color: rgb(120, 161, 182)">    
    <names>
            <fname></fname>
            <lname>Name</lname>
            </names>
            <address>Address</address>
            <pn>Phone Number</pn>
            <email>Email</email>
            <roleId>Role Id</roleId>
            <employeebuttons></employeebuttons>
        </employee>
        ${employeelist.map(employee => {
        return `  
        
            <employee>
            <names>
            <lname>${employee.lastName} ,</lname>
            <fname>${employee.firstName}</fname>
            </names>
            <address>${employee.address}</address>
            <pn>${employee.phoneNumber}</pn>
            <email>${employee.email}</email>
            <roleId>${employee.roleId}</roleId>
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
