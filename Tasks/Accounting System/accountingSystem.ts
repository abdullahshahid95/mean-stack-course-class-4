class Employee
{
    private name: string; private fullName: string; private fatherName:string;
    private nic: string; private attendence: number;

    setInfo(name: string, fullName: string, fatherName: string, 
            nic: string, attendence: number)
    {
        this.name = name;
        this.fullName = fullName;
        this.fatherName = fatherName;
        this.nic = nic;
        this.attendence = attendence;
    }

    getInfo(): (string | number)[]
    {
        return [this.name, this.fullName, this.fatherName, this.nic, this.attendence];
    }
}

class Salary extends Employee
{
    private fixSalary: number; private advanceSalary: number; private travellingAllowance: number;
    private bonusAllowance: number; private overtimeAllowance; private bonusPerMonth: number; 
    private taxPerMonth: number; private totalSalary: number;

    setSalary(fixSalary: number, advanceSalary: number, travellingAllowance: number, 
                bonusAllowance: number, overtimeAllowance: number, 
                bonusPerMonth: number, taxPerMonth: number)
    {
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
    }

    getSalary(): number[]
    {
        return [this.fixSalary, this.advanceSalary, this.travellingAllowance, this.bonusAllowance, 
                this.overtimeAllowance, this.bonusPerMonth, this.taxPerMonth, this.totalSalary];
    }
}

var employee = new Salary();

employee.setInfo(prompt("Enter employee name"), prompt("Enter full name"),
                    prompt("Enter father name"), prompt("Enter nic number"),
                    parseInt(prompt("Enter attendence")));
    
employee.setSalary(parseFloat(prompt("Enter fix salary")), parseFloat(prompt("Enter advance salary")),
                    parseFloat(prompt("Enter travelling allowance")),
                    parseFloat(prompt("Enter bonus allowance")),
                    parseFloat(prompt("Enter overtime allowance")),
                    parseFloat(prompt("Enter bonus per month")),
                    parseFloat(prompt("Enter tax per month")));

var employeeInfoList: (string | number)[] = employee.getInfo();
var employeeSalaryList: number[] = employee.getSalary();

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