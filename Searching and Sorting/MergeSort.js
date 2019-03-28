
function merge(leftArray, rightArray, baseArray) {
    // console.log(A, B);
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            baseArray[k] = leftArray[i]
            k++;
            i++
        } else {
            baseArray[k] = rightArray[j]
            k++;
            j++
        }
    }

    while (i < leftArray.length) {
        baseArray[k] = leftArray[i]
        k++;
        i++
    }

    while (j < rightArray.length) {
        baseArray[k] = rightArray[j]
        k++;
        j++
    }

    return baseArray;
}

function mergeSort(arrayToSort) {
    if (arrayToSort.length === 1) {
        console.log(arrayToSort);
        return arrayToSort;
    } else {
        const mid = parseInt(arrayToSort.length / 2)
        const firstArray = arrayToSort.slice(0, mid)
        const secondArray = arrayToSort.slice(mid, arrayToSort.length)
        return merge(mergeSort(firstArray), mergeSort(secondArray), arrayToSort)
    }
}

const arrayToSort = [50, 6, 44, 12, 55, 74, 23, 66, 11, 90, 43]
console.log(mergeSort(arrayToSort))