// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
//
// The reduce() method works from left-to-right in the array. See also reduceRight().
//
// The reduce() method does not reduce the original array.

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}