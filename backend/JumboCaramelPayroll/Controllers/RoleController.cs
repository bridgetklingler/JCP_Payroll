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
    public class RoleController : ControllerBase
    {
        private SiteContext db;

        public RoleController(SiteContext db)
        {
            this.db = db;
        }

        // GET api/Roles
        [HttpGet]
        public ActionResult<IEnumerable<Role>> Get()
        {
            return db.Roles;
        }

        [HttpGet("{id}")]
        public ActionResult<Role> GetById(int id)
        {
            return db.Roles.Single(a => a.RoleId == id);
        }


        // POST api/Role
        [HttpPost]
        public ActionResult<IEnumerable<Role>> Post([FromBody] Role role)
        {
            db.Roles.Add(role);
            db.SaveChanges();
            return db.Roles.ToList();
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<IEnumerable<Role>> Put([FromBody] Role role)
        {
            db.Roles.Update(role);
            db.SaveChanges();
            return db.Roles.ToList();
        }


        [HttpDelete]
        public ActionResult<IEnumerable<Role>> Delete(Role role)
        {
            db.Roles.Remove(role);
            db.SaveChanges();
            return db.Roles.ToList();
        }

    }
}