using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JumboCaramelPayroll.Migrations
{
    public partial class firstmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    RoleId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleName = table.Column<string>(nullable: true),
                    PayRate = table.Column<decimal>(nullable: false),
                    HourRate = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.RoleId);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    EmployeeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    SSN = table.Column<string>(nullable: true),
                    Birthdate = table.Column<DateTime>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    RoleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.EmployeeId);
                    table.ForeignKey(
                        name: "FK_Employees_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "RoleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "RoleId", "HourRate", "PayRate", "RoleName" },
                values: new object[] { 1, 12, 800m, "Camera Operator" });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "RoleId", "HourRate", "PayRate", "RoleName" },
                values: new object[] { 2, 12, 500m, "First Assistant Camera" });

            migrationBuilder.InsertData(
                table: "Employees",
                columns: new[] { "EmployeeId", "Address", "Birthdate", "Email", "FirstName", "LastName", "PhoneNumber", "RoleId", "SSN" },
                values: new object[,]
                {
                    { 1, "123 Front street", new DateTime(2019, 7, 30, 0, 0, 0, 0, DateTimeKind.Local), "Jon.Smith@gmail.com", "Jon", "Smith", "216-867-5309", 1, "200-300-5000" },
                    { 4, "3346 W. 4th", new DateTime(2019, 7, 30, 0, 0, 0, 0, DateTimeKind.Local), "Jen.Morgan@hotmail.com", "Jen", "Morgan", "440-551-5309", 1, "001-003-5000" },
                    { 2, "666 Mockingbird Lane", new DateTime(2019, 7, 30, 0, 0, 0, 0, DateTimeKind.Local), "Joe.Carter@gmail.com", "Joe", "Carter", "555-555-555", 2, "200-310-5690" },
                    { 3, "578 Elm Street", new DateTime(2019, 7, 30, 0, 0, 0, 0, DateTimeKind.Local), "Fred.Johnson@yaho.com", "Fred", "Johnson", "216-210-5310", 2, "100-600-4000" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_RoleId",
                table: "Employees",
                column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}
