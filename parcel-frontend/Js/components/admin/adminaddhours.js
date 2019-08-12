import apiActions from '../../api/api-actions'

export default function AdminAddHours(){
console.log("admin add hours")
    setPage();
    loadEmployees();

    function setPage(){
        let page = `    
        <h1> Add Hours</h1>

        <table>
            <tr>
                <th>Employee Id:</th>
                <td><select id="employee_select" class="add_employee_id_hours"></select></td>
            </tr>
            <tr>
                <th>Time In:</th>
                <td><input type="datetime-local" class="add_hours_time_in"></select></td>
            </tr>
            <tr>
                <th>Time Out:</th>
                <td><input type="datetime-local" class="add_hours_time_out"> </select></td>
            </tr>
            <tr>
                <th>Approved:</th>
                <td><input type="text" class="add_hours_approved" value="false"></select></td>
            </tr>

            
        </table>
        <button class="add_employee_hours_submit multibutton submit">Submit</button>
        `
        document.querySelector('#main').innerHTML = page;
    }

    function loadEmployees(){
        apiActions.getRequest('https://localhost:44390/api/employee', setEmployees)
    }

    function setEmployees(employees){
        let employeeHtml = '';
        for(const employee of employees){
            employeeHtml += `<option
            value='${employee.employeeId}'>${employee.employeeId} - ${employee.lastName}, ${employee.firstName}</option>`
        }
        document.querySelector("#employee_select").innerHTML = employeeHtml;
    }
}

