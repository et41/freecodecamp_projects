function binaryAgent(str) {
	let str_new=[];
	let str_splitted = str.split(' ');
	for(let bin of str_splitted){
		let bin_int = parseInt(bin,2);
		str_new.push(String.fromCharCode(bin_int));
	}
	str = str_new.join('');
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");