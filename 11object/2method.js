// Objects can also have methods.
//
// Methods are actions that can be performed on objects.
//
// Methods are stored in properties as function definitions.

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("demo").innerHTML = person.fullName();

// If you access a method without the () parentheses, it will return the function definition: