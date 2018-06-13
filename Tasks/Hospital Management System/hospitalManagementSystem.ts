class Patient
{
    name: string; fatherHusbandName: string;
    date: string; timeGenerated;
    nicNumber: string; ward: string;
    illness: string;
    doctor: string;
    barCode: number;

    setInfo = (name: string, fatherHusbandName: string, date: string, timeGenerated, 
                                nicNumber: string, ward: string, illness: string,
                                doctor: string, barCode: number) => 
    {
        this.name = name;
        this.fatherHusbandName = fatherHusbandName;
        this.date = date;
        this.timeGenerated = timeGenerated;
        this.nicNumber = nicNumber;
        this.ward = ward;
        this.illness = illness;
        this.doctor = doctor;
        this.barCode = barCode;
    }

    getInfo = (): string[] =>
    {
        return [this.name, this.fatherHusbandName, this.date, this.timeGenerated, this.nicNumber,
                this.ward, this.illness, this.doctor, this.barCode];
    }
}

class Appointment extends Patient
{
    time: string; fees: number;
    feeOption: string; recieved: string;

    setAppointment = (time: string, fees: number, feeOption: string, recieved) =>
    {
        this.time = time;
        this.fees = fees;
        this.feeOption = feeOption;
        this.recieved = recieved;
    }

    getAppointment = () =>
    {
        return [this.time, this.fees, this.feeOption, this.recieved];
    }
}

var appointment = new Appointment();
var today: Date = new Date();
var date: string = today.getDate().toString() + " - " + (today.getMonth() + 1).toString() 
                                            + " - " + today.getFullYear().toString();

var timeGenerated: string = today.getHours().toString() + " : " + today.getMinutes().toString();

var patientName: string = prompt("Enter name");
var fatherHusbandName: string = prompt("Enter father/husband name");
var nic: string = prompt("Enter nic number");

var illnessList = ["Fever", "Flu", "Bp"];
var doctorList = ["Doctor Akram", "Doctor Adil", "Doctor Ahsen"];

var ward: number;
ward = parseInt(prompt("Select ward"
                    + "\n1. General"
                    + "\n2. Emergency"));

var illness: number;
illness = parseInt(prompt("Select illness"
                    + "\n1. Fever"
                    + "\n2. Flu"
                    + "\n3. Bp"));


var doctor: number;
doctor = parseInt(prompt("Select doctor"
                    + "\n1. Doctor Akram"
                    + "\n2. Doctor Adil"
                    + "\n3. Doctor Ahsen"));

var barCode = Math.floor(Math.random() * (999999 - 111111 + 1) + 111111);

appointment.setInfo(patientName, fatherHusbandName, 
    date, timeGenerated, nic, (ward == 1 ? "General": "Emergency"), 
    illnessList[illness - 1], doctorList[doctor - 1], barCode);

var paymentOptionsList = ["Online", "Card", "Cash"];

var appointmentTime: string = prompt("Enter appointment time");
var appointmentFees: number = parseInt(prompt("Enter fees"));
var paymentOption: number = parseInt(prompt("Select payment option"
                                + "\n1. Online"
                                + "\n2. Card"
                                + "\n3. Cash"));
var recieved: number = parseInt(prompt("Payment recieved?"
                                + "\n1. Yes"
                                + "\n2. No"));

appointment.setAppointment(appointmentTime, appointmentFees, 
                    paymentOptionsList[paymentOption - 1], (recieved == 1 ? "Yes": "No"));

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
