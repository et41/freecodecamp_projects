
function smallestCommons(arr) {
	arr = [Math.min(...arr) , Math.max(...arr)];
	let arr_new = [];
	let arr_prime = [];
	let arr_full = [];
	//create prime numbers array as arr_prime
	for(let i = 2 ; i <= arr[1] ; i++){
		arr_new.push(i);
	}
	for (let i = 0 ; i < arr_new.length ; i++){
		let divide_cnt = 0;
		for(let j = 0 ; j < arr_new.indexOf(arr_new[i]) ; j++){
			if(arr_new[i] %arr_new[j] == 0 ){
				divide_cnt++;
			}	
		}
		if(divide_cnt == 0){
			arr_prime.push(arr_new[i]);
		}
	}
	//make full array by using min and max values of arr
	for(let i = arr[0] ; i <= arr[1] ; i++){
		arr_full.push(i);
	}
	//find common multiples by dividing given array elements
	//to the prime array elements one by one. Then store dividing prime numbers 
	//into the arr_end. 
	let arr_end=[];
	let i = 0;
	while(i<arr_prime.length ){
		let div_cnt= 0; 
		let loop_cnt = 0;
		arr_full.map(function(x,iter){
			let ind = arr_full.indexOf(x);
			if(x%arr_prime[i] == 0){
			  div_cnt ++;
			 arr_full.splice(arr_full.indexOf(x),1,x/arr_prime[i]);
			}else{
			 arr_full.splice(arr_full.indexOf(x),1,x);
			}
			if(arr_full[ind]%arr_prime[i] == 0){
				loop_cnt++;
			}
			if(div_cnt > 0 && iter==arr_full.length-1){
				arr_end.push(arr_prime[i]);
				}
		});				
		if(loop_cnt > 0){
			i;
		}
		else{
			i++;
		}
	}
	//multiplication of arr_end array elements
	arr = arr_end.reduce(function(a,b) {return a*b});
	console.log(arr);
 	return arr;
}


smallestCommons([1,5]);
smallestCommons([23,18]);