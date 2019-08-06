using JumboCaramelPayroll.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JumboCaramelPayroll
{
    public class SiteContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Hours> Hours { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=JumboCaramelPayroll;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().HasData(
                new Employee()
                {
                    EmployeeId = 1,
                    FirstName = "Jon",
                    LastName = "Smith",
                    Address = "123 Front street",
                    PhoneNumber = "216-867-5309",
                    SSN = "200-300-5000",
                    Birthdate = DateTime.Today,
                    Email = "Jon.Smith@gmail.com",
                    RoleId = 1


                },
                new Employee()
                {
                    EmployeeId = 2,
                    FirstName = "Joe",
                    LastName = "Carter",
                    Address = "666 Mockingbird Lane",
                    PhoneNumber = "555-555-555",
                    SSN = "200-310-5690",
                    Birthdate = DateTime.Today,
                    Email = "Joe.Carter@gmail.com",
                    RoleId = 2


                },

                new Employee()
                {
                    EmployeeId = 3,
                    FirstName = "Fred",
                    LastName = "Johnson",
                    Address = "578 Elm Street",
                    PhoneNumber = "216-210-5310",
                    SSN = "100-600-4000",
                    Birthdate = DateTime.Today,
                    Email = "Fred.Johnson@yaho.com",
                    RoleId = 2


                },

                new Employee()
                {
                    EmployeeId = 4,
                    FirstName = "Jen",
                    LastName = "Morgan",
                    Address = "3346 W. 4th",
                    PhoneNumber = "440-551-5309",
                    SSN = "001-003-5000",
                    Birthdate = DateTime.Today,
                    Email = "Jen.Morgan@hotmail.com",
                    RoleId = 1


                }
                );

            modelBuilder.Entity<Role>().HasData(
                new Role()
                {
                    RoleId = 1,
                    RoleName = "Camera Operator",
                    PayRate = 800,
                    HourRate = 12,

                },

                new Role()
                {
                    RoleId = 2,
                    RoleName = "First Assistant Camera",
                    PayRate = 500,
                    HourRate = 12,

                }
                );
            modelBuilder.Entity<Hours>().HasData(
                new Hours()
                {
                    HoursId = 1,
                    //DateWorked = new DateTime(1984, 12, 16, 12, 32, 54, DateTimeKind.Unspecified),
                    TimeIn = new DateTime(1984, 12, 16, 12, 32, 54, DateTimeKind.Unspecified),
                    TimeOut = new DateTime(1984, 12, 16, 22, 32, 54, DateTimeKind.Unspecified),
                    TotalHours = 10,
                    Approved = false,
                    EmployeeId = 1
                }

                );

        }
    }
}