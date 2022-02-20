// Avoid global variables, avoid new, avoid ==, avoid eval()

// Local variables must be declared with the var keyword or the let keyword,or the const keyword, otherwise they will become global variables.

// Declarations on Top

// Declaring objects with const will prevent any accidental change of type:
const car = {type: "Fiat", model: "500", color: "white"};
// car = "Fiat";      // Not possible


// Declaring arrays with const will prevent any accidential change of type:
const cars = ["Saab", "Volvo", "BMW"];
// cars = 3;    // Not possible


// The == comparison operator always converts (to matching types) before comparison.
//
// The === operator forces comparison of values and type:

0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false
