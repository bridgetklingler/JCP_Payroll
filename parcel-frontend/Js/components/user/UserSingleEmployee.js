import ApiActions from "../../api/api-actions"

export default function UserSingleEmployee(employee){
    ApiActions.getRequest('https://localhost:44390/api/role/'+employee.roleId,

    setRoles => { document.getElementById('rolenames').innerHTML = setRoles.roleName
                    document.getElementById('rolerate').innerHTML = '$' + setRoles.payRate + '    /    ' + setRoles.hourRate + ' hours'})
                    var birthdate = new Date(employee.birthdate).toDateString()
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
        <td id="roletoname"><sroleId id="rolenames"></sroleId></td>
    </tr>
    <tr>
        <th>Rate: </th>
        <td><sroleId id="rolerate"><s/roleId></td>
    </tr>
    <tr>
        <th>SSN: </th>
        <td>${employee.ssn}</td>
    </tr>
    <tr>
        <th>Birth Date: </th>
        <td>${birthdate}</td>
    </tr>
    </table>

    <br/>
    <employeebuttons>
      <button class="user_single_edit edit_employee multibutton medbutton">Edit 
      <input class="employee_id" type="hidden" value="${employee.employeeId}"> 
      </button> 
    </employeebuttons>
    `

}

