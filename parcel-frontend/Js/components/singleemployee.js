export default function SingleEmployee(employee){
    return `    
            <h1>Employee: ${employee.lastName} , ${employee.firstName} </h1>
            <h2>Employee ID: ${employee.employeeId} </h2>
            <table style="width: 95%">

            <tr>
                <sfname><th>First Name: </th>
                <td>${employee.firstName}</td></sfname>
            </tr>

            <tr>
                <slname><th>Last Name: </th>
                <td>${employee.lastName}</td></slname>
            </tr>
            <tr>
                <semail><th>Email: </th>
                <td>${employee.email}</td></semail>
            </tr>
            <tr>
                <spn><th>Phone: </th>
                <td>${employee.phoneNumber}</td></spn>
            </tr>
            <tr>
                <sroleId><th>Role: </th>
                <td>${employee.roleId}</td></sroleId>
            </tr>
            <tr>
                <saddress><th>Adress: </th>
                <td>${employee.address}</td></saddress>
            </tr>
            <tr>
                <sssn><th>SSN: </th>
                <td>${employee.ssn}</td></sssn>
            </tr>
            <tr>
                <sbd><th>Birth Date: </th>
                <td>${employee.birthdate.substring(0,10)}</td></sbd>
            </tr>
            </table>

            <br/>
            <employeebuttons>
            <button class="edit_employee multibutton">Edit 
            <input class="employee_id" type="hidden" value="${employee.employeeId}"> 
            </button> 
            </employeebuttons>
            `
        }
