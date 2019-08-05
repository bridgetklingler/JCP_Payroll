using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JumboCaramelPayroll.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string SSN { get; set; }
        public DateTime Birthdate { get; set; }
        public string Email { get; set; }

        public virtual int RoleId { get; set; }

        public virtual List<Hours> Hours { get; set; }
    }
}
