const sortProduct = (arr) => {
    let multipliedArr = arr.map((value, index) => value * (index + 1));
    let indexMap = new Map(multipliedArr.map((value, index) => [value, index]));
    multipliedArr.sort((a, b) => a - b);
    let sortedIndices = multipliedArr.map((value) => indexMap.get(value));
    let sortedArr = sortedIndices.map((index) => arr[index]);

    return sortedArr;
}

console.log(sortProduct([45, 92, 13, 27, 81, 36, 50, 72, 18, 63]))