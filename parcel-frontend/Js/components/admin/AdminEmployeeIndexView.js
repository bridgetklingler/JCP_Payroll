import ApiActions from "../../api/api-actions"

export default function AdminEmployeeIndex(employeelist){
    return `
    
    <h1>Employee Index</h1>
    <table style="width: 100%" class="indextable">
    <tr>
        <th class="tableheader">Name</th>
        <th class="tableheader">Address</th>
        <th class="tableheader">Phone</th>
        <th class="tableheader">Email</th>
        <th class="tableheader">Role</th>
        <th class="tableheader" id="hoursbuttons"></th>
    </tr>
    ${employeelist.map(employee => {
        
            ApiActions.getRequest('https://localhost:44390/api/role/'+ employee.roleId,
        
        roletoname=> {
        document.getElementById(employee.employeeId).innerHTML = roletoname.roleName;
        
        }) 
        return `
            <tr class="single_employee_submit indexhover"> 
            <input class="single_employee_id" type="hidden" value="${employee.employeeId}"> 
                <td class="single_employee_submit">${employee.lastName}, ${employee.firstName}
                <input class="single_employee_id" type="hidden" value="${employee.employeeId}"> 
                </td>
                <td class="single_employee_submit">${employee.address}
                <input class="single_employee_id" type="hidden" value="${employee.employeeId}"> 
                </td>
                <td class="single_employee_submit">${employee.phoneNumber}
                <input class="single_employee_id" type="hidden" value="${employee.employeeId}"> 
                </td>
                <td class="single_employee_submit">${employee.email}
                <input class="single_employee_id" type="hidden" value="${employee.employeeId}"> 
                </td>
                <td class="single_employee_submit"><roletoname id="${employee.employeeId}">${employee.employeeId}
                <input class="single_employee_id" type="hidden" value="${employee.employeeId}"> 
                </roletoname></td>
                <td class="single_employee_submit" width="4%">
                <input class="single_employee_id" type="hidden" value="${employee.employeeId}"> 
                </td>
            </tr>
        `
    }).join("")}
    </table>
    `      
}
   