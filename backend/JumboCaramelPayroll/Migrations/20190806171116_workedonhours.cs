using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JumboCaramelPayroll.Migrations
{
    public partial class workedonhours : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateWorked",
                table: "Hours");

            migrationBuilder.AlterColumn<decimal>(
                name: "TotalHours",
                table: "Hours",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "Birthdate",
                value: new DateTime(2019, 8, 6, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 2,
                column: "Birthdate",
                value: new DateTime(2019, 8, 6, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 3,
                column: "Birthdate",
                value: new DateTime(2019, 8, 6, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 4,
                column: "Birthdate",
                value: new DateTime(2019, 8, 6, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Hours",
                keyColumn: "HoursId",
                keyValue: 1,
                column: "TotalHours",
                value: 10m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "TotalHours",
                table: "Hours",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateWorked",
                table: "Hours",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

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

            migrationBuilder.UpdateData(
                table: "Hours",
                keyColumn: "HoursId",
                keyValue: 1,
                columns: new[] { "DateWorked", "TotalHours" },
                values: new object[] { new DateTime(1984, 12, 16, 12, 32, 54, 0, DateTimeKind.Unspecified), 10 });
        }
    }
}
