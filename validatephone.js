
function telephoneCheck(str) {
  // Good luck!
	let regex = /^\d{3}-\d{3}-\d{4}\b/;
	let regex1 = /^\(\d{3}\)\d{3}-\d{4}$/;
	let regex2 = /^\(\d{3}\)\s\d\d\d-\d{4}\b/;
	let regex3 = /^\d{3}\s\d{3}\s\d{4}\b/;
	let regex4 = /^\d{10}\b/;
	let regex5 = /^\d\s\d{3}\s\d{3}\s\d{4}\b/;
	let regex6 = /^1|1\s\b/;
	let x = '1 0666 555';
	 if(/1\s/.test(str)  ){
	 	str = str.replace(/1\s/,'');
	 }else if(/1/.test(str)){
	 	str = str.replace(/1/,'');
	 }
	 let valid_list = [regex, regex1,regex2, regex3, regex4, regex5];
	 let cnt = 0;
	for(let val of valid_list){
		if(val.test(str)){
		  		cnt++;
		}
	}
	if(cnt > 0){
		return true;
	}else{
		return false;
	}
}




//console.log(telephoneCheck("555-555-5555"));
//console.log(telephoneCheck("5555555555"));
//console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555) 555-5555"));