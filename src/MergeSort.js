function mergeSort(array, comparisonFn) {
    if(array.length <= 1) return array;

    const middle = Math.floor(array.length/2);
    const left = mergeSort(array.slice(0,middle), comparisonFn);
    const right = mergeSort(array.slice(middle), comparisonFn);
    
    //Merge
    let results = [];
    while(left.length && right.length) {
        if(comparisonFn(left[0],right[0])) {
            results.push(left.shift());
        }
        else {
            results.push(right.shift());
        }
    }
    if(left.length) {
        results = results.concat(left);
    }
    if(right.length) {
        results = results.concat(right);
    }
    return results;
}

module.exports = mergeSort;