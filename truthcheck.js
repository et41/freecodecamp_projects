
function truthCheck(collection, pre) {
  // Is everyone being true?
  let cnt = 0;
  for( let i = 0 ; i <collection.length ; i++){
  let keys =	Object.keys(collection[i]);
  	for(let key of keys){
  		if(key == pre &&  collection[i][key] ){
  		cnt++;
  		}
  	}
  }
  if(collection.length == cnt){
  	return true;
  }else{
  	return false;
  }
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, 
	{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, 
	{"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
