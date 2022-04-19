/**
 Wrote a function that reverse an Array using Recursion
 .pop() .concat(
    reverse [1, 2, 3, 4] to [4, 3, 2, 1]
 */

let reverseArray = (arr) => {
    // base-case [stopping point]
    if(arr.length === 1) {
        return arr;
    }

    //recursion
    let lastElement = arr.pop()
    console.log(arr);
    return [lastElement].concat(reverseArray(arr));
}
console.log(reverseArray([1,2,3,4]));