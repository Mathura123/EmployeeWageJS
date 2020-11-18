const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

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
function GetEmpWage(empHours){
    return empHours*WAGE_PER_HOUR;
}

let empCheck = Math.floor(Math.random() * 10) % 3;
let empWage = GetEmpWage(GetWorkHours(empCheck));
console.log('Employee Wage is : ' + empWage);