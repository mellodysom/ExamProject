// This program can calculate how much you will get paid after tax cuts if you enter salary, fradrag and tax percent

// Adding functionality to round down to nearest ten
function roundDown(num, precision) {
    precision = Math.pow(10, precision)
    return Math.floor(num * precision) / precision }
// Adding functionality to round up to nearest ten
function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision }
// Constants
const am = 0.08;
const atp = [94.65, 63.1, 31.55, 0];
// This should be obtained from the user
var salary = 29600;
var fradrag = 5043;
var taxPercent = 0.36;
var hoursWorked = 160;
//  The calculations
// Find amount of ATP paid
if (hoursWorked > 117) {
    n = 0; }
else if (hoursWorked > 78) {
    n = 1; }
else if (hoursWorked > 39) {
    n = 2; }
else {n = 3;}

amBidrag = roundDown( (salary - atp[n]) * am, -1);
skattepligtigt = roundDown(salary-atp[n]-amBidrag-fradrag,-1);
let taxPaid = roundUp(skattepligtigt * taxPercent,0);

let paidOut = salary - atp[n] - amBidrag - taxPaid;

console.log(paidOut); 


/* THE FOLLOWING CODE IS NOT WORKING
function test(salary, fradrag, taxPercent, hoursWorked) {
    if (hoursWorked > 117) {
        n = 0; }
    else if (hoursWorked > 78) {
        n = 1; }
    else if (hoursWorked > 39) {
        n = 2; }
    else {n = 3;}
    amBidrag = roundDown( (salary - atp[n]) * am, -1);
skattepligtigt = roundDown(salary-atp[n]-amBidrag-fradrag,-1);
let taxPaid = roundUp(skattepligtigt * taxPercent,0);

var paidOut = salary - atp[n] - amBidrag - taxPaid;
return paidOut;
console.log(paidOut);
}

test(29600, 5043, 0.36, 160)

console.log(paidOut)



// THIS IS NOT WORKING EITHER

// Function to input the data needed for the calculations
var myButton = document.querySelector('button');

function inputData() {
    var salary = prompt('Please enter your monthly salary.');
    var fradrag = prompt('Please enter your monthly fradrag.')
    var taxPercent = prompt('Please enter your tax percent.')
}

myButton.onclick = function() {
    inputData();
}*/