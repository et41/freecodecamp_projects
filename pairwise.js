function pairwise(arr, arg) {
	function contain(arr,item){
		let item_stringify = JSON.stringify(item);
		let check =arr.some(function(a){
			return JSON.stringify(a) === item_stringify;

		});
		return check;
	}
	let sum_total = [];
	let sum_arr = [];
	let  sum = 0;
	arr_copy = arr.slice(0);
	for(let j  = 0 ; j < arr.length ; j++){
		val = arr[j];
		let cnt = 0;
		for(let i = j+1 ; i < arr.length ; i++){
			if(val+arr[i] === arg && !contain(sum_arr,[i,j]) &&  cnt===0 ){
				cnt++;
				arr.splice(j,1,' ');
				arr.splice(i,1,' ');
				sum = sum +i +j;
				sum_arr.push([j,i]);
			}

		}

	}
	arg = sum;
  	return arg;
}

//pairwise([1,4,2,3,0,5], 7);
//pairwise([1, 3, 2, 4], 4);
//pairwise([1, 1, 1], 2); 
pairwise([0, 0, 0, 0, 1, 1], 1);