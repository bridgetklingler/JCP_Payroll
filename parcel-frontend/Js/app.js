import EmployeeIndex from "./components/employeeindex"
import GetAddEmployee from "./components/addemployee"
import ApiAction from "./api/api-actions"
import GetEditEmployee from "./components/editemployee"
import SingleEmployee from "./components/singleemployee"
import AdminAddHours from "./components/admin/adminaddhours"
import EmployeeAddHours from "./components/employeeaddhours"
import AdminHoursIndex from "./components/adminhoursindex"
import SingleEmployeeHours from "./components/singleemployeehours"

pageBuild();

function pageBuild(){
  employeeindex();
  getaddemployee();
  addemployee();
  geteditemployee();
  editemployee();
  deleteEmployee()
  
  singleEmployee()
  
  hoursindex();
  addhours();
  getAdminAddHours();
  getEmployeeAddHours();
  singleemployeehours();
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
function employeehoursindex(){
  const employeeHours = document.getElementById('User_view_hours_index');
  employeeHours.addEventListener('click', function (){
    const employeeId = event.target.querySelector('.single_employee_id').value;
       
    ApiAction.getRequest('https://localhost:44390/api/hours/' + employeeId, hourslist => {
      app.innerHTML = EmployeeHoursIndex
    })
  })
}


//Gets the Add Employee Page
function getaddemployee() {
  document.getElementById('Nav_add_employee').addEventListener('click', function(){
    GetAddEmployee();
  })
}
function getAdminAddHours(){
  document.getElementById('Nav_add_hours').addEventListener('click', function(){
    app.innerHTML = AdminAddHours();
  })
}
function getEmployeeAddHours(){
  document.getElementById('User_hours_index').addEventListener('click', function(){
    app.innerhtml = EmployeeAddHours();
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
  const timeRound = Math.round((timeDiff+.04)*10)/10;
  console.log(timeRound)
  return timeRound;
}
//add hours for employee
function addhours(){
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
        if (auth.admin == true)
        document.getElementById('hidenav').style.display = 'block'
            }    
          })
        }
      })

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
      function singleemployeehours() {
      document.getElementById('mainnav').addEventListener('click', function() {
        if (event.target.classList.contains('emphours')){
        const employeeId = event.target.querySelector('.gethours').value;  
        console.log(employeeId);   
        ApiAction.getRequest('https://localhost:44390/api/hours/'+employeeId, 
          hours=> {
            console.log(hours)
          app.innerHTML = SingleEmployeeHours(hours);
        })
    }})  
  }

