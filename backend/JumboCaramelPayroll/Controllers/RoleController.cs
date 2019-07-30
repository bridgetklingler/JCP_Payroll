using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public ActionResult<IEnumerable<Role>> Post([FromBody] Role artist)
        {
            db.Roles.Add(artist);
            db.SaveChanges();
            return db.Roles.ToList();
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<IEnumerable<Role>> Put([FromBody] Role artist)
        {
            db.Roles.Update(artist);
            db.SaveChanges();
            return db.Roles.ToList();
        }


        [HttpDelete]
        public ActionResult<IEnumerable<Role>> Delete(Role artist)
        {
            db.Roles.Remove(artist);
            db.SaveChanges();
            return db.Roles.ToList();
        }

    }
}