console.time('find');
function findMissing(arr){

	let n = arr.length;

	let total = ( (n+1)*(n+2) ) / 2 // We are taking n+1 because though array size is n but there is one missing element.
	
	for(var i=0;i<n;i++){
		total -= arr[i]
	}

	return total;
}


let mi = findMissing([1,4,3,6,7,5])

console.log(mi)
console.timeEnd('find');
