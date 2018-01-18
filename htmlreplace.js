
function convertHTML(str) {
  // &colon;&rpar;
  str_splitted = str.split('');
  for(var i = 0 ; i < str_splitted.length ; i++){
	if(str_splitted[i] === '<' ){
        str_splitted[i] = '&lt;';
	}else if(str_splitted[i] === '&'){
		str_splitted[i] = '&amp;';
	}else if(str_splitted[i] === '>'){
		str_splitted[i] = '&gt;';
	}else if(str_splitted[i] === '"'){
        str_splitted[i] = '&quot;';
	}else if(str_splitted[i] === "'"){
	    str_splitted[i] = '&apos;';
	}		
  }
  str = str_splitted.join('');
  return str;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Shindler's List"));

/*case '<':
        str_splitted[i] = '&lt;';
        case '&':
        str_splitted[i] = '&amp;';
        case '>':
        str_splitted[i] = '&gt;';
        case '"':
        str_splitted[i] = '&quot;';
        case "'":
        str_splitted[i] = '&apos;';
    }*/