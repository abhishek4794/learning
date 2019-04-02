
function isEven(value) {
    if (value % 2 === 0)
        return true
    else
        return false
}

function evenOddPairs(array) {

    let prevFlag = undefined
    let str = ''
    for (var i = 0; i < array.length; i++) {
        isValueEven = isEven(array[i]);
        // console.log(array[i], ' : prevFlag : ', prevFlag, ' Current value : ', isValueEven);
        if (prevFlag === isValueEven) {
            if (isValueEven) {
                str += "*" + array[i]
            } else {
                str += "-" + array[i]
            }
        } else {
            str += array[i]
        }
        prevFlag = isValueEven
    }
    return str;
}

console.log(evenOddPairs([1, 2, 3, 4, 6, 7, 9, 12, 13, 15, 66, 88]))