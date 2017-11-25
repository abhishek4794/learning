
let maxWeight = 50;

let weights = [10,20,30]
let val = [60,100,120]

let n = val.length

function max(a,b){
	return (a > b) ?  a : b
}

function knapsack(w,weightsArray,valArray,n)
{	
	if(n == 0 || w == 0){
		return 0;
	}

	if(weightsArray[n-1] > w){
		return knapsack(w,weightsArray,valArray,n-1)
	}
	else{
		return max( valArray[n-1] + knapsack(w - weightsArray[n-1] ,weightsArray,valArray,n-1),knapsack(w,weightsArray,valArray,n-1))
	}
}

let k = knapsack(maxWeight,weights,val,n);

console.log(k)
