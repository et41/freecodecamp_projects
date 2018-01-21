
function sumPrimes(num) {
	let arr = [];
	let arr_prime = []; 
	for(let i = 2 ; i <= num ; i++){
		arr.push(i);
	}
	for (let i = 0 ; i < arr.length ; i++){
		let divide_cnt = 0;
		for(let j = 0 ; j < arr.indexOf(arr[i]) ; j++){
			if(arr[i] % arr[j] == 0 ){
				divide_cnt++;
			}	

		}
		if(divide_cnt == 0){
			arr_prime.push(arr[i]);
		}
	}
	num = arr_prime.reduce((a,b) => a+b,0);
  return num;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
