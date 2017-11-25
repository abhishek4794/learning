
function findMajority(arr){

	let count = []
	let majority = null;
	let maxCount = arr.length / 2
	for(var i=0;i<arr.length;i++){
		
		if(!count[arr[i]]){
			count[arr[i]] = 1
		}
		
		count[arr[i]]++

		if(count[arr[i]] >= maxCount){
			majority = arr[i]
		}
	
	}
	return majority;
}

let maj = findMajority([4,5,1,1,1,1,1,7,8,3,5,6,6,5])

console.log(maj)
