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
/*
function sym(args) {
	let argumentsArray_fix = [];
	let argumentsArray = [].slice.apply(arguments);
	let arr_end = [];
	//clear repeating elements in arguments
	for(let i = 0 ; i <argumentsArray.length ; i++){
	argumentsArray_fix.push([]);
	console.log('argumentsArray_fix' , argumentsArray_fix);
	argumentsArray[i].filter(function(el){
		console.log('el : ' , el);
		if(!argumentsArray_fix[i].includes(el)){
			console.log('in ifff');
			argumentsArray_fix[i].push(el);

		};
	});
	}
console.log('argumentsArray_fix' , argumentsArray_fix);
argumentsArray = argumentsArray_fix;
	let i = 0 ; 
	while( argumentsArray.length !== 1 ){
		console.log('i' , i);
	 let arr_main = [];

		for(let j = 0 ; j < argumentsArray[i].length ; j++){
			let cnt = 0;
			for(let k = 0 ; k < argumentsArray[i+1].length ; k++){	
				console.log('j : ' , j , 'k : ' , k,'argumentsArray : ', argumentsArray,'argumentsArray[i][j] : ' , argumentsArray[i][j] ,'argumentsArray[i][k] : ' , argumentsArray[i+1][k] ); 

				if(argumentsArray[i][j] !== argumentsArray[i+1][k]){
					 cnt++;
				}else{
				}

			}
			console.log('cnt :' , cnt);
			if(!(cnt === argumentsArray[i+1].length  )){
				console.log('in ifffff');
				for(let l =  0; l < argumentsArray[i+1].length-cnt ; l++){
					console.log('l : ' , l);
					argumentsArray[i+1].splice(argumentsArray[i+1].indexOf(argumentsArray[i][j]),1);
				}
				cnt=0;
			}else if(cnt === argumentsArray[i+1].length && cnt !== 0 ){
				cnt=0;
				console.log('in elseeee');
				arr_main.push(argumentsArray[i][j]);
			}
		}
		argumentsArray[i+1].map(a => arr_main.push(a));
		argumentsArray.splice(i,2,arr_main);
	}
	/*argumentsArray = argumentsArray[0];
	let argumentsArray_end = [];
	console.log(argumentsArray);
	// clean repeating value in array
	argumentsArray.filter(function(el){
		console.log('el : ' , el);
		if(!argumentsArray_end.includes(el)){
			console.log('in ifff');
			argumentsArray_end.push(el);

		};
	});
		console.log('argumentsArray_end:' , argumentsArray_end);

	args = argumentsArray_end;
	args = argumentsArray[0];
	console.log(args);
    return args;

}*/