
function findElement(arr, func) {
	let num = undefined;
  	for(let i = 0 ; i < arr.length ; i++){
  		if(func(arr[i])){
  		num = arr[i];
  		break;
  		}
  	}
  return num;
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
