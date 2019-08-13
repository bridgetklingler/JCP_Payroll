import ApiAction from "./api/api-actions"

import AdminEmployeeIndex from "./components/admin/AdminEmployeeIndexView"
import AdminAddEmployee from "./components/admin/AdminAddEmployee"
import AdminEditEmployee from "./components/admin/AdminEditEmployee"
import AdminHoursIndex from "./components/admin/AdminHoursIndexView"
import AdminAddHours from "./components/admin/AdminAddHours"
import AdminSingleEmployee from "./components/admin/AdminSingleEmployee"

import UserHoursIndex from "./components/user/UserHoursIndexView"
import UserSingleEmployee from "./components/user/UserSingleEmployee"
import UserEditProfile from "./components/user/UserEditProfile"

//admin single employee view
//user add hours
import EmployeeAddHours from "./components/employeeaddhours"
import EmployeeTimeClock from "./components/user/EmployeeTimeClock";
import Home from "./components/home";


pageBuild();

function pageBuild(){
  getAdminEmployeeIndex();
  getAdminAddEmployee();
  getAdminEditEmployee();
  getAdminHoursIndex();

  getAdminAddHours();
  getAdminSingleEmployee();
  
  adminAddEmployee();
  adminEditEmployee();
  adminDeleteEmployee();
  adminAddHours();
  adminApproveHours();
 
  getUserSingleEmployee();
  getUserEditProfile();
  getUserHoursIndex();
  getEmployeeTimeClock();

  userEditProfile();
 
  LogIn();
  logOut();
  editCancel();
  returnIndex();
  clockIn();
  clockOut();
  viewByDateRange();
  searchByLastName();

}

const app = document.getElementById('main');

function LogIn(){
  var logged_id = null; //id of person currently logged in (or null if nobody)
  document.getElementById('main').addEventListener('click', function(){
    // when person clicks clock_in or clock_out, send information to API
    if(event.target.id == 'clock_in') {
      console.log("https://localhost:44390/api/employee/clock_in/"+logged_id);
      ApiAction.getRequest("https://localhost:44390/api/employee/clock_in/"+logged_id);
    }
    else if(event.target.id == 'clock_out') {
      ApiAction.getRequest("https://localhost:44390/api/employee/clock_out/"+logged_id);
    }
    else if(event.target.classList.contains("adminlogin")){
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      console.log('test');
      document.getElementById('invalid').innerHTML = "Invalid Username or Password"
      ApiAction.getRequest("https://localhost:44390/api/employee/login/"+username+"/"+password, auth => {
        console.log(auth);
        if (auth.ssn === password){
          if (auth.admin === true){
          document.getElementById('hidenav').style.display = 'block'
          }
          document.getElementById('nav').style.display = 'flex'
          document.getElementById('mainnav').style.display = 'flex'
          document.getElementById('main').innerHTML = Home(auth);
          document.getElementById('mainnav').innerHTML = `
          <n class="empprofile">Profile
          <input type="hidden" class="getprofile" value="${auth.employeeId}">
          </n>
          <n class="emptimeclock">Time Clock
          <input type="hidden" class="gettimeclock" value="${auth.employeeId}">
          </n>
          <n class="emphours">Current Pay-Period
          <input type="hidden" class="gethours" value="${auth.employeeId}">
          </n>
          <n value="${auth.employeeId}">Past Pay-Period</n>
          <n class="logout">Log Out
          <input type="hidden" class="logout_submit"></n>
          `

          logged_id = auth.employeeId; //after a successful login, save ID of logged in employee
        }    
      })
    }
  })
}

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
    AdminAddEmployee();  // capital-a AdminAddEmployee
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
    if(event.target.classList.contains("admin_edit_employee")){
      const employeeId = event.target.querySelector(".edit_employee_id").value
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
    const admin = document.querySelector('.edit_employee_admin').value;
    
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
      admin: admin
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
function editCancel(){
  document.getElementById('main').addEventListener('click', function(){
    if(event.target.classList.contains('cancel_edit_submit'))
      ApiAction.getRequest("https://localhost:44390/api/employee", employeelist => {
      app.innerHTML = AdminEmployeeIndex(employeelist);
    })
  })
}

//Delete Employee Functions
function adminDeleteEmployee(){
  document.getElementById('main').addEventListener('click', function() {
    if (event.target.classList.contains('admin_delete_employee_submit')){
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
function returnIndex(){
  document.getElementById('main').addEventListener('click', function(){
    if(event.target.classList.contains('return_employee_submit'))

      ApiAction.getRequest("https://localhost:44390/api/employee", employeelist => {
      app.innerHTML = AdminEmployeeIndex(employeelist);
    })
  })
}

//hours based
//Gets all Hours
function getAdminHoursIndex(){
  const hoursindex = document.getElementById('Nav_hours_index');
  hoursindex.addEventListener('click', function(){
    ApiAction.getRequest('https://localhost:44390/api/hours', hourslist => {
      console.log("hourslist.reverse")
      console.log(hourslist.reverse());
      sortAdminViewUserHours(hourslist);
      app.innerHTML = AdminHoursIndex(hourslist);
    })
  })
}

//sortadminviewuserhours
//sort user hours function
function sortAdminViewUserHours(hourslist){
  console.log("just before admin sort function fires");
  const sortedHours = hourslist.sort((a, b) => new Date(b.timeIn) - new Date(a.timeIn));
  //const sortedHours = hours.sort((a, b) => b.timeIn - a.timeOut);
  console.log("sorted admin view hours=");
  console.log(sortedHours);

}

//Admin Add Hours
function getAdminAddHours(){
  document.getElementById('Nav_add_hours').addEventListener('click', function(){
    console.log("admin version")
    AdminAddHours();
  })
}

function adminAddHours(){
  document.getElementById('main').addEventListener('click', function() {
    if (event.target.classList.contains('add_employee_hours_submit')){

      const hoursId = 0;
      const employeeId = document.querySelector('#employee_select').value
      const timeIn = document.querySelector('.add_hours_time_in').value
      console.log(timeIn)
      const timeOut = document.querySelector('.add_hours_time_out').value
      console.log(timeOut)
      const totalHours = converthours(timeIn,timeOut);
      
      console.log(totalHours);
      const approved = document.querySelector(".add_hours_approved").value;
      console.log(approved)

      const data = {
        HoursId: hoursId,
        EmployeeId: employeeId,
        
        TimeIn: timeIn.toISOString(),
        TimeOut: timeOut.toISOString(),
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

function adminApproveHours(){
  document.getElementById('main').addEventListener('click', function() {
  if (event.target.classList.contains('approve_hours_submit')){

  const hoursId = event.target.querySelector('.single_hours_id').value
  const employeeId = event.target.querySelector('.singleemployee_hours_id').value
  const timeIn = event.target.querySelector('.time_in').value
  const timeOut = event.target.querySelector('.time_out').value
  const totalHours = event.target.querySelector('.total_hours').value;
  const data = {

    hoursId: hoursId,
    employeeId: employeeId,
    timeIn: timeIn,
    timeOut: timeOut,
    totalHours: totalHours,
    approved: true
  };

  ApiAction.putRequest('https://localhost:44390/api/hours', data,
  hourslist=> {
    app.innerHTML = AdminHoursIndex(hourslist);
  })
}
})
}

//User Functions Below
//Employee Based Function
//Views logged in Employee Profile from User Nav
function getUserSingleEmployee(){
  document.getElementById('mainnav').addEventListener('click', function() {
    if (event.target.classList.contains('empprofile')){
      const employeeId = event.target.querySelector('.getprofile').value;  
      console.log(employeeId);   
      ApiAction.getRequest('https://localhost:44390/api/employee/' + employeeId, 
        employee=> {
        app.innerHTML = UserSingleEmployee(employee);
        }
      )
    }
  })
}

function getUserEditProfile() {
  document.getElementById('main').addEventListener('click', function(){
    if(event.target.classList.contains("user_single_edit")){
      const employeeId = event.target.querySelector(".employee_id").value
      console.log(employeeId)
      ApiAction.getRequest("https://localhost:44390/api/employee/" + employeeId, employee=> {
        console.log("user version")
        app.innerHTML = UserEditProfile(employee)})
    }
  })
}

function userEditProfile(){
  document.getElementById('main').addEventListener('click', function() {
    if (event.target.classList.contains('user_edit_submit')){
      console.log("i");
      const employeeId = document.querySelector('.edit_employee_id').value;
      const roleId = document.querySelector('.user_roleId').value;
      const firstName = document.querySelector('.edit_employee_first_name').value;
      const lastName = document.querySelector('.edit_employee_last_name').value;
      const address = document.querySelector('.edit_employee_address').value;
      const phoneNumber = document.querySelector('.edit_employee_phone_number').value;
      const ssn = document.querySelector('.user_ssn').value;
      const birthdate = document.querySelector('.edit_employee_birthdate').value;
      const email = document.querySelector('.edit_employee_email').value;
      const admin = document.querySelector('.user_admin_status').value
      
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
        admin: admin
      };
      console.log(data)
    
      ApiAction.putRequest('https://localhost:44390/api/employee', data,
      employee=> {
        ApiAction.getRequest("https://localhost:44390/api/employee/" + employeeId, employee=> {
          app.innerHTML = UserSingleEmployee(employee)
        })
      })
    }
  })
}

//Hours Functions
function getUserHoursIndex() {
    document.getElementById('mainnav').addEventListener('click', function() {
      if (event.target.classList.contains('emphours')){
      const employeeId = event.target.querySelector('.gethours').value;

      console.log(employeeId);   
      ApiAction.getRequest('https://localhost:44390/api/hours/'+employeeId, 
        hours=> {
          console.log("just before call to sortUserHours")
          sortUserHours(hours);
         console.log("hours=")
         console.log(hours)
        app.innerHTML = UserHoursIndex(hours.reverse());
       
      })
}})  
}
//sort user hours function
function sortUserHours(hours){
  console.log("just before sort function fires");
  const sortedHours = hours.sort((a, b) => new Date(a.timeIn) - new Date(b.timeIn));
  //const sortedHours = hours.sort((a, b) => b.timeIn - a.timeOut);
  console.log("sorted hours=");
  console.log(sortedHours);
}

function getEmployeeTimeClock(){
  document.getElementById('mainnav').addEventListener('click', function() {
    if (event.target.classList.contains('emptimeclock')){
      const employeeId = event.target.querySelector('.gettimeclock').value;  
      console.log(employeeId);   
      ApiAction.getRequest('https://localhost:44390/api/employee/' + employeeId, 
        employee=> {
        app.innerHTML = EmployeeTimeClock(employee);
        }
      )
    }
  })
}


//Clock in 
function clockIn(){
  document.getElementById('main').addEventListener('click', function() {
    console.log(event.target.classList);
    //cory don't change the button request from clockin_submit and the button will work.

    if (event.target.classList.contains('clockin_submit')){
      console.log('clockin')
      var d = new Date()
      
      //d.toLocaleTimeString();
      const data = {
        HoursId: 0,
        EmployeeId: logged_id,
        TimeIn: d.toISOString(),  //d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + " " +  d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
        TimeOut: d.toISOString(),  //d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + " " +  d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
        TotalHours: 0,
        Approved: false
      }
      console.log(data);
      ApiAction.postRequest('https://localhost:44390/api/hours', data,
      // what does this do?
      clock => {   

      })
    }
  })
}

//Clock out
function clockOut(){
  document.getElementById('main').addEventListener('click', function() {
    if (event.target.classList.contains('clockout_submit')){
      console.log('clockout')
      var d = new Date()
      const data = {
        HoursId: 0,
        EmployeeId: logged_id,
        //TimeIn: TimeIn, //d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + " " +  d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
        TimeOut: d.toISOString() //.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + " " +  d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        ,
        TotalHours: 0,
        Approved: false
      }
      console.log("clock out data")
      console.log(data)
      ApiAction.putRequest('https://localhost:44390/api/hours/Clockout/'+ logged_id, data,
      clock=> {

      })
    }
  })
}

//View Date Range on Admin Pay Index
function viewByDateRange(){
  document.getElementById('main').addEventListener('click', function() {
    if (event.target.classList.contains('getdaterange')) {
      const date1 = document.querySelector('.range_date1').value;
      const date2 = document.querySelector('.range_date2').value;
      ApiAction.getRequest('https://localhost:44390/api/hours/range/'+date1+"/"+date2, 
      daterange=> {
      app.innerHTML = AdminHoursIndex(daterange);}
      )
    }
  })
}

//search Hours by employee last name
function searchByLastName(){
  document.getElementById('main').addEventListener('click', function() {
    if (event.target.classList.contains('searchbutton')) {
      const search = document.querySelector('.searchln').value;
      ApiAction.getRequest('https://localhost:44390/api/hours/search/'+search,
      results=> {
        app.innerHTML = AdminHoursIndex(results);}
      )
    }
  })
}

function logOut() {
  document.getElementById('mainnav').addEventListener('click', function() {
    if (event.target.classList.contains('logout')){
    app.innerHTML = document.location.reload(true);
    }
})};

