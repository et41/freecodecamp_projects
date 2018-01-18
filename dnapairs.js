function pairElement(str) {
	let dna_pairs = [['A','T'],['T','A'],['C','G'],['G','C']];
	let match = [];
	for (let single of str){
	for (let i = 0 ; i<dna_pairs.length ; i++){
		if(dna_pairs[i][0] === single){
		match.push([single , dna_pairs[i][1]]);
		}

	}
}
  return match;
}

console.log(pairElement("GCG"));