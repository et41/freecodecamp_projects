function addTogether() {
	let sum = 0;
	let first = arguments[0];
	let second = arguments[1];
	if(!second && typeof(first) === 'number'){
		return function(second){
			if(typeof(second) === 'number'){
				return sum = first+second;
			}
		};
	}
	if(typeof(first) == 'number' && typeof(second) === 'number' ){
		return sum = first + second; 	
	}else {
		return undefined;
	}

}

console.log(addTogether(2,3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, '3')); 
console.log(addTogether(2)([3]));