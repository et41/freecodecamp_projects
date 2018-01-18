
function sumAll(arr) {
  let arr_end=[];
  let max_arr = Math.max(arr[0],arr[1]);
  let min_arr = Math.min(arr[0],arr[1]);
  for (let i = 0 ; max_arr>=min_arr ; i++) {
  	arr_end.push(max_arr);
  	max_arr = max_arr - 1 ;
  	//arr_end.push(max_arr);
  }
  const reducer =  (accumulator, currentValue) => accumulator + currentValue;
  return arr_end.reduce(reducer);

}

console.log(sumAll([1, 4]));
/*Math.max()
Math.min()
Array.prototype.reduce()*/