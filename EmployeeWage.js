const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empCheck = Math.floor(Math.random() * 10) % 3;
let empWage =0;
switch(empCheck){
    case 1:
        empWage = PART_TIME_HOURS*WAGE_PER_HOUR;
        break;
    case 2:
        empWage = FULL_TIME_HOURS*WAGE_PER_HOUR;
        break;
    default:
        empWage = 0;
        break;
}
console.log('Employee Wage is : '+ empWage);