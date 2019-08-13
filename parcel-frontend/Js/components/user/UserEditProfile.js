export default function UserEditProfile(employee){
    
   return `    
            <h1> Edit: ${employee.lastName}, ${employee.firstName}</h1>
            <input type="hidden" class="edit_employee_id" value="${employee.employeeId}">
            <h2>Employee ID: ${employee.employeeId}</h2>
            <addemployee>
            <addinput> <label>First Name:</label><input type="text" class="edit_employee_first_name" value="${employee.firstName}"></addinput>
            <addinput> <label>Last Name:</label><input type="text" class="edit_employee_last_name" value="${employee.lastName}"></addinput>
            <addinput> <label>Address:</label><input type="text" class="edit_employee_address" value="${employee.address}"></addinput>
            <addinput> <label>Phone Number:</label><input type="text" class="edit_employee_phone_number" value="${employee.phoneNumber}"></addinput>
            <addinput> <label>BirthDate:</label><input type="date" class="edit_employee_birthdate" value="${employee.birthdate.substring(0,10)}"></addinput>
            <addinput> <label>Email:</label><input type="text" class="edit_employee_email" value="${employee.email}"></addinput>
            <div>
            <input type="hidden" class="user_roleId" value="${employee.roleId}">
            <input type="hidden" class="user_ssn" value="${employee.ssn}">
            <input type="hidden" class="user_admin_status" value="${employee.admin}">
            </div>
            <div class="edit_buttons">
            <button class="user_edit_submit multibutton submit">Submit</button>
            <button class='cancel_edit_submit multibutton cancel'>Cancel
            </div>

            <input class='cancel_employee_id' type='hidden' value ='${employee.employeeId}'>
            </addemployee>
    `
    }
