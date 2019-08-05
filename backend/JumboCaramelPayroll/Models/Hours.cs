using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JumboCaramelPayroll.Models
{
    public class Hours
    {
        public int HoursId { get; set; }
        public DateTime DateWorked { get; set; }
        public DateTime TimeIn { get; set; }
        public DateTime TimeOut { get; set; }
        public int TotalHours { get; set; }
        public bool Approved { get; set; }

        public virtual int EmployeeId { get; set; }
    }
}
