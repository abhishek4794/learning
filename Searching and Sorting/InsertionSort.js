
function insertionSort(arrayToSort) {
    let sortedArray = [];
    while (arrayToSort.length) {
        const min = Math.min(...arrayToSort)
        arrayToSort.splice(arrayToSort.indexOf(min), 1)
        sortedArray.push(min)
    }
    return sortedArray;
}

const arrayToSort = [10, 53, 34, 65, 23, 87, 33, 12, 33, 88, 55]
console.log(insertionSort(arrayToSort))