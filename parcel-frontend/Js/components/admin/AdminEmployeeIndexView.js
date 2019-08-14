import ApiActions from "../../api/api-actions"

export default function AdminEmployeeIndex(employeelist){
    console.log("Employee Index")
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
        document.getElementById('rolename').innerHTML = roletoname.roleName;
        
        }) 
        return `
            <tr> 
                <td>${employee.lastName}, ${employee.firstName}</td>
                <td>${employee.address}</td>
                <td>${employee.phoneNumber}</td>
                <td>${employee.email}</td>
                <td><roletoname id="rolename"></roletoname></td>
                <td width="4%">
                    <button class="single_employee_submit multibutton">Select
                    <input class="single_employee_id" type="hidden" value="${employee.employeeId}"> 
                    </button>
                </td>
            </tr>
        `
    }).join("")}
    </table>
    `      
}
    // <names>
    //             <lname>${employee.lastName} ,</lname>
    //             <fname>${employee.firstName}</fname>
    //         </names>
    //         <address>${employee.address}</address>
    //         <pn>${employee.phoneNumber}</pn>
    //         <email>${employee.email}</email>
    //         <roleId id='${employee.employeeId}'>${employee.employeeId}
    //         <input id='roleidtoname' type="hidden" value="${employee.roleId}">
    //         </roleId>
    //             <employeebuttons>
    //                 <button class="single_employee_submit multibutton">Select
    //                 <input class="single_employee_id" type="hidden" value="${employee.employeeId}"> 
    //                 </button>
    //             </employeebuttons>
    //         </employee>
        /* </employees>
        `*/