// This will be a central file for the exercices done in Javascript

// 01 - base

// #01 - var-alert
// The alert will open with the page and will display the text inside as the parameter
var hello = "This is my version of the Hello, World!";
alert(hello);

// #02 - var-prompt
// Created a pop up with an input that we will use on an alert
var prenom = prompt('Quel est ton nom? ');
alert('Voici, ' + prenom + '!');

// #03 - promp-if
var gateau = prompt('Is the cake a lie?(yes/no) ');
var anwser;
if (gateau === yes) {
    return alert('It is! Here is some cake!')
} else {
    return alert('Sorry no cake for you...')
};
// #04 - asv-confirm
// Ici j'ai besoin de conditions et pliseurs pop up
while (answer !== 'yes') {
    var firstName = prompt('Your first name: ');
    var lastName = prompt('Your last name: ');
    var age = prompt('Your age: ');
    var answer = prompt(`Is this correct, first name: ${firstName}\n last name: ${lastName}\n age: ${age} `);
}
alert(`Your first name is ${firstName}, your last name is ${lastName} and your age is ${age}.`);

// 02 - maths

// # 01 - calculator-one
// This took me so long because I had only strings and no numbers
(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        var num1 = parseInt(document.getElementById("op-one").value);
        var num2 = parseInt(document.getElementById("op-two").value);
        return alert(num1 + num2);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        var num1 = parseInt(document.getElementById("op-one").value);
        var num2 = parseInt(document.getElementById("op-two").value);
        return alert(num1 - num2);

    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        var num1 = parseInt(document.getElementById("op-one").value);
        var num2 = parseInt(document.getElementById("op-two").value);
        return alert(num1 * num2);

    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        var num1 = parseInt(document.getElementById("op-one").value);
        var num2 = parseInt(document.getElementById("op-two").value);
        return alert(num1 / num2);

    });
})();