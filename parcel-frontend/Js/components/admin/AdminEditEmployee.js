import apiActions from '../../api/api-actions'
export default function AdminEditEmployee(employee){
    
    setPage();
    loadRoles();
    function setPage(){
        let page =
         `    
            <h1> Edit: ${employee.lastName}, ${employee.firstName}</h1>
            <input type="hidden" class="edit_employee_id" value="${employee.employeeId}">
            <h2>${employee.employeeId}</h2>
            <addemployee>
            <addinput> <label>First Name:</label><input type="text" class="edit_employee_first_name" value="${employee.firstName}"></addinput>
            <addinput> <label>Last Name:</label><input type="text" class="edit_employee_last_name" value="${employee.lastName}"></addinput>
            <addinput> <label>Address:</label><input type="text" class="edit_employee_address" value="${employee.address}"></addinput>
            <addinput> <label>Phone Number:</label><input type="text" class="edit_employee_phone_number" value="${employee.phoneNumber}"></addinput>
            <addinput> <label>SSN:</label><input type="text" class="edit_employee_ssn" value="${employee.ssn}"></addinput>
            <addinput> <label>BirthDate:</label><input type="date" class="edit_employee_birthdate" value="${employee.birthdate.substring(0,10)}"></addinput>
            <addinput> <label>Email:</label><input type="text" class="edit_employee_email" value="${employee.email}"></addinput>
            <div>
            <addinput> <label>RoleId:</label> <select id="role_select" class="add_employee_roleId"></select></addinput>
            </div>
            <div class="edit_buttons">
            <button class="edit_employee_submit multibutton submit">Submit</button>
            <button class='cancel_edit_submit multibutton cancel'>Cancel
            </div>
            <input class='cancel_employee_id' type='hidden' value ='${employee.employeeId}'>
            </addemployee>
    `
    document.querySelector("#main").innerHTML = page;
    
}

 function loadRoles(){
     apiActions.getRequest('https://localhost:44390/api/role', setRoles)

}
function setRoles(roles){
    let roleHtml = '';
    for(const role of roles){
        roleHtml += `<option value='${role.roleId}'>${role.roleName}</option>`

    }
    document.querySelector("#role_select").innerHTML = roleHtml;
}
}