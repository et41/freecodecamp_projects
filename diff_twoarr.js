function diffArray(arr1, arr2) {
  var newArr = [];
  for (let key of arr1){
  	if(arr2.includes(key)===false){
  		newArr.push(key);
  		console.log(key);
  	} 
  }
  for (let key of arr2){
	if(arr1.includes(key)===false){
  		newArr.push(key);
  		console.log(key);
  	} 
  }
  // Same, same; but different.
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

/*
Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()
Compare two arrays and return a new array with any items only found in one of
the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]
*/