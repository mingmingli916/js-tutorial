const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

//The every() method check if all array values pass a test.