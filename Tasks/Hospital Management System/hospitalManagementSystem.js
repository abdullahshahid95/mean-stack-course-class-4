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
var Patient = /** @class */ (function () {
    function Patient() {
        var _this = this;
        this.setInfo = function (name, fatherHusbandName, date, timeGenerated, nicNumber, ward, illness, doctor, barCode) {
            _this.name = name;
            _this.fatherHusbandName = fatherHusbandName;
            _this.date = date;
            _this.timeGenerated = timeGenerated;
            _this.nicNumber = nicNumber;
            _this.ward = ward;
            _this.illness = illness;
            _this.doctor = doctor;
            _this.barCode = barCode;
        };
        this.getInfo = function () {
            return [_this.name, _this.fatherHusbandName, _this.date, _this.timeGenerated, _this.nicNumber,
                _this.ward, _this.illness, _this.doctor, _this.barCode];
        };
    }
    return Patient;
}());
var Appointment = /** @class */ (function (_super) {
    __extends(Appointment, _super);
    function Appointment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setAppointment = function (time, fees, feeOption, recieved) {
            _this.time = time;
            _this.fees = fees;
            _this.feeOption = feeOption;
            _this.recieved = recieved;
        };
        _this.getAppointment = function () {
            return [_this.time, _this.fees, _this.feeOption, _this.recieved];
        };
        return _this;
    }
    return Appointment;
}(Patient));
var appointment = new Appointment();
var today = new Date();
var date = today.getDate().toString() + " - " + (today.getMonth() + 1).toString()
    + " - " + today.getFullYear().toString();
var timeGenerated = today.getHours().toString() + " : " + today.getMinutes().toString();
var patientName = prompt("Enter name");
var fatherHusbandName = prompt("Enter father/husband name");
var nic = prompt("Enter nic number");
var illnessList = ["Fever", "Flu", "Bp"];
var doctorList = ["Doctor Akram", "Doctor Adil", "Doctor Ahsen"];
var ward;
ward = parseInt(prompt("Select ward"
    + "\n1. General"
    + "\n2. Emergency"));
var illness;
illness = parseInt(prompt("Select illness"
    + "\n1. Fever"
    + "\n2. Flu"
    + "\n3. Bp"));
var doctor;
doctor = parseInt(prompt("Select doctor"
    + "\n1. Doctor Akram"
    + "\n2. Doctor Adil"
    + "\n3. Doctor Ahsen"));
var barCode = Math.floor(Math.random() * (999999 - 111111 + 1) + 111111);
appointment.setInfo(patientName, fatherHusbandName, date, timeGenerated, nic, (ward == 1 ? "General" : "Emergency"), illnessList[illness - 1], doctorList[doctor - 1], barCode);
var paymentOptionsList = ["Online", "Card", "Cash"];
var appointmentTime = prompt("Enter appointment time");
var appointmentFees = parseInt(prompt("Enter fees"));
var paymentOption = parseInt(prompt("Select payment option"
    + "\n1. Online"
    + "\n2. Card"
    + "\n3. Cash"));
var recieved = parseInt(prompt("Payment recieved?"
    + "\n1. Yes"
    + "\n2. No"));
appointment.setAppointment(appointmentTime, appointmentFees, paymentOptionsList[paymentOption - 1], (recieved == 1 ? "Yes" : "No"));
var patient = appointment.getInfo();
var patientAppointment = appointment.getAppointment();
console.log("***Patient Information***");
console.log("Name: " + patient[0]);
console.log("Father/Husband name: " + patient[1]);
console.log("Nic number: " + patient[4]);
console.log("Illness: " + patient[6]);
console.log("Ward: " + patient[5]);
console.log("Doctor: " + patient[7]);
console.log("\nAppointment time: " + patientAppointment[0]);
console.log("Fees: " + patientAppointment[1]);
console.log("Payment option: " + patientAppointment[2]);
console.log("Recieved: " + patientAppointment[3]);
console.log("\nDate: " + patient[2]);
console.log("Time generated: " + patient[3]);
console.log("Bar code: " + patient[8]);
