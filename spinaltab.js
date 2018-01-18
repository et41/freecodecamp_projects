function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
   var newstr = str.replace(/-/, ' ');
    console.log('newstr : '  , newstr);
    console.log(str);
//  console.log(str.split());
new_arr = [];
  for(i = 1 ; i < str.length ; i++){
  	console.log(str[i]);
  	new_arr.push(str[i]);

  	if (str[i].toUpperCase() === str[i] && str[i] != ' '){
  		console.log('upper : ' , str[i]);
  		str[i].replace('-',i);
  	}
  }
  console.log('new_arr : ' , new_arr);
  var new_str = new_arr.join('');
  console.log('str:' ,str.substr(0,1)+ new_str);
  return str;
}
spinalCase('This Is Spinal Tap');
//spinalCase("thisIsSpinalTap")