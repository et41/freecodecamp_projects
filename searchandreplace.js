function myReplace(str, before, after) {
	let str_array = [];
	let str_splitted = str.split(' ');
	for (let word of str_splitted){
		if (word === before){
			if(!(word[0] === word[0].toLowerCase())){
				after = after[0].toUpperCase()+after.substr(1,after.length);
			}
		word = after ; 
		}
		str_array.push(word);
	}
	joint_arr = str_array.join(' ');
	joint_str = joint_arr.toString();
	str = joint_str;
  	return str;
}	

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));