export default function EmployeeIndex(employeelist){
    console.log("employee Index")
    return `
    <employees>  
        ${employeelist.map(employee => {
        return `  
                <button class="edit_employee" value="${employee.employeeId}">edit</button> 
                 <input class="employee_id" type="hidden" value="${employee.employeeId}">      
                ${employee.firstName}
                ${employee.lastName}
                ${employee.address}
                ${employee.phoneNumber}
                ${employee.ssn}
                ${employee.birthdate}
                ${employee.email}
                `      
        })     
        .join("")}
    </employees>
    `
}
