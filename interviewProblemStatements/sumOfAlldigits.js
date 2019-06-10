const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);

// function sum(array){
//     let total = 0;
//     for(let i=0;i<array.length;i++){
//         total+= parseInt(array[i]);
//     }
//     return total;
// }

function calculateSum(number){
    let numArray = number.toString().split("");
    if(numArray.length === 1){
        return number;
    } else {
        return calculateSum(numArray.reduce(reducer));
        //return calculateSum(sum(numArray));
    }
}

console.log(calculateSum(193899,0));


