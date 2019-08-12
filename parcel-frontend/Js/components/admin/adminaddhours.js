import apiActions from '../../api/api-actions'

export default function AdminAddHours(){
console.log("admin add hours")
    setPage();
    loadEmployees();

    function setPage(){
        let page = `    
        <h1> Add Hours</h1>
        <addemployee>

        <div>
        <addinput> <label>Employee Id:</label> 
        <select id="employee_select" class="add_employee_id_hours"></select></addinput> 
        </div>
        
        <addinput> <label>Time In: <label/> <input type="datetime-local" class="add_hours_time_in"> </addinput>
        <addinput> <label> Time Out: <label/> <input type="datetime-local" class="add_hours_time_out"> </addinput>
        
        <addinput> <label> Approved: <label/> <input type="text" class="add_hours_approved" value="false"> </addinput>
        <button class="add_employee_hours_submit multibutton submit">Submit</button>
        </addemployee>
        `
        document.querySelector('#main').innerHTML = page;
    }

    function loadEmployees(){
        apiActions.getRequest('https://localhost:44390/api/employee', setEmployees)
    }

    function setEmployees(employees){
        console.log("admin add hours bottom of page")
        let employeeHtml = '';
        for(const employee of employees){
            employeeHtml += `<option
            value='${employee.employeeId}'>${employee.employeeId} - ${employee.lastName}, ${employee.firstName}</option>`
        }
        document.querySelector("#employee_select").innerHTML = employeeHtml;
    }
    //console.log(employeeHtml)
}

