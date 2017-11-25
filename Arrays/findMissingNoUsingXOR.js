console.time('find');
function findMissing(arr){

	let n = arr.length;
	let x1 = arr[0];
	let x2 = 1
		
	for(var i=1;i<n;i++){
		x1 = x1 ^ arr[i]
	}

	for(var j=2;j <= n+1;j++){
		x2 = x2 ^ j
	}

	return (x1 ^ x2);
}


let mi = findMissing([1,4,3,6,7,5])

console.log(mi)
console.timeEnd('find');
