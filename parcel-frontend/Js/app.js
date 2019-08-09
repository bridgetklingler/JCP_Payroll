import ApiAction from "./api/api-actions"

import AdminEmployeeIndex from "./components/admin/AdminEmployeeIndexView"
import AdminAddEmployee from "./components/admin/AdminAddEmployee"
import AdminEditEmployee from "./components/admin/AdminEditEmployee"
import AdminHoursIndex from "./components/admin/AdminHoursIndexView"
import AdminAddHours from "./components/admin/AdminAddHours"
import AdminSingleEmployee from "./components/admin/AdminSIngleEmployee"

import UserHoursIndex from "./components/user/UserHoursIndexView"


//admin single employee view
//user add hours
import EmployeeAddHours from "./components/employeeaddhours"

pageBuild();

function pageBuild(){

  getAdminEmployeeIndex();
  getAdminAddEmployee();
  getAdminEditEmployee();
  getAdminHoursIndex();

  getAdminAddHours();
  getAdminSingleEmployee()
  
  adminAddEmployee();
  adminEditEmployee();
  adminDeleteEmployee()
  adminAddHours();
 
  getUserHoursIndex();
  //unsorted code------------------------
  getEmployeeAddHours();
}

const app = document.getElementById('main');

// Login function -----------------------------------------------------
document.getElementById('main').addEventListener('click', function(){
  if(event.target.classList.contains("adminlogin")){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('test');
    document.getElementById('invalid').innerHTML = "Invalid Username or Password"
    ApiAction.getRequest("https://localhost:44390/api/employee/login/"+username+"/"+password, auth => {
      console.log(auth);
      if (auth.ssn === password){
        document.getElementById('hidenav').style.display = 'block'
        document.getElementById('nav').style.display = 'flex'
        document.getElementById('mainnav').style.display = 'flex'
        document.getElementById('main').innerHTML = `<h1>Welcome Back,</br> ${auth.firstName} ${auth.lastName}</h1>`
        document.getElementById('mainnav').innerHTML = `        
        <n class="empprofile">Profile
        <input type="hidden" class="getprofile" value="${auth.employeeId}">
        </n>
        <n class="emphours">Current Pay-Period
        <input type="hidden" class="gethours" value="${auth.employeeId}">
        </n>
        <n value="${auth.employeeId}">Past Pay-Period</n>
        `
      }    
    })
  }
})

//List Employees
function getAdminEmployeeIndex(){
  const employeeindex = document.getElementById('Nav_employee_index');
  employeeindex.addEventListener('click', function(){
      ApiAction.getRequest("https://localhost:44390/api/employee", employeelist => {
        console.log("admin version")
          app.innerHTML = AdminEmployeeIndex(employeelist);
      })
  })
};

//Add Employee Functions
function getAdminAddEmployee() {

  document.getElementById('Nav_add_employee').addEventListener('click', function(){
    console.log("admin version")
    AdminAddEmployee();
  })
}

function adminAddEmployee(){
  document.getElementById('main').addEventListener('click', function() {
  if (event.target.classList.contains('add_employee_submit')){
  console.log("i");
  const employeeId = 0;
  const firstName = document.querySelector('.add_employee_first_name').value;
  const lastName = document.querySelector('.add_employee_last_name').value;
  const address = document.querySelector('.add_employee_address').value;
  const phoneNumber = document.querySelector('.add_employee_phone_number').value;
  const ssn = document.querySelector('.add_employee_ssn').value;
  const birthdate = document.querySelector('.add_employee_birthdate').value;
  const email = document.querySelector('.add_employee_email').value;
  const roleId = document.querySelector('#role_select').value;
  const data = {
    employeeId: employeeId,
    phoneNumber: phoneNumber,
    roleId: roleId,
    firstName: firstName,
    lastName: lastName,
    address: address,
    ssn: ssn,
    birthdate: birthdate,
    email: email,
   
  };
  
    ApiAction.postRequest('https://localhost:44390/api/employee', data,
    employeelist=> {
      console.log("admin add function version")
      app.innerHTML = AdminEmployeeIndex(employeelist);
    })
  }
})
}

//Edit Employee Functions
function getAdminEditEmployee() {
  document.getElementById('main').addEventListener('click', function(){
    if(event.target.classList.contains("edit_employee")){
      const employeeId = event.target.querySelector(".employee_id").value
      console.log(employeeId)
      ApiAction.getRequest("https://localhost:44390/api/employee/" + employeeId, employee=> {
        console.log("admin version")
      AdminEditEmployee(employee)})
    }
  })
}

function adminEditEmployee(){
  document.getElementById('main').addEventListener('click', function() {
    if (event.target.classList.contains('edit_employee_submit')){
    console.log("i");
    const employeeId = document.querySelector('.edit_employee_id').value;
    const roleId = document.querySelector('#role_select').value;
    const firstName = document.querySelector('.edit_employee_first_name').value;
    const lastName = document.querySelector('.edit_employee_last_name').value;
    const address = document.querySelector('.edit_employee_address').value;
    const phoneNumber = document.querySelector('.edit_employee_phone_number').value;
    const ssn = document.querySelector('.edit_employee_ssn').value;
    const birthdate = document.querySelector('.edit_employee_birthdate').value;
    const email = document.querySelector('.edit_employee_email').value;
    
    const data = {
      employeeId: employeeId,
      phoneNumber: phoneNumber,
      roleId: roleId,
      firstName: firstName,
      lastName: lastName,
      address: address,
      ssn: ssn,
      birthdate: birthdate,
      email: email
    };
   
      ApiAction.putRequest('https://localhost:44390/api/employee', data,
      employeelist=> {
        console.log("admin version")
        app.innerHTML = AdminEmployeeIndex(employeelist);
      })
    }
  })
}

//Edit Cancel Button
document.getElementById('main').addEventListener('click', function(){
  if(event.target.classList.contains('cancel_edit_submit'))
    ApiAction.getRequest("https://localhost:44390/api/employee", employeelist => {
    app.innerHTML = AdminEmployeeIndex(employeelist);
  })
})

//Delete Employee Functions
function adminDeleteEmployee(){
  document.getElementById('main').addEventListener('click', function() {
    if (event.target.classList.contains('delete_employee_submit')){
      const employeeId = event.target.querySelector('.delete_employee_id').value;
      const data = {
        employeeId: employeeId
      }

      var result = confirm("Are you sure you want to delete this employee?");
      if (result) {
        ApiAction.deleteRequest('https://localhost:44390/api/employee', data, employeelist=> {
          console.log("admin version")
          app.innerHTML = AdminEmployeeIndex(employeelist);
        })
      }
    }
  })
}

//View a Single Employee
function getAdminSingleEmployee(){
  document.getElementById('main').addEventListener('click', function() {
    if (event.target.classList.contains('single_employee_submit')){
    const employeeId = event.target.querySelector('.single_employee_id').value;
     
      ApiAction.getRequest('https://localhost:44390/api/employee/' + employeeId, 
        employee=> {
          console.log("admin version")
        app.innerHTML = AdminSingleEmployee(employee);
      })
    }
  })  
}
//Return to Index Button in Single Employee Page
document.getElementById('main').addEventListener('click', function(){
  if(event.target.classList.contains('return_employee_submit'))

    ApiAction.getRequest("https://localhost:44390/api/employee", employeelist => {
    app.innerHTML = GetAdminEmployeeIndex(employeelist);
  })
})


//hours based
//Gets all Hours
function getAdminHoursIndex(){
  const hoursindex = document.getElementById('Nav_hours_index');
  hoursindex.addEventListener('click', function(){
    ApiAction.getRequest('https://localhost:44390/api/hours', hourslist => {
      console.log("admin version")
      app.innerHTML = AdminHoursIndex(hourslist);
    })
  })
}

//Admin Add Hours
function getAdminAddHours(){
  document.getElementById('Nav_add_hours').addEventListener('click', function(){
    console.log("admin version")
    app.innerHTML = AdminAddHours();
  })
}

function adminAddHours(){
  document.getElementById('main').addEventListener('click', function() {
  if (event.target.classList.contains('add_employee_hours_submit')){

  const hoursId = 0;
  const employeeId = document.querySelector('.add_employee_id_hours').value
  const timeIn = document.querySelector('.add_hours_time_in').value
  const timeOut = document.querySelector('.add_hours_time_out').value
  
  const totalHours = converthours(timeIn,timeOut);
  
  console.log(totalHours);
  const approved = document.querySelector(".add_hours_approved").value;
  console.log(approved)

  const data = {
    HoursId: hoursId,
    EmployeeId: employeeId,
    
    TimeIn: timeIn,
    TimeOut: timeOut,
    TotalHours: totalHours,
    Approved: approved
  };
  
    ApiAction.postRequest('https://localhost:44390/api/hours', data,
    hourslist=> {
      console.log("admin version")
      app.innerHTML = AdminHoursIndex(hourslist);
    })
  }
})
}
//Converts Time in and Time out to display correctly
function converthours(timeOut,timeIn){
  console.log("time in"); console.log(timeIn);
  console.log("timeOut"); console.log(timeOut);
  var fromDate = parseInt(new Date(timeOut).getTime()/1000)
  console.log(fromDate);
  var toDate = parseInt(new Date(timeIn).getTime()/1000)
  console.log(toDate);
  var timeDiff = (toDate-fromDate)/3600;
  console.log(timeDiff);
  const timeRound = Math.round((timeDiff+.04)*10)/10;
  console.log(timeRound)
  return timeRound;
}

//User Functions Below

//Hours Functions
function getUserHoursIndex() {
    document.getElementById('mainnav').addEventListener('click', function() {
      if (event.target.classList.contains('emphours')){
      const employeeId = event.target.querySelector('.gethours').value;  
      console.log(employeeId);   
      ApiAction.getRequest('https://localhost:44390/api/hours/'+employeeId, 
        hours=> {
          console.log(hours)
        app.innerHTML = UserHoursIndex(hours);
      })
}})  
}




//below is unsorted code--------------------------------------------------------------------------------------------------- 
//
//
//
//

// function employeehoursindex(){
//   const employeeHours = document.getElementById('User_view_hours_index');
//   employeeHours.addEventListener('click', function (){
//     const employeeId = event.target.querySelector('.single_employee_id').value;
       
//     ApiAction.getRequest('https://localhost:44390/api/hours/' + employeeId, hourslist => {
//       app.innerHTML = EmployeeHoursIndex(hourslist);
//     })
//   })
// }


//Gets the Add Employee Page
function getEmployeeAddHours(){
  document.getElementById('User_hours_index').addEventListener('click', function(){
    app.innerhtml = EmployeeAddHours();
  })
}


  

//Views logged in Employee Profile from Nav
  document.getElementById('mainnav').addEventListener('click', function() {
    if (event.target.classList.contains('empprofile')){
    const employeeId = event.target.querySelector('.getprofile').value;  
    console.log(employeeId);   
    ApiAction.getRequest('https://localhost:44390/api/employee/' + employeeId, 
      employee=> {
      app.innerHTML = SingleEmployee(employee);
    })
}})
      
//View logged in Employee's Hours from Nav
