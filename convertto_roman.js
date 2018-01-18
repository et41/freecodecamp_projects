function convertToRoman(num) {
 let end_str = '';
 const roman_obj = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
 for (key of Object.keys(roman_obj)){
 	if((num / roman_obj[key]) >= 1 ){
 		var x = Math.floor(num/roman_obj[key]);
 		end_str = end_str + key.repeat(x);
 		num = num % roman_obj[key];
 	}
 }
 return end_str;
}
console.log(convertToRoman(3999));//"MMMCMXCIX"


