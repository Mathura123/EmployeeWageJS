const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;
const MAX_WORK_HOURS = 160;

function GetWorkHours(empCheck) {
    let workHours = 0;
    switch (empCheck) {
        case 1:
            workHours = PART_TIME_HOURS;
            break;
        case 2:
            workHours = FULL_TIME_HOURS;
            break;
        default:
            workHours = 0;
            break;
    }
    return workHours;
}

function CalEmpWage(hrs) {
    return hrs * WAGE_PER_HOUR;
}

let totalWorkHours = 0;
let dailyWageArr = new Array();
let totalWorkDays =0;
for (; totalWorkDays < WORKING_DAYS && totalWorkHours <= MAX_WORK_HOURS; totalWorkDays++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let workHours = GetWorkHours(empCheck);
    totalWorkHours += workHours;
    dailyWageArr.push(CalEmpWage(workHours));
}
totalWorkHours = Math.min(totalWorkHours, MAX_WORK_HOURS);

let empWage = CalEmpWage(totalWorkHours)
console.log("EmpWage array : " + dailyWageArr.toString());
console.log('Total Working days : '+ totalWorkDays)
console.log('Total Employee wage : ' + empWage);
console.log("Total Work hours : "+ totalWorkHours);