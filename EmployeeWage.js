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

function GetTotalWorkingHours() {
    let workHours = 0;
    for (let day = 0; day < WORKING_DAYS && workHours <= MAX_WORK_HOURS; day++) {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        workHours += GetWorkHours(empCheck);
    }
    workHours = Math.min(workHours, MAX_WORK_HOURS);
    return workHours;
}

let totalWorkingHours = GetTotalWorkingHours();
let empWage = totalWorkingHours * WAGE_PER_HOUR;
console.log('Employee wage is ' + empWage + ' for total working hours ' + totalWorkingHours + ' hrs');