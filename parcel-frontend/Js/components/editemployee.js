export default function GetEditEmployee(employee){
    console.log(employee)
    return `    
            <h1> Edit Employee</h1>
            <input type="hidden" class="edit_employee_id" value="${employee.employeeId}">
            <addemployee>
            <addinput> <label>First Name:</label><input type="text" class="edit_employee_first_name" value="${employee.firstName}"></addinput>
            <addinput> <label>Last Name:</label><input type="text" class="edit_employee_last_name" value="${employee.lastName}"></addinput>
            <addinput> <label>Address:</label><input type="text" class="edit_employee_address" value="${employee.address}"></addinput>
            <addinput> <label>Phone Number:</label><input type="text" class="edit_employee_phone_number" value="${employee.phoneNumber}"></addinput>
            <addinput> <label>SSN:</label><input type="text" class="edit_employee_ssn" value="${employee.ssn}"></addinput>
            <addinput> <label>BirthDate:</label><input type="date" class="edit_employee_birthdate" value="${employee.birthDate.substring(0,10)}"></addinput>
            <addinput> <label>Email:</label><input type="text" class="edit_employee_email" value="${employee.email}"></addinput>
            <addinput> <label>Role:</label><input type="text" class="edit_employee_role" value="${employee.roleId}"></addinput>
            <button class="edit_employee_submit multibutton submit">Submit</button>
            </addemployee>
    `
}