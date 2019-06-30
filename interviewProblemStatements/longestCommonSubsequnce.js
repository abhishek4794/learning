

/*

str1 = abcfeewd

str2 = fedabfd

 */
console.time("lcs");
let lcsStr = '';
function max(a,b){
    return (a > b) ?  a : b
}

function lcs(indexOfFirstStr,indexOfSecondString,firstArray,secondArray){
    if(indexOfFirstStr === firstArray.length || indexOfSecondString === secondArray.length){
        return 0;
    } else if(firstArray[indexOfFirstStr] === secondArray[indexOfSecondString]){
        lcsStr += firstArray[indexOfFirstStr] + ' ';
        return 1 + lcs(indexOfFirstStr+1,indexOfSecondString+1,firstArray,secondArray)
    } else {
        return max(lcs(indexOfFirstStr+1,indexOfSecondString,firstArray,secondArray),
            lcs(indexOfFirstStr,indexOfSecondString+1,firstArray,secondArray))
    }
}

let firstArray = ['a','b','c','f','d','h','a','r','e','y','q','o'];
let secondArray = ['a','b','f','c','h','o'];

console.log(lcs(0,0,firstArray,secondArray));
console.log(lcsStr);
console.timeEnd("lcs");