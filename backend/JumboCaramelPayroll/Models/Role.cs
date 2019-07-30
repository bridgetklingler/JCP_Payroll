using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JumboCaramelPayroll.Models
{
    public class Role
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public decimal PayRate { get; set; }
        public int HourRate { get; set; }

        public virtual List<Employee> Employees { get; set; }



    }
}
