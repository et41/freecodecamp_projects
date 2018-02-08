function sym(args) {
	let argumentsArray_fix = [];
	let argumentsArray = [].slice.apply(arguments);
	let arr_end = [];
	//clean repeating elements in arguments array
	for(let i = 0 ; i <argumentsArray.length ; i++){
	argumentsArray_fix.push([]);
	argumentsArray[i].filter(function(el){
		if(!argumentsArray_fix[i].includes(el)){
			argumentsArray_fix[i].push(el);
		};
	});
	}
	argumentsArray = argumentsArray_fix;
	//symmetric difference
	let i = 0 ; 
	while( argumentsArray.length !== 1 ){
	    let arr_main = [];
		for(let j = 0 ; j < argumentsArray[i].length ; j++){
			let cnt = 0;
			for(let k = 0 ; k < argumentsArray[i+1].length ; k++){	
				if(argumentsArray[i][j] !== argumentsArray[i+1][k]){
					 cnt++;
				}else{
					 cnt;
				}

			}
			if(!(cnt === argumentsArray[i+1].length  )){
				for(let l =  0; l < argumentsArray[i+1].length-cnt ; l++){
					argumentsArray[i+1].splice(argumentsArray[i+1].indexOf(argumentsArray[i][j]),1);
				}
				cnt=0;
			}else if(cnt === argumentsArray[i+1].length && cnt !== 0 ){
				cnt=0;
				arr_main.push(argumentsArray[i][j]);
			}
		}
		argumentsArray[i+1].map(a => arr_main.push(a));
		argumentsArray.splice(i,2,arr_main);
	}

	// remaining array equal to args
	args = argumentsArray[0];
	return args;

}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])) ;
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));