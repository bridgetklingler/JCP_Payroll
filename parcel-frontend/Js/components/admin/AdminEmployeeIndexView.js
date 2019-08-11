import ApiActions from "../../api/api-actions"

export default function AdminEmployeeIndex(employee){
    
    setPage();
    loadRoles();
    function setPage(){
        let page =
    `
    <h1>Employee Index</h1>
    <table>
            <th colspan="2">Name</th>
            <th>Address</th>a
            <th>Phone Number</th>
            <th>Email</th>
            <th>Role</th>
            <th colspan="3"></th>
        
        <tr>
            <td>${employee.lastName}, </td>
            <td>${employee.firstName}</td>
            
            <td>${employee.address}</td>
            <td>${employee.phoneNumber}</td>
            <td>${employee.email}</td>
            <td><roleId id=id='roleidtoname'></td>
        </tr>
        <employeebuttons>
        <button class="single_employee_submit multibutton">Select
        <input class="single_employee_id" type="hidden" value="${employee.employeeId}"> 
        </button>
        </employeebuttons>
        
        </table>
        `
        document.querySelector('#main').innerHTML = page;
}

function loadRoles(){
    ApiActions.getRequest('https://localhost:44390/api/role/'+ employee.roleId,
    setRoles)
}

function setRoles(roles){
    let roleHtml = '';
    for (const role of roles){
        roleHtml += `<role id="${role.roleId}>${role.roleName}</role>`
    }
    document.querySelector("#roleidtoname").innerHTML = roleHtml;
}
}

