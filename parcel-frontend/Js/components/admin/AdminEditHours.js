export default function AdminEditHours(){
    return `    
    <h1> Edit Hours</h1>
    
    <table> 
    <tr>
    <th>Time In:</th>
    <td><input type="datetime-local" class="edit_hours_time_in"></select></td>
    </tr>
    <tr>
    <th>Time Out:</th>
    <td><input type="datetime-local" class="edit_hours_time_out"> </select></td>
    </tr>
    <tr>
    <th>Approved:</th>
    <td><input type="text" class="edit_hours_approved" value="false"></select></td>
    </tr>  
    </table>
    `
    
}

    
