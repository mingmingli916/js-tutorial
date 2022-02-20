let text = `He's often called "Johnny"`;

let text2 =
    `The quick
brown fox
jumps over
the lazy dog`;


let firstName = "John";
let lastName = "Doe";

let text3 = `Welcome ${firstName}, ${lastName}!`;

// html template
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;