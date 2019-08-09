import apiActions from '../../api/api-actions'

export default function AdminAddHours(){
    setPage();
    loadUsers();
    console.log("in the admin add hours")
    function setPage(){
        let page =
    `    
            <h1> Add Hours</h1>
            <div>
            <addinput> <label>Employee:</label> <select id="user_select" class="user_add_employee_id_hours"></select></addinput>
            </div>

            
            `
    document.querySelector("#main").innerHTML = page;
    console.log("at end of admin add hours")
}


    function loadUsers(){
        apiActions.getRequest('https://localhost:44390/api/employee', setUsers)
   
   }
   function setUsers(users){
       let userHtml = '';
       for(const employee of users){
           userHtml += `<option value='${employee.employeeId}'>${employee.lastName}</option>`
   
       }
       document.querySelector("#user_select").innerHTML = userHtml;
   }
}
            // <addinput> <label>Time In: <label/> <input type="datetime-local" class="add_hours_time_in"> </addinput>
            // <addinput> <label> Time Out: <label/> <input type="datetime-local" class="add_hours_time_out"> </addinput>
            
            // <addinput> <label> Approved: <label/> <input type="text" class="add_hours_approved" value="false"> </addinput>
            // <button class="add_employee_hours_submit multibutton submit">Submit</button>
            // </addhours>
