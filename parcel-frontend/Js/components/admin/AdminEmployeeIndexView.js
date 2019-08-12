import ApiActions from "../../api/api-actions"



export default function AdminEmployeeIndex(employeelist){

    console.log("employee Index")

    var i = 1;

    return `

    <h1>Employee Index</h1>

    <employees>

    <employee style="font-weight: 800; background-color: rgb(120, 161, 182)">    

    <names>

            <fname></fname>

            <lname>Name</lname>

            </names>

            <address>Address</address>

            <pn>Phone Number</pn>

            <email>Email</email>

            <roleId>Role</roleId>

            <employeebuttons></employeebuttons>

        </employee>

        ${employeelist.map(employee => {

            ApiActions.getRequest('https://localhost:44390/api/role/'+ employee.roleId,

    roletoname=> {

    document.getElementById(employee.employeeId).innerHTML = roletoname.roleName;

    })

    var x = "";

    i += 1;

    if(i % 2 === 0){x = 'green'}else{x='blue'}

        return `  

            <employee class='${x}'>

            <names>

            <lname>${employee.lastName} ,</lname>

            <fname>${employee.firstName}</fname>

            </names>

            <address>${employee.address}</address>

            <pn>${employee.phoneNumber}</pn>

            <email>${employee.email}</email>

            <roleId id='${employee.employeeId}'>${employee.employeeId}

            <input id='roleidtoname' type="hidden" value="${employee.roleId}">

            </roleId>

            <employeebuttons>

            <button class="single_employee_submit multibutton">Select

            <input class="single_employee_id" type="hidden" value="${employee.employeeId}"> 

            </button>

            </employeebuttons>

            </employee>

            `      

        })     



        .join("")

        

    }

        

        </employees>

        `

}