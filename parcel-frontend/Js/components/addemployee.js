export default function GetAddEmployee(){
    return `    
            <h1> Add Employee</h1>
            <addemployee>
            <addinput> <label>First Name:</label> <input type="text" class="add_employee_first_name"> </addinput>
            <addinput> <label>Last Name:</label> <input type="text" class="add_employee_last_name"></addinput>
            <addinput> <label>Address:</label> <input type="text" class="add_employee_address"></addinput>
            <addinput> <label>Phone Number:</label> <input type="text" class="add_employee_phone_number"></addinput>
            <addinput> <label>SSN:</label> <input type="text" class="add_employee_ssn"></addinput>
            <addinput> <label>Birthdate:</label> <input type="date" class="add_employee_birthdate"></addinput>
            <addinput> <label>Email:</label> <input type="text" class="add_employee_email"></addinput>
            <button class="add_employee_submit multibutton submit">Submit</button>
            </addemployee>
    `
}