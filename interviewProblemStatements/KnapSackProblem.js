
const m = 8;
const p = [1,2,5,6];
const w = [2,3,4,5];

function max(a,b){
    return (a > b) ?  a : b
}

function knapsack(index,array,remW,profit){
    
    if(index > array.length){
        return 0;
    } else if(remW - w[index] === 0){
        return p[index] + profit;
    } else {
        return max(knapsack(index+1,array,remW, profit),knapsack(index+1,array,remW - w[index],profit + p[index]))
    }
}

console.log(knapsack(0,w,m,0));