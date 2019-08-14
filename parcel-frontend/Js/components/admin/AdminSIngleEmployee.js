import ApiActions from "../../api/api-actions"

export default function AdminSingleEmployee(employee){
    ApiActions.getRequest('https://localhost:44390/api/role/'+employee.roleId,
roletoname=> {
document.getElementById('rolename').innerHTML = roletoname.roleName;
document.getElementById('rolerate').innerHTML = roletoname.payRate + "    /    " + roletoname.hourRate;
})
    return `   
    <div> 
    <h1>Employee: ${employee.lastName} , ${employee.firstName} </h1>
    <h2><em>Employee ID: ${employee.employeeId} </em></h2>
    </div class="heading">
    <table style="width: 95%">

    <tr>
        <th>First Name: </th>
        <td><strong>${employee.firstName}</strong></td>
    </tr>
    <tr>
        <th>Last Name: </th>
        <td><strong>${employee.lastName}</strong></td>
    </tr>
    <tr>
        <th>Email: </th>
        <td>${employee.email}</td>
    </tr>
    <tr>
        <th>Phone: </th>
        <td>${employee.phoneNumber}</td>
    </tr>
    <tr>
        <th>Address: </th>
        <td>${employee.address}</td>
    </tr>
    <tr>
        <th>Role: </th>
        <td><sroleId id="rolename"></sroleId></td>
    </tr>
    <tr>
        <th>Rate: </th>
        <td><srolerate id="rolerate"></srolerate></td>
    <tr>
        <th>SSN: </th>
        <td>${employee.ssn}</td>
    </tr>
    <tr>
        <th>Birth Date: </th>
        <td>${employee.birthdate.substring(0,10)}</td>
    </tr>
    </table>

    <br/>
    <employeebuttons>
        <button class="admin_edit_employee multibutton medbutton">Edit 
            <input class="edit_employee_id" type="hidden" value="${employee.employeeId}"> 
        </button> 
        <button class="admin_delete_employee_submit multibutton medbutton">Delete 
            <input class="delete_employee_id" type="hidden" value="${employee.employeeId}"> 
        </button> 
        <button class="return_employee_submit multibutton medbutton">Return to Index
            <input class='single_return_employee_id' type='hidden' value ='${employee.employeeId}'>
        </button>
    </employeebuttons>
    `
}