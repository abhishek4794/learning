

let a = [1,2,4,6,7,9,10,11]

let b = [2,5,7,8,9]


function union(a,b){
	
	let union = []
	let i=0;j=0
	let m = a.length
	let n = b.length
	while(i < m && j < n){
		if(a[i]<b[j]){
			union.push(a[i])
			i++;
		}
		else if(b[j]<a[i]){
			union.push(b[j])
                        j++;
		}
		else{
			union.push(a[i])
			j++;
			i++
		}
	}
	

	while(i < m){
		union.push(a[i])
		i++;
	}

	while(j < n){
                union.push(b[j])
                j++;
        }
	console.log(union)
}

union(a,b)
