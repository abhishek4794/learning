
console.time('fib');
let fibA = []

function fib(n){

	if(fibA[n]){
		return fibA[n];
	}	
	else{
		if(n<=1){
			fibA[n] = n
			return fibA[n];
		}
		else{
			fibA[n] = fib(n-1) + fib(n-2);
			return fibA[n];
		}
	}
}

let f = fib(40);

console.log(f)
console.timeEnd('fib')
