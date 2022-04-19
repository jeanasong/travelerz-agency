/* Write a function that takes three numbers as parameters - a, b, and c. 
Assume the same value could be passed in as an argument more than once. 
Print to the console or return a string that states the number of times the largest integer among a, b, and c was entered. 
Here are some sample runs:

function functionName(a, b, c) {

    Your code here 

   return result; 
    This statement is just a reminder that your function should return a value - feel free to do this any way you want 
}

 example call 
console.log(functionName(32, 48, 32));

//prints ‘The largest integer 48 was entered once.’

console.log(functionName(923, 188, 923));

//prints ‘The largest integer 923 was entered twice.’

console.log(functionName(50, 50, 50));

//prints ‘The largest integer 50 was entered three times.’

 */


function functionName(a, b, c) {
    let max = Math.max(a, b, c);
    let count = 0;

    const array = [a, b, c];
    for(i = 0; i < array.length; i++) { // iterating each value of the array
        if(array[i] === max) { // if the value at array[i] is equal to max, it will add +1 to count
            count++;
        }
    }
    let temp = 0;
    if(count === 1) {
        temp = "One";
    } else if(count === 2) {
        count = "two";
    } else {
        temp = "three";
    }
    return `The largest integer ${max} was entered ${temp} times.`

}

console.log(functionName(1, 1, 1));