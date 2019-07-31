export default function GetEditEmployee(employee){
    return `    
            <h1> Edit Employee</h1>
            <input type="hidden" class="edit_employee_id" value="${employee.employeeId}">
            <input type="text" class="edit_employee_first_name" value="${employee.employeeFirstName}">
            <input type="text" class="edit_employee_last_name" value="${employee.employeeLastName}">
            <input type="text" class="edit_employee_address" value="${employee.employeeAddress}">
            <input type="text" class="edit_employee_phone_number" value="${employee.employeePhoneNumber}">
            <input type="text" class="edit_employee_ssn" value="${employee.employeeSSN}">
            <input type="date" class="edit_employee_birthdate" value="${employee.employeeBirthDate}">
            <input type="text" class="edit_employee_email" value="${employee.employeeEmail}">
            <input type="text" class="edit_employee_role" value="${employee.employeeRole}">
            <button class="edit_employee_submit multibutton">Submit</button>
    `
}