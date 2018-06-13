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
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setInfo = function () {
        this.name = prompt("Enter name");
        this.fatherName = prompt("Enter father name");
        this.currentClass = parseInt(prompt("Enter current class"));
        this.lastClass = parseInt(prompt("Enter last class"));
        this.lastMarks = parseInt(prompt("Enter last class marks"));
        this.rollNumber = prompt("Enter roll number");
    };
    Student.prototype.getInfo = function () {
        console.log("Name: " + this.name);
        console.log("Father name: " + this.fatherName);
        console.log("Current class: " + this.currentClass);
        console.log("Last class: " + this.lastClass);
        console.log("last class marks: " + this.lastMarks);
        console.log("Roll number: " + this.rollNumber);
    };
    return Student;
}());
var Fees = /** @class */ (function (_super) {
    __extends(Fees, _super);
    function Fees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fees.prototype.setFees = function () {
        this.admissionFee = parseInt(prompt("Enter admission fees"));
        this.monthlyFee = parseInt(prompt("Enter monthly fees"));
        this.extraCurriularFee = parseInt(prompt("Enter extracurricular fees"));
        this.gameFee = parseInt(prompt("Enter game fees"));
    };
    Fees.prototype.getFees = function () {
        console.log("Admission fees: " + this.admissionFee);
        console.log("Monthly fees: " + this.monthlyFee);
        console.log("Extracurricular fees: " + this.extraCurriularFee);
        console.log("Game fees: " + this.gameFee);
    };
    return Fees;
}(Student));
var Marks = /** @class */ (function (_super) {
    __extends(Marks, _super);
    function Marks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Marks.prototype.setMarks = function () {
        this.english = parseInt(prompt("Enter english marks"));
        this.physics = parseInt(prompt("Enter physics marks"));
    };
    Marks.prototype.getMarks = function () {
        console.log("English: " + this.english + " Status: "
            + (this.english >= 50 ? "Pass" : "Fail"));
        console.log("Physics: " + this.physics + " Status: "
            + (this.physics >= 50 ? "Pass" : "Fail"));
    };
    return Marks;
}(Fees));
var student = new Marks();
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
