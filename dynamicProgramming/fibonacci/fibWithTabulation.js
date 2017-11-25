console.time('fib')

let fibA = []

function fib(n){
		
		fibA[0] = 0
		fibA[1] = 1
		
		for(var i=2;i<=n;i++){
			fibA[i] = fibA[i-1] + fibA[i-2];
		}
		return fibA[n]
}		

let f = fib(40);
console.timeEnd('fib')
