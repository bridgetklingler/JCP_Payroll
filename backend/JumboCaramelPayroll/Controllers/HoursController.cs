using JumboCaramelPayroll.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JumboCaramelPayroll.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoursController : ControllerBase
    {
        private SiteContext db;

        public HoursController(SiteContext db)
        {
            this.db = db;
        }

        // GET api/Hours
        [HttpGet]
        public ActionResult<IEnumerable<Hours>> Get()
        {
            return db.Hours;
        }

        [HttpGet("{id}")]
        public IEnumerable<Hours> GetByEmployeeId(int id)
        {
            return db.Hours.Where(a => a.EmployeeId == id);
        }

        //Get payment history by date range
        [HttpGet("range/{date1}/{date2}")]
        public IEnumerable<Hours> GetPayRange(DateTime date1, DateTime date2)
        { 
            return db.Hours.Where(a => a.TimeIn > date1 && a.TimeIn < date2);
        }

        //Search for hours log by Last Name
        [HttpGet("search/{lName}")]
        public IEnumerable<Hours> SearchByEmployeeName(string lName)
        {
            Employee foundEmployee = db.Employees.First(a => a.LastName == lName);
            List<Hours> searchHours = new List<Hours>();
            searchHours = db.Hours.Where(h => h.EmployeeId == foundEmployee.EmployeeId).ToList();
            return searchHours;;
            
        }

        // POST api/Hours
        [HttpPost]
        public ActionResult<IEnumerable<Hours>> Post([FromBody] Hours hours)
        {
            db.Hours.Add(hours);
            db.SaveChanges();
            return db.Hours.ToList();
        }

        // CLOCKIN api/Hours/Clockin
        [HttpPost("Clockin")]
        public ActionResult<IEnumerable<Hours>> ClockIn([FromBody] Hours hours)
        {
            db.Hours.Add(hours);
            db.SaveChanges();
            return db.Hours.ToList();
        }

        // CLOCKOUT api/hours/Clockout/id
        [HttpPut("Clockout/{id}")]
        public ActionResult<Hours> Clockout([FromBody] Hours hours, int id)
        {
            Hours clockin = db.Hours.Last(c => c.EmployeeId == id);
            clockin.TimeOut = hours.TimeOut; 
            db.Hours.Update(clockin);
            db.SaveChanges();
            return clockin;
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<IEnumerable<Hours>> Put([FromBody] Hours hours)
        {
            db.Hours.Update(hours);
            db.SaveChanges();
            return db.Hours.ToList();
        }


        [HttpDelete]
        public ActionResult<IEnumerable<Hours>> Delete(Hours hours)
        {
           
            db.Hours.Remove(hours);
            db.SaveChanges();
            return db.Hours.ToList();
        }
    }
}
