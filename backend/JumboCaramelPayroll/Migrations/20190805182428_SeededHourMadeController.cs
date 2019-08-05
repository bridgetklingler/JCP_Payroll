using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JumboCaramelPayroll.Migrations
{
    public partial class SeededHourMadeController : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "approved",
                table: "Hours",
                newName: "Approved");

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "Birthdate",
                value: new DateTime(2019, 8, 5, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 2,
                column: "Birthdate",
                value: new DateTime(2019, 8, 5, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 3,
                column: "Birthdate",
                value: new DateTime(2019, 8, 5, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 4,
                column: "Birthdate",
                value: new DateTime(2019, 8, 5, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.InsertData(
                table: "Hours",
                columns: new[] { "HoursId", "Approved", "DateWorked", "EmployeeId", "TimeIn", "TimeOut", "TotalHours" },
                values: new object[] { 1, false, new DateTime(1984, 12, 16, 12, 32, 54, 0, DateTimeKind.Unspecified), 1, new DateTime(1984, 12, 16, 12, 32, 54, 0, DateTimeKind.Unspecified), new DateTime(1984, 12, 16, 22, 32, 54, 0, DateTimeKind.Unspecified), 10 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Hours",
                keyColumn: "HoursId",
                keyValue: 1);

            migrationBuilder.RenameColumn(
                name: "Approved",
                table: "Hours",
                newName: "approved");

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "Birthdate",
                value: new DateTime(2019, 8, 4, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 2,
                column: "Birthdate",
                value: new DateTime(2019, 8, 4, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 3,
                column: "Birthdate",
                value: new DateTime(2019, 8, 4, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 4,
                column: "Birthdate",
                value: new DateTime(2019, 8, 4, 0, 0, 0, 0, DateTimeKind.Local));
        }
    }
}
