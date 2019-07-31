export default function SingleEmployee(employee){
    return `    
            <h1>Employee: ${employee.lastName} , ${employee.firstName} </h1>
            ${employee.employeeId}
            ${employee.firstName}
           ${employee.lastName}
            ${employee.address}
            ${employee.phoneNumber}
            ${employee.ssn}
            ${employee.birthDate}
            ${employee.email}
            ${employee.roleId}
    `
}