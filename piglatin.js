function translatePigLatin(str) {
 let new_str = [];
 let count_nc = 0;
 let count_c = 0;
 non_consonant = ['a' , 'e' , 'i' , 'o' , 'u'];
 two_character = str.substr(0,2);
	 for (let val of two_character){
	 	if(non_consonant.includes(val)===false){
	 		count_nc += 1;
	 	}
	 	else if(non_consonant.includes(val) && count_nc == 0){
	 		count_c+=1;
	 	}
	 }
	 if(count_nc == 1 && count_c == 0){
	 	new_str.push(str.substr(1,str.length)+str[0]+'ay');
	 }
	 else if (count_nc == 2){
	 	new_str.push(str.substr(2,str.length)+str[0]+str[1]+'ay');

	 }
	 else if(count_c >=1 ){
	 	new_str.push(str+'way');
	 }
	str = new_str.toString();
	return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));

