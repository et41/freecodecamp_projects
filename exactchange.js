function checkCashRegister(price, cash, cid) {

  // Here is your change, ma'am.
  var change;

  let values  =  [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10],
  ["QUARTER", 0.25], ["ONE", 1.00], ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]] ;

  let dif = cash - price ;

  let sum = 0;
  for(let i = 0; i < cid.length; i++){
	cid[i].map(function(a){
  	if(typeof(a) == "number"){
 		sum = sum +a;
 	}
  });
  }

  if(sum === dif ){
  	return "Closed";
  	  }

  let rem = [];
  for(let  i = values.length-1 ; i >= 0 ; i--){
  	let val = values[i][1].toFixed(2);
  	let div = Math.floor((dif/val).toFixed(2)) ;
  	if(div > 0 && div*val <= cid[i][1]){
  		rem.push([values[i][0],Number((div*val).toFixed(2))]); 
  		dif = dif - Math.floor(dif/val)*val;
  	}else if(Math.floor(dif/val) > 0 &&   Math.floor(dif/val)*val > cid[i][1]){
  		rem.push([values[i][0],Number(val*(cid[i][1]/val).toFixed(2))]); 
  		dif = dif - val*(cid[i][1]/val); 
  	}
  }
  if(dif > 0.01){
  	return "Insufficient Funds";
  }
  change = rem ;
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
 ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], 
	["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
 ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
 //should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], 
	["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));