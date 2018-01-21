
function sumFibs(num) {
	let fib =[1,1];
	let start = 1;
 	let i = 1;
	while(1<=num/(fib[i]+fib[i-1])){
	 	fib[i+1]=fib[i]+fib[i-1] ;  
	 	i++;
	 }
 	let even_fib = fib.filter(number => number%2!=0);;
 	num = even_fib.reduce((a,b) => a+b,0);
    return num;
}

console.log(sumFibs(10));

console.log(sumFibs(75025));