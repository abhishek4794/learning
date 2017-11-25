

let a = [1,2,4,6,7,9,10,11]

let b = [2,5,7,8,9]


function intersection(a,b){
	
	let intersection = []
	let i=0;j=0
	let m = a.length
	let n = b.length
	while(i < m && j < n){
		if(a[i]<b[j]){
			i++;
		}
		else if(b[j]<a[i]){
                        j++;
		}
		else{
			intersection.push(a[i])
			j++;
			i++
		}
	}
	
	console.log(intersection)
}

intersection(a,b)
