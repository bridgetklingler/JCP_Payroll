import ApiActions from "../../api/api-actions"

export default function UserSingleEmployee(employee){
    setPage();
    loadRoles();
    function setPage(){
        let page = `   
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
        <th>Role: </th>
        <td id="roletoname"><sroleId id="rolenames"></sroleId></td>
    </tr>
    <tr>
        <th>Adress: </th>
        <td>${employee.address}</td>
    </tr>
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
      <button class="user_single_edit edit_employee multibutton medbutton">Edit 
      <input class="employee_id" type="hidden" value="${employee.employeeId}"> 
      </button> 
    </employeebuttons>
    `
    document.querySelector("#main").innerHTML = page;
}

function loadRoles(){
    ApiActions.getRequest('https://localhost:44390/api/role/' + employee.roleId,
    setRoles
    // => {
    // document.getElementById("#roletoname").innerHTML = roletoname.roleName;
    // apiActions.getRequest('https://localhost:44390/api/role', setRoles)
// }
)}

function setRoles(role){
    console.log(role.roleName)
    roleHtml += `<role id="role_select-value" value='${role.roleId}'>${role.roleName}</role>`;

    
    document.querySelector("#rolenames").innerHTML = roleHtml;
}


}