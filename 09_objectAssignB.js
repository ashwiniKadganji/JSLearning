let sbiBank = {
     bankName : 'SBI BANK',
     location : 'PUNE',
     accountNo : 123456,
     ifsc : 'sbino12345',
     interestRate : 5.3,

     showDetails : function() {
       console.log(`SBI Details : ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}, ${this.interestRate}`);
     }
}

let axisBank = {
    bankName : 'AXIS BANK',
    location : 'WAKAD',
    accountNo : 127856,
    ifsc : 'axino13445',
    interestRate : 5.5 ,

    showDetails : function() {
        console.log(`AXIS Details : ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}, ${this.interestRate}`);
      }
}

let hdfcBank = {
    bankName : 'HDFC BANK',
    location : 'NASHIK',
    accountNo : 123486,
    ifsc : 'hdfcno12345',
    interestRate : 5,

    showDetails : function() {
        console.log(`HDFC Details : ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}, ${this.interestRate}`);
      }
}

let yesBank ={
    bankName : 'YES BANK',
    location : 'NAGPUR',
    accountNo : 111456,
    ifsc : 'yesno12345',
    interestRate : 5.8,
    
    showDetails : function() {
        console.log(`YES Details : ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}, ${this.interestRate}`);
      }
}
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();