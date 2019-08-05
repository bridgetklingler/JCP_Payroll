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
        public ActionResult<Hours> GetById(int id)
        {
            return db.Hours.Single(a => a.HoursId == id);
        }


        // POST api/Hours
        [HttpPost]
        public ActionResult<IEnumerable<Hours>> Post([FromBody] Hours hours)
        {
            db.Hours.Add(hours);
            db.SaveChanges();
            return db.Hours.ToList();
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
