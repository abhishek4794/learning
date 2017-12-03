ops(5)


async function ops(arg){
   try{
        
        const resM = await multiply(arg)
        
        const resD = await divide(resM)
        
       	const resA = await add(resD)
        
        console.log('Final Value is '+resA)
        
    }
    catch(e){
        console.log(e,'<--- e')
    }
    
}


/*
multiply(1)
.then(function(resM){	
	console.log(resM)
	divide(resM)
}).then(function(resD){
	console.log(resD)
}).catch(function(e){
	console.log(e)
})
*/


function multiply(arg){
    let a = true;

    return new Promise(function(resolve,reject){

		if(a){
			resolve(arg * 2)
		}
		else{
			reject(null)
		}

	})
}

function divide(arg){
    let a = true;
	console.log(arg)
    return new Promise(function(resolve,reject){

                if(a){
                        resolve(arg / 2)
                }
                else{
                        reject(null)
                }

        })

}

function add(arg){
    
    let a = true;

	return new Promise(function(resolve,reject){

                if(a){
                        resolve(arg + 2)
                }
                else{
                        reject(null)
                }

        })
}



