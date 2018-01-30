
function dropElements(arr, func) {
  // Drop them elements.
  let cnt = 0; 
  for(let i = 0 ; i < arr.length ; i++){
  	console.log(func(arr[i]));
  if(func(arr[i])){
  	arr = arr.slice(i);
  	cnt++;
  	break;
  }
}
if(cnt === 0){
	arr=[];
}
  console.log('arr' , arr);
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) 
dropElements([1, 2, 3, 4], function(n) {return n >= 3;})