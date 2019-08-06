export default function GetAddHours(){
    return `    
            <h1> Add Hours</h1>
            <addhours>
            <addinput> <label>Employee Id:<label/> <input type="text" class="add_employee_id_hours"> </addinput>
            <addinput> <label>Date Worked:<label/> <input type="date" class="add_hours_date"> </addinput>
            <addinput> <label>Time In: <label/> <input type="datetime-local" class="add_hours_time_in"> </addinput>
            <addinput> <label> Time Out: <label/> <input type="datetime-local" class="add_hours_time_out"> </addinput>
            <addinput> <label> Total Hours: <label/> <input type="text" class="add_hours_total_hours"> </addinput>
            <addinput> <label> Approved: <label/> <input type="hidden" class="add_hours_approved"> </addinput>
            <button class="add_employee_hours_submit multibutton submit">Submit</button>
            </addhours>
    `
}