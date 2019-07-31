export default function GetEditEmployee(employee){
    console.log(employee)
    return `    
            <h1> Edit Employee</h1>
            <input type="hidden" class="edit_employee_id" value="${employee.employeeId}">
            <input type="text" class="edit_employee_first_name" value="${employee.firstName}">
            <input type="text" class="edit_employee_last_name" value="${employee.lastName}">
            <input type="text" class="edit_employee_address" value="${employee.address}">
            <input type="text" class="edit_employee_phone_number" value="${employee.phoneNumber}">
            <input type="text" class="edit_employee_ssn" value="${employee.ssn}">
            <input type="date" class="edit_employee_birthdate" value="${employee.birthDate}">
            <p>${employee.birthDate}</p>
            <input type="text" class="edit_employee_email" value="${employee.email}">
            <input type="text" class="edit_employee_role" value="${employee.roleId}">
            <button class="edit_employee_submit multibutton">Submit</button>
    `
}