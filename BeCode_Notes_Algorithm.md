# Persnal notes for the Algorithmcs

[Source](https://github.com/becodeorg/Swartz-9/tree/main/1.The-Field/9.Algorithmics)

This is the part of the bootcamp where I learn about algorithms, or how to contruct something the computer can understand.

## 00 - logical thinking

[Source](https://github.com/becodeorg/Swartz-9/blob/main/1.The-Field/9.Algorithmics/00-logical_thinking.adoc)

It starts with simple exercices to understand how to assign variables and how to work with functions.

- [x] [silent teacher](https://silentteacher.toxicode.fr/)
- [x] [minecraft](https://code.org/minecraft)
## 01 - variables
## 02 - conditions 
## 03 - loops
## 04 - arrays
## 05 - functions
## 06 - strings
## 07 - trial
## 08 - exercises
## conventions 

# Javascript

## Basic commands to interact with HTML files

> script

Basic syntax for a script JS inside an HTML document and to connect to an external file .js
```HTML
<script src="script.js"><script>
<script>alert("Hello!");</script>
```
> alert()

This allows a pop-up window to appear with a message

```JS
alert("Hello world!");
```
> prompt()

This allows the user to input data

```JS
prompt("Here a message: ");
```

> console.log()

Used to debbug code, also available inside the browser on the console tab of the inspect. Also shows errors

```JS
console.log("Will appear on console");
```

> document.write()

Writes on the HTML page. Document being the original HTML file
```JS
document.write('<h2>A title</h2');
```
> var varName

To initialize a variable 

> parseInt() or parseFloat()

Converts a `string` given by a `prompt` into `integer` or `float`
```JS
var num1 = prompt("Give number:");
var num2 = prompt("Give other number:");
var totalNum = parseInt(num1) + parseInt(num2);
alert(totalNum);
```  

## Using DOM Document Object Model

Connects the HTML page to the Javascript language

HTML can be seen as a tree structure, going from `HTML -> Head -> title;Body;`

The structure is:
```HTML
<input type="text" id ="comment">
Object = input; Property=type; value = "text";
```

We can inspect elements by three methods, nodes, ID, attibut or Class.

Node:

Recovers from the second child element
```JS
var e = document.body.childNodes[1];
```

ID:

Recovers the data from the corresponding Id
```JS
var e = document.getElementById('img1');
```
Attribut:

Here we provide the pathway to the attibuts
```HTML
<form name="myForm" action="">
    <input type ="button" name="myButton"/>
</form>
```
```JS
var btn = document.myForm.myButton();
```
Class:

By using the get element by class method can be used in several same class elements, this care the red and test classes
```JS
document.getElementByClassName('red test');
```
---
A method to replace a content in a HTML element
```JS
d = document.getElementById('text');
d.innerHTML = 'new Text';   
```

A method to change the style of an element

```JS
var p = document.getElementById('text');
p.style.color = "red';
p.style.top = "30px";
```
Some other often used methods

```JS
var p = document.getElementById('text');
p.toString();
p.cloneNode(true); // p.cloneNode(false);
p.appendChild(<node>);
p.removeChild(<node>);
p.replaveChild(<newNode> <oldNode>);
```
To get an attribute from a variable that gets the Id
```HTML
<input id= "nameRonds" type ="text"/>
```
```JS
p.document.getElementById('nameRonds');
var typeP = p.getAttribute("type");
console.log(typeP);
```
Change an attribute

```HTML
<input id= "nameRonds" type ="text"/>
```
```JS
p.document.getElementById('nameRonds');
p.setAttribute("style","color:grey;");
p.setAttribute("placeholder", "New Name")
```
## Arrays


## To finish _(one day)_

exos: 05 Arrays - 04,05,14