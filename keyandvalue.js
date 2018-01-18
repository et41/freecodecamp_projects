function whatIsInAName(collection, source) {
  var arr= [];
  for (let i = 0 ; i < collection.length ; i++) {
  	  	var check_arr=0;
  	  	let keys = collection[i];
  		let prop = Object.getOwnPropertyNames(source);
  		let ent =  Object.entries(keys);
  		if(prop.length <= ent.length) {
    		for (let x of prop){
  				if(source[x]===keys[x] ){
  				check_arr+=1;
  				}			
			}	
		}
		if (check_arr == prop.length){
		arr.push(collection[i]);
	}
	}
  return arr;
}

console.log(whatIsInAName( [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 2 }));