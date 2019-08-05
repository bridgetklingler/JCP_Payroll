import EmployeeIndex from "./components/employeeindex"
import GetAddEmployee from "./components/addemployee"
import ApiAction from "./api/api-actions"
import GetEditEmployee from "./components/editemployee"
import SingleEmployee from "./components/singleemployee"





pageBuild();

function pageBuild(){

  employeeindex();
  getaddemployee();
  addemployee();
  geteditemployee();
  editemployee();
  deleteEmployee()
  singleEmployee()
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


//Gets the Add Employee Page
function getaddemployee() {
  document.getElementById('Nav_add_employee').addEventListener('click', function(){
    app.innerHTML = GetAddEmployee();
  })
}

function geteditemployee() {
  document.getElementById('main').addEventListener('click', function(){
      if(event.target.classList.contains("edit_employee")){
        const employeeId = event.target.querySelector(".employee_id").value
    console.log(employeeId)
        ApiAction.getRequest("https://localhost:44390/api/employee/" + employeeId,
        employee => {app.innerHTML= GetEditEmployee(employee)})
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
  const roleId = 1;
  const firstName = document.querySelector('.add_employee_first_name').value;
  const lastName = document.querySelector('.add_employee_last_name').value;
  const address = document.querySelector('.add_employee_address').value;
  const phoneNumber = document.querySelector('.add_employee_phone_number').value;
  const ssn = document.querySelector('.add_employee_ssn').value;
  const birthdate = document.querySelector('.add_employee_birthdate').value;
  const email = document.querySelector('.add_employee_email').value;
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
  
    ApiAction.postRequest('https://localhost:44390/api/employee', data,
    employeelist=> {
      console.log("i2")
      app.innerHTML = EmployeeIndex(employeelist);
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
    const roleId = document.querySelector('.edit_employee_role').value;
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
