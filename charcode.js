
function fearNotLetter(str) {
  let index = str.charCodeAt(0);
  let last;
  let arr = [];
  for (i = index ; i<129; i++ ){
  	arr.push(i);
  }
  for (i = 0 ; i<str.length ; i++) {
  	if(str.charCodeAt(i) != arr[i]){
  		last =  String.fromCharCode(arr[i]);
  		var i_last = arr.indexOf((arr[i]));
  		arr.splice(i_last,1);
  	}
  }
//return undefined if there is no mistake
  if(str === last ) {
  	return  ;
  }
  else{
  	str = last;
  	return str;
	}
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abc"));
console.log(fearNotLetter("bcd"));
console.log(fearNotLetter("abcdefghjklmno"));
