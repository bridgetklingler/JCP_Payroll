import EmployeeIndex from "./components/employeeindex"
import GetAddEmployee from "./components/addemployee"
import ApiAction from "./api/api-actions"
import GetEditEmployee from "./components/editemployee"
import SingleEmployee from "./components/singleemployee"
import GetAddHours from "./components/employeeaddhours"
import EmployeeHoursIndex from "./components/employeehoursindex"

pageBuild();

function pageBuild(){
  employeeindex();
  hoursindex();
  getaddemployee();
  addemployee();
  addhours();
  geteditemployee();
  editemployee();
  deleteEmployee()
  singleEmployee()
  getAddHours();
}

const app = document.getElementById('main');

//Gets all Employees
function employeeindex(){
  const employeeindex = document.getElementById('Nav_employee_index');
  employeeindex.addEventListener('click', function(){
      ApiAction.getRequest("https://localhost:44390/api/employee", employeelist => {
          app.innerHTML = EmployeeIndex(employeelist);
      })
  })
};


function hoursindex(){
  const hoursindex = document.getElementById('Nav_hours_index');
  hoursindex.addEventListener('click', function(){
    ApiAction.getRequest('https://localhost:44390/api/hours', hourslist => {
      console.log("i2")
      app.innerHTML = EmployeeHoursIndex(hourslist);
    })
  })
}


//Gets the Add Employee Page -pushing to styling
function getaddemployee() {
  document.getElementById('Nav_add_employee').addEventListener('click', function(){
    GetAddEmployee();
  })
}
function getAddHours(){
  document.getElementById('Nav_add_hours').addEventListener('click', function(){
    app.innerHTML = GetAddHours();
  })
}

function geteditemployee() {
//   document.querySelector('.edit_employee').addEventListener('click', function(){
//     GetEditEmployee();
//   })
// }
  document.getElementById('main').addEventListener('click', function(){
      if(event.target.classList.contains("edit_employee")){
        const employeeId = event.target.querySelector(".employee_id").value
    console.log(employeeId)
        ApiAction.getRequest("https://localhost:44390/api/employee/" + employeeId, employee=> {
        GetEditEmployee(employee)})
      }
 } )}

 //Delete an Employee
 function deleteEmployee(){
  document.getElementById('main').addEventListener('click', function() {
    if (event.target.classList.contains('delete_employee_submit')){
    const employeeId = event.target.querySelector('.delete_employee_id').value;
      const data = {
          employeeId: employeeId
      }

      var result = confirm("Are you sure you want to delete this employee?");
      if (result) {
    ApiAction.deleteRequest('https://localhost:44390/api/employee', 
    data,
    employeelist=> {
      app.innerHTML = EmployeeIndex(employeelist);
    })
  }
}})
}

//Creates an Employee
function addemployee(){
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
      console.log("i2")
      app.innerHTML = EmployeeIndex(employeelist);
    })
  }
})
}
// convert time in time out to total hours in minutes
function converthours(timeOut,timeIn){
  console.log("time in"); console.log(timeIn);
  console.log("timeOut"); console.log(timeOut);
  var fromDate = parseInt(new Date(timeOut).getTime()/1000)
  console.log(fromDate);
  var toDate = parseInt(new Date(timeIn).getTime()/1000)
  console.log(toDate);
  var timeDiff = (toDate-fromDate)/3600;
  console.log(timeDiff);
  console.log("i was here!")
  return timeDiff;
}
//add hours for employee
function addhours(){
  document.getElementById('main').addEventListener('click', function() {
  if (event.target.classList.contains('add_employee_hours_submit')){
  console.log("i");
  const hoursId = 0;
  const employeeId = document.querySelector('.add_employee_id_hours').value
 // const dateWorked = document.querySelector('.add_hours_date').value
  const timeIn = document.querySelector('.add_hours_time_in').value
  const timeOut = document.querySelector('.add_hours_time_out').value
  
  const totalHours = converthours(timeIn,timeOut);
  
  console.log(totalHours);
  const approved = false;
  //document.querySelector('.approved').value
  const data = {
    HoursId: hoursId,
    EmployeeId: employeeId,
    //DateWorked: dateWorked,
    TimeIn: timeIn,
    TimeOut: timeOut,
    TotalHours: totalHours,
    Approved: approved
  };
  
    ApiAction.postRequest('https://localhost:44390/api/hours', data,
    hourslist=> {
      console.log("i2")
      app.innerHTML = EmployeeHoursIndex(hourslist);
    })
  }
})
}


//Edit Employee Data
function editemployee(){
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
        console.log("i2")
        app.innerHTML = EmployeeIndex(employeelist);
      })
    }
  })
  }
  document.getElementById('main').addEventListener('click', function(){
    if(event.target.classList.contains('cancel_edit_submit'))
  
  ApiAction.getRequest("https://localhost:44390/api/employee", employeelist => {
      app.innerHTML = EmployeeIndex(employeelist);
    })

  })

   //View a Single Employee
  function singleEmployee(){
    document.getElementById('main').addEventListener('click', function() {
      if (event.target.classList.contains('single_employee_submit')){
      const employeeId = event.target.querySelector('.single_employee_id').value;
       
      ApiAction.getRequest('https://localhost:44390/api/employee/' + employeeId, 
        employee=> {
        app.innerHTML = SingleEmployee(employee);
      })
  }})  
  }
    document.getElementById('main').addEventListener('click', function(){
      if(event.target.classList.contains('return_employee_submit'))
    
    ApiAction.getRequest("https://localhost:44390/api/employee", employeelist => {
        app.innerHTML = EmployeeIndex(employeelist);
      })
    })

    // Login function -----------------------------------------------------
    document.getElementById('main').addEventListener('click', function(){
        if(event.target.classList.contains("adminlogin")){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('test');
    document.getElementById('invalid').innerHTML = "Invalid Username or Password"
        ApiAction.getRequest("https://localhost:44390/api/employee/login/"+username+"/"+password, auth => {
          console.log(auth);
            if (auth.ssn === password)
            {
              document.getElementById('hidenav').style.display = 'block'
        document.getElementById('nav').style.display = 'flex'
        document.getElementById('mainnav').style.display = 'flex'
        document.getElementById('main').innerHTML = `<h1>Welcome Back,</br> ${auth.firstName} ${auth.lastName}</h1>`
            }    
          })
        }
      })