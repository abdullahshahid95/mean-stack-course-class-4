var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setInfo = function (name, fullName, fatherName, nic, attendence) {
        this.name = name;
        this.fullName = fullName;
        this.fatherName = fatherName;
        this.nic = nic;
        this.attendence = attendence;
    };
    Employee.prototype.getInfo = function () {
        return [this.name, this.fullName, this.fatherName, this.nic, this.attendence];
    };
    return Employee;
}());
var Salary = /** @class */ (function (_super) {
    __extends(Salary, _super);
    function Salary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Salary.prototype.setSalary = function (fixSalary, advanceSalary, travellingAllowance, bonusAllowance, overtimeAllowance, bonusPerMonth, taxPerMonth) {
        this.fixSalary = fixSalary;
        this.advanceSalary = advanceSalary;
        this.travellingAllowance = travellingAllowance;
        this.bonusAllowance = bonusAllowance;
        this.overtimeAllowance = overtimeAllowance;
        this.bonusPerMonth = bonusPerMonth;
        this.taxPerMonth = taxPerMonth;
        this.totalSalary = (fixSalary + travellingAllowance + bonusAllowance + overtimeAllowance
            + bonusPerMonth)
            - (advanceSalary + taxPerMonth);
    };
    Salary.prototype.getSalary = function () {
        return [this.fixSalary, this.advanceSalary, this.travellingAllowance, this.bonusAllowance,
            this.overtimeAllowance, this.bonusPerMonth, this.taxPerMonth, this.totalSalary];
    };
    return Salary;
}(Employee));
var employee = new Salary();
employee.setInfo(prompt("Enter employee name"), prompt("Enter full name"), prompt("Enter father name"), prompt("Enter nic number"), parseInt(prompt("Enter attendence")));
employee.setSalary(parseFloat(prompt("Enter fix salary")), parseFloat(prompt("Enter advance salary")), parseFloat(prompt("Enter travelling allowance")), parseFloat(prompt("Enter bonus allowance")), parseFloat(prompt("Enter overtime allowance")), parseFloat(prompt("Enter bonus per month")), parseFloat(prompt("Enter tax per month")));
var employeeInfoList = employee.getInfo();
var employeeSalaryList = employee.getSalary();
console.log("***Employee Information***");
console.log("Name: " + employeeInfoList[0]);
console.log("Ful name: " + employeeInfoList[1]);
console.log("Father name: " + employeeInfoList[2]);
console.log("NIC number: " + employeeInfoList[3]);
console.log("Attendence: " + employeeInfoList[4]);
console.log("Fixed salary: " + employeeSalaryList[0]);
console.log("Advance salary: " + employeeSalaryList[1]);
console.log("Travelling allowance: " + employeeSalaryList[2]);
console.log("Bonus allowance: " + employeeSalaryList[3]);
console.log("Overtime Allowance: " + employeeSalaryList[4]);
console.log("Bonus per month: " + employeeSalaryList[5]);
console.log("Tax per month: " + employeeSalaryList[6]);
console.log("\nTotal Salary: " + employeeSalaryList[7]);
