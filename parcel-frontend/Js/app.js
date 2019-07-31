import EmployeeIndex from "./components/employeeindex"
import GetAddEmployee from "./components/addemployee"
import ApiAction from "./api/api-actions"

pageBuild();

function pageBuild(){
  employeeindex();
  getaddemployee();
  addemployee();
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
  console.log(data);
    ApiAction.postRequest('https://localhost:44390/api/employee', data,
    employeelist=> {
      console.log("i2")
      app.innerHTML = EmployeeIndex(employeelist);
    })
  }
}
  )
}

