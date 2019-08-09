export default function UserAddHours(employee){
return     `    
            <h1> Add Hours</h1>
            <addhours>
            <h2> ${employee.firstName} ${employee.lastName}</h2>
            <addinput> <label>Time In: <label/> <input type="datetime-local" class="user_add_hours_time_in"> </addinput>
            <addinput> <label> Time Out: <label/> <input type="datetime-local" class="user_add_hours_time_out"> </addinput>
            
            <addinput> <label> Approved: <label/> <input type="text" class="user_add_hours_approved"  value="false"> </addinput>
            <button class="add_employee_hours_submit multibutton submit">Submit</button>
            </addhours>

    `
    
}