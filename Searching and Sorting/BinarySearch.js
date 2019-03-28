
function binSearch(sortedArray, element) {
    const mid = parseInt(sortedArray.length / 2)

    if (sortedArray[mid] === element) {
        return mid;
    } else if (sortedArray[mid] > element) {
        const firstSorted = sortedArray.slice(0, mid)
        return binSearch(firstSorted, element)
    } else if (sortedArray[mid] < element) {
        const secondSorted = sortedArray.slice(mid, sortedArray.length)
        return binSearch(secondSorted, element)
    }
}

const sortedArray = [3, 6, 9, 22, 44, 77, 88, 99]
const index = binSearch(sortedArray, 9)
console.log(index);