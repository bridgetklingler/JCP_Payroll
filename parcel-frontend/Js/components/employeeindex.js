export default function EmployeeIndex(employeelist){
    console.log("employee Index")
    return `
    <employees>  
        
        ${employeelist.map(employee => {
        return `  
                  
                <button class="edit_employee">Edit 
                <input class="employee_id" type="hidden" value="${employee.employeeId}"> 
                </button> 
                <button class="delete_employee_submit">Delete 
                <input class="delete_employee_id" type="hidden" value="${employee.employeeId}"> 
                </button> 


                     
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
