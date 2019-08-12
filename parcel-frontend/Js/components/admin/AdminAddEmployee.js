import apiActions from '../../api/api-actions'
export default function AdminAddEmployee()
{
    console.log("addemployeepage")
    setPage();
    loadRoles();

    function setPage(){
        let page = `    
            <h1> Add Employee</h1>
            <table style="width: 95%">
                <tr>
                    <th>First Name: </th>
                    <td><input type="text" class="add_employee_first_name"></td>
                </tr>
                <tr>
                    <th>Last Name: </th>
                    <td><input type="text" class="add_employee_last_name"></td>
                </tr>
                <tr>
                    <th>Email: </th>
                    <td><input type="text" class="add_employee_email"></td>
                </tr>
                <tr>
                    <th>Address: </th>
                    <td><input type="text" class="add_employee_address"></td>
                </tr>
                <tr>
                    <th>Phone Number: </th>
                    <td><input type="text" class="add_employee_phone_number"></td>
                </tr>
                <tr>
                    <th>SSN: </th>
                    <td><input type="text" class="add_employee_ssn"></td>
                </tr>
                <tr>
                    <th>Birth Date: </th>
                    <td><input type="date" class="add_employee_birthdate"></td>
                </tr>
                <tr>
                    <th>Role: </th>
                    <td><select id="role_select" class="add_employee_roleId"></select></td>
                </tr>
            </table>
            
            <button class="add_employee_submit multibutton medbutton submit">Submit</button>
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

