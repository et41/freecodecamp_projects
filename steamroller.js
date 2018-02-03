
function steamrollArray(arr) {
  // I'm a steamroller, baby
  let arr_new = [];
  for(let i = 0; i<arr.length ; i++){
  	j = 0;
  	 if(arr[i] == 0){
  	 	arr.splice(i,1);
  	 }
  	while(Array.isArray(arr[i]) && arr[i].length>0){
  		if(arr[i].length>1){
  		    arr.splice(i,2,arr[i][j],arr[i][j+1]);
  		}else{
  			j=0;
  			arr.splice(i,1,arr[i][j]);
  		  	}
  		j++;
  	}
  }

  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]) ;
steamrollArray([1, [], [3, [[4]]]]) ;
steamrollArray([1, {}, [3, [[4]]]]) ;