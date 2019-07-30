using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JumboCaramelPayroll.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JumboCaramelPayroll.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private SiteContext db;

        public EmployeeController(SiteContext db)
        {
            this.db = db;
        }

        // GET api/Employees
        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            return db.Employees;
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> GetById(int id)
        {
            return db.Employees.Single(a => a.EmployeeId == id);
        }


        // POST api/Employee
        [HttpPost]
        public ActionResult<IEnumerable<Employee>> Post([FromBody] Employee employee)
        {
            db.Employees.Add(employee);
            db.SaveChanges();
            return db.Employees.ToList();
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<IEnumerable<Employee>> Put([FromBody] Employee employee)
        {
            db.Employees.Update(employee);
            db.SaveChanges();
            return db.Employees.ToList();
        }


        [HttpDelete]
        public ActionResult<IEnumerable<Employee>> Delete(Employee employee)
        {
            db.Employees.Remove(employee);
            db.SaveChanges();
            return db.Employees.ToList();
        }

    }
}