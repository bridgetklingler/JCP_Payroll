export default function AdminNav(){
    return `    
    <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a class="Nav_employee_index" href="#">Employees</a>
    <a href="#">Edit Hours</a>
    <a href="#">Edit Roles</a>
    <a id="Nav_add_employee" href="#">Add Employee</a>
    <a href="#">Current Pay Period</a>
    <a href="#">Previous Pay Period</a>
    </div>
    <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
    </div> 

  `
}