
function min(a,b){
    return (a < b) ?  a : b
}

function findMinTries(e,totalFloor,currentFloor){
    if(totalFloor === 1){
        return 1;
    } else if(e === 1){
        return totalFloor;
    } else {
        return min(findMinTries(e-1,totalFloor-1,parseInt((totalFloor-1)/2)),
            findMinTries(e,totalFloor-currentFloor,parseInt((totalFloor-currentFloor)/2))) + 1
    }
}

console.log(findMinTries(2,8,4));