function uniteUnique(arr) {
	new_arr = [];
	//var args = Array.from(arguments);
	var args = [...arguments];//ES6 version of the code above.
	for (i = 0 ; i < args.length ; i++){
		for (let el of args[i]){
			if(!new_arr.includes(el)){
				new_arr.push(el);
			}
		}
	}
	arr = new_arr;
  	return arr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));