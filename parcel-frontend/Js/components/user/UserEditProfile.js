export default function UserEditProfile(employee){
    
   return `    
            <h1> Edit: ${employee.lastName}, ${employee.firstName}</h1>
            <input type="hidden" class="edit_employee_id" value="${employee.employeeId}">
            <h2>Employee ID: ${employee.employeeId}</h2>

            <table style="width: 95%">
                <tr>
                        <th>First Name: </th>
                        <td><input type="text" class="edit_employee_first_name" value="${employee.firstName}"></td>
                </tr>
                <tr>
                        <th>Last Name: </th>
                        <td><input type="text" class="edit_employee_last_name" value="${employee.lastName}"></td>
                </tr>
                <tr>
                        <th>Email: </th>
                        <td><input type="text" class="edit_employee_email" value="${employee.email}"></td>
                </tr>
                <tr>
                        <th>Phone Number: </th>
                        <td><input type="text" class="edit_employee_phone_number" value="${employee.phoneNumber}"></td>
                </tr>
                <tr>
                        <th>Address: </th>
                        <td><input type="text" class="edit_employee_address" value="${employee.address}"></td>
                </tr>
                <tr>
                <th>SSN:</th>
                <td><input type="text" class="edit_employee_ssn readonly" value="${employee.ssn}" readonly></td>
            </tr>
            <tr>
                <th>BirthDate:</th>
                <td><input type="date" class="edit_employee_birthdate readonly" value="${employee.birthdate.substring(0,10)}" readonly></td>
            </tr>
            </table>

            <div>
            <input type="hidden" class="user_roleId" value="${employee.roleId}">
            <input type="hidden" class="user_ssn" value="${employee.ssn}">
            <input type="hidden" class="user_admin_status" value="${employee.admin}">
            </div>
            <div class="edit_buttons">
                <button class="user_edit_submit multibutton submit medbutton">Submit</button>
                <button class='user_cancel_edit_submit multibutton cancel medbutton'>Cancel</button>
            </div>

            <input class='cancel_employee_id' type='hidden' value ='${employee.employeeId}'>
            </addemployee>
    `
    }
