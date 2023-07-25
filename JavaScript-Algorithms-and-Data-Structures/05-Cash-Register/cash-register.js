function checkCashRegister(price, cash, cid) {
    let register = [].concat(cid).reverse().map(e => [e[0], e[1]*100]);
    let status;
    let change = [];
    let USD = {
      PENNY: 1,
      NICKEL: 5,
      DIME: 10,
      QUARTER: 25,
      ONE: 100,
      FIVE: 500,
      TEN: 1000,
      TWENTY: 2000,
      "ONE HUNDRED": 10000
    }
    let changeNeeded = cash*100 - price*100;
    let currentChange = 0;
    let currentRegister = register.reduce((e,s) => e + s[1], 0);
    let transaction;
  
    for (let denom = 0; denom < register.length; denom++) {
      let currentDenom = 0;
      while (true) {
  
        if (0 < register[denom][1] && USD[register[denom][0]] <= changeNeeded - currentChange ) {
            register[denom][1] -= USD[register[denom][0]];
            currentChange += USD[register[denom][0]];
            currentDenom += USD[register[denom][0]];
        }else{
          break;
        }
      }
      if( currentDenom > 0){
        //Convert it back to 
        change.push([register[denom][0], currentDenom/100])
      }
        
      if( changeNeeded === currentChange) {
        status = "OPEN"
        if (currentRegister === changeNeeded) {
          status = "CLOSED"
          change = [].concat(cid);
        }
        break;
      }
  
      if( denom === register.length -1 && changeNeeded !== currentChange) {
        status = "INSUFFICIENT_FUNDS";
        change = [];
        break;
      }
      
    }
  
    transaction = {status: status, change: change};
    console.log(transaction);
    return transaction;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);