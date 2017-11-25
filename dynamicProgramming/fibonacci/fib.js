console.time('fib')

let fibA = []

function fib(n){

		if(n<=1){
			return n;
		}
		else{
			return fib(n-1) + fib(n-2);
		}
	}

let f = fib(40);

console.timeEnd('fib')
