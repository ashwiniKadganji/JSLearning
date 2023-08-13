console.log(`--------------------------step 1---------------------`);
let bankSbi = {
    bankName: 'SBI Bank',
    branch : 'Wakad',
    accountNo : 123123,
    ifscCode : 'SBINO123456'
}
console.log(`SBI BANK DETAILS ==> Bank Name: ${bankSbi.bankName}, Branch Name: ${bankSbi.branch}, Account No.: ${bankSbi.accountNo}, IFSC Code: ${bankSbi.ifscCode}`);

console.log(`--------------------------step 2---------------------`);
let bankLocation = {
    street: 'Kaspate vasti, Wakad, Pune',
    city: 'Pune',
    pinCode: 423123 
}
console.log(`BANK LOCATION ==> Street: ${bankLocation.street}, City: ${bankLocation.city}, Pincode: ${bankLocation.pinCode}`);

console.log(`--------------------------step 3---------------------`);
console.log(`-----Clone object using -> Object.assign()------`);

let bankDetails = Object.assign({},bankSbi,bankLocation);
console.table(bankDetails);

console.log(`------Clone object using -> Spread operator----`);
let mergeBankData = {...bankDetails};
console.table(mergeBankData);


console.log(`--------------------------step 4---------------------`);
let rateOfInterest = {
    homeLoanInterest: 6,
    personalLoanInterest: 8,
    duelInterest: 6.6
}
console.log(`RATE OF INTEREST ==> Home Loan Interest: ${rateOfInterest.homeLoanInterest}, Personal Loan Interest: ${rateOfInterest.personalLoanInterest} ,Duel Loan Interest: ${rateOfInterest.duelInterest}`);

console.log(`--------------------------step 5---------------------`);
console.log(`merge the step 1,step 2,step 4 objects into new objects namely -> sbiDetails`);
let sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);

console.log(`--------------------------step 6---------------------`);
console.log(`Traversed this merged object - step 5 using loop`);
let array = [sbiDetails];

for (const elements of array) {
    console.log(elements);
}
