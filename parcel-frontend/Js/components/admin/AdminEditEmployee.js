import apiActions from '../../api/api-actions'
export default function AdminEditEmployee(employee){
    
    setPage();
    loadRoles();
    function setPage(){
        let page =
         `    
            <h1> Edit: ${employee.lastName}, ${employee.firstName}</h1>
            <input type="hidden" class="edit_employee_id" value="${employee.employeeId}">
            <h2><em>Employee ID: ${employee.employeeId}</em></h2>
            
            <table style = "width: 95%">
            <tr>
                <th>First Name:</th>
                <td><input type="text" class="edit_employee_first_name" value="${employee.firstName}"></td>
            </tr>
            <tr>
                <th>Last Name:</th>
                <td> <input type="text" class="edit_employee_last_name" value="${employee.lastName}"></td>
            </tr>
            <tr>
                <th>Address:</th>
                <td><input type="text" class="edit_employee_address" value="${employee.address}"></td>
            </tr>
            <tr>
                <th>Phone Number:</th>
                <td><input type="text" class="edit_employee_phone_number" value="${employee.phoneNumber}"></td>
            </tr>
            <tr>
                <th>SSN:</th>
                <td><input type="text" class="edit_employee_ssn" value="${employee.ssn}"></td>
            </tr>
            <tr>
                <th>BirthDate:</th>
                <td><input type="date" class="edit_employee_birthdate" value="${employee.birthdate.substring(0,10)}"></td>
            </tr>
            <tr>
                <th>Email:</th>
                <td><input type="text" class="edit_employee_email" value="${employee.email}"></td>
            </tr>
            <tr>
                <th>RoleId:</th>
                <td><select id="role_select" class="add_employee_roleId"></select></td>
            </tr>
            </table>

            <div class="edit_buttons">
                <button class="edit_employee_submit multibutton submit medbutton">Submit</button>
                <button class='cancel_edit_submit multibutton cancel medbutton'>Cancel
            </div>
            <input class='cancel_employee_id' type='hidden' value ='${employee.employeeId}'>
           
    `
    document.querySelector("#main").innerHTML = page;
    }

    function loadRoles(){
        apiActions.getRequest('https://localhost:44390/api/role', setRoles)
    }

    function setRoles(roles){
        let roleHtml = '';
        for(const role of roles){
            roleHtml += `<option id="role_select-value" value='${role.roleId}'>${role.roleName}</option>`

        }
        document.querySelector("#role_select").innerHTML = roleHtml;
    }
}