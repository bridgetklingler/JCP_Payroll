import ApiActions from "../../api/api-actions"

export default function UserSingleEmployee(employee){
        ApiActions.getRequest('https://localhost:44390/api/role/'+employee.roleId,
roletoname=> {
document.getElementById(employee.employeeId).innerHTML = roletoname.roleName;
})
    return `   
    <div> 
    <h1>Employee: ${employee.lastName} , ${employee.firstName} </h1>
    <h2><em>Employee ID: ${employee.employeeId} </em></h2>
    </div class="heading">
    <table style="width: 95%">

    <tr>
        <sfname><th>First Name: </th>
        <td>${employee.firstName}</td></sfname>
    </tr>
    <tr>
        <slname><th>Last Name: </th>
        <td>${employee.lastName}</td></slname>
    </tr>
    <tr>
        <semail><th>Email: </th>
        <td>${employee.email}</td></semail>
    </tr>
    <tr>
        <spn><th>Phone: </th>
        <td>${employee.phoneNumber}</td></spn>
    </tr>
    <tr>
        <sroleId><th>Role: </th>
        <td>${employee.roleId}</td></sroleId>
    </tr>
    <tr>
        <saddress><th>Adress: </th>
        <td>${employee.address}</td></saddress>
    </tr>
    <tr>
        <sssn><th>SSN: </th>
        <td>${employee.ssn}</td></sssn>
    </tr>
    <tr>
        <sbd><th>Birth Date: </th>
        <td>${employee.birthdate.substring(0,10)}</td></sbd>
    </tr>
    </table>

    <br/>
    <employeebuttons>
    <button class="user_single_edit edit_employee multibutton">Edit 
    <input class="employee_id" type="hidden" value="${employee.employeeId}"> 
    </button> 
    </employeebuttons>
    `
}