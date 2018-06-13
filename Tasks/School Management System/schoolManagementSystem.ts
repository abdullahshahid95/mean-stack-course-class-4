class Student
{
    private name: string; private fatherName: string; private rollNumber: string;
    private currentClass: number; private lastClass: number; private lastMarks: number;

    setInfo()
    {
        this.name = prompt("Enter name");
        this.fatherName = prompt("Enter father name");
        this.currentClass = parseInt(prompt("Enter current class"));
        this.lastClass = parseInt(prompt("Enter last class"));
        this.lastMarks = parseInt(prompt("Enter last class marks"));
        this.rollNumber = prompt("Enter roll number");
    }

    getInfo()
    {
        console.log("Name: " + this.name);
        console.log("Father name: " + this.fatherName);
        console.log("Current class: " + this.currentClass);
        console.log("Last class: " + this.lastClass);
        console.log("last class marks: " + this.lastMarks);
        console.log("Roll number: " + this.rollNumber);
    }
}

class Fees extends Student
{
    private admissionFee: number; private monthlyFee: number;
    private extraCurriularFee: number; private gameFee: number;

    setFees()
    {
        this.admissionFee = parseInt(prompt("Enter admission fees"));
        this.monthlyFee = parseInt(prompt("Enter monthly fees"));
        this.extraCurriularFee = parseInt(prompt("Enter extracurricular fees"));
        this.gameFee = parseInt(prompt("Enter game fees"));
    }

    getFees()
    {
        console.log("Admission fees: " + this.admissionFee);
        console.log("Monthly fees: " + this.monthlyFee);
        console.log("Extracurricular fees: " + this.extraCurriularFee);
        console.log("Game fees: " + this.gameFee);
    }

}

class Marks extends Fees
{
    private english: number; private physics: number;

    setMarks()
    {
        this.english = parseInt(prompt("Enter english marks"));
        this.physics = parseInt(prompt("Enter physics marks"));
    }

    getMarks()
    {
        console.log("English: " + this.english + " Status: " 
                                + (this.english >= 50? "Pass": "Fail"));
        console.log("Physics: " + this.physics + " Status: " 
                                + (this.physics >= 50? "Pass": "Fail"));
    }
}

var student: Marks = new Marks();

student.setInfo();
student.setFees();
student.setMarks();

alert("Open console.");

console.log("***Student Information***\n");
student.getInfo();

console.log("\n");
student.getFees();

console.log("\n");
student.getMarks();