export default function EmployeeIndex(employeelist){
    return `
    <employees>  
        ${employeelist.map(employee => {
        return `          
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
