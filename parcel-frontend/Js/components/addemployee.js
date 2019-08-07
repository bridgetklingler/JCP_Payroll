import apiActions from '../api/api-actions'
export default function GetAddEmployee()
{
    console.log("addemployeepage")
    setPage();
    loadRoles();

    function setPage(){
        let page = `    
            <h1> Add Employee</h1>
            <addemployee>
            <addinput> <label>First Name:</label> <input type="text" class="add_employee_first_name"> </addinput>
            <addinput> <label>Last Name:</label> <input type="text" class="add_employee_last_name"></addinput>
            <addinput> <label>Address:</label> <input type="text" class="add_employee_address"></addinput>
            <addinput> <label>Phone Number:</label> <input type="text" class="add_employee_phone_number"></addinput>
            <addinput> <label>SSN:</label> <input type="text" class="add_employee_ssn"></addinput>
            <addinput> <label>Birthdate:</label> <input type="date" class="add_employee_birthdate"></addinput>
            <addinput> <label>Email:</label> <input type="text" class="add_employee_email"></addinput>
            <div>
            <addinput> <label>RoleId:</label> <select id="role_select" class="add_employee_roleId"></select></addinput>
            </div>
            <button class="add_employee_submit multibutton submit">Submit</button>
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
            roleHtml += `<option value='${role.roleId}'>${role.roleName}'</option>`

        }
        document.querySelector("#role_select").innerHTML = roleHtml;
    }
}

