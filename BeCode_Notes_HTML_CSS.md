# Intro do HTML and CSS
# HTML
## Using GitHub Pages
<!-- in order to create my own developer landing page -->
> Source: https://dev.to/flexdinesh/create-your-developer-landing-page-with-github-pages---42jk

### How to do it with a github account

```
But with GitHub Pages, publishing your site is as easy as drinking a coffee.

- You need a GitHub account (you obviously have one already)
- Create a new repo with the name {username}.github.io
- Clone the repo and create an index.html file
- Add some content and git push
- Voila! Your site should be live at https://{username}.github.io in seconds.
```
For my case it will be: https://LuanPM284.github.io

---

### Setup the files
Go to the desired location and create a directory, initiate a git and add the index.html file.
```
pwd
ls -al
cd
mkdir dev_landing_page
git init
touch index.html
```
Next we need to add the file to stage, and commit in order to send back to my repository.
```
git add .
git commit -m "my index page"
```
And push it to the github repository.
```
git remote add origin https://github.com/LuanPM284/LuanPM284.github.io.git
git branch -M main
git push -u origin main
```
**Do not forget to add and commit any changes before pushing, else nothing will be sent.**
```
git add.
git commit -m "modifications"
git push
```
I cloned the original repository so I could have access to the CSS folder, I copied to my own folder later. Deleting the rest.
```bash
git clone https://github.com/flexdinesh/dev-landing-page.git
ls
cd dev-landing-page
cp -r css D:/Code/BeCode/dev_landing_page
cd ..
rm dev-landing-page
```
add/commit/push

---
create internal links
[ clickable] followed by (# the tag that is created automaticly when a heading is created)\
exe: [Top of the page](<#using-github-pages>)

---
### Progressive enhancement

(HTML => CSS => JS)*Accessibility

#### Tags Exercice

Edit the texte file: doc-the-chinse-farmer.txt using semantics. Or the different tags so that the texte is divided in blocks that we can later use to add style.
#### Some common used elements

source of explanations: https://html5doctor.com/

The different names of the tags:

- `h1` : heading 1, the 1 is for the size. Going from the largest 1 to the smallest 6
- `br`: blockquote used for breaking a line, not used to separate thematic groups on paragraphs
- `q` : for quoting other sources
- `img` : image element, given by the src
- `hr` : used to separate different sections on a same section of prose, or paragraph, creates line
- `figure` : represents some flow content, often used with `caption`, references to a single unit
- `caption` : represents the title of the `table` parent
- `table` : representation of data in more than one dimension, not used as layout aids
- `th` : table header of a cell in a table
- `tr` : represents the row of a cell in a table
- `td` : the data cell in a table
- `ul` : unordered list
- `ol` : ordered list
- `li` : list item, has as parent `ul` or `ol`
- `div` : has no special meaning, represents its children, can be used with other elements, semanticless
- `span` : has no special meaning, represents its children, can be used with other elements, semanticless
- `a` : if `href` than hyperlink, else a placeholder for a link
- `header` : represents the header of a document, contains usualy h1-h6 elements( title, subtitle or tag lines)
- `footer` : represents the footer of a document, contains typically metadata about the inclosing section, should be marked up using the `address` element
- `em` : emphasis, given by number of ancestor elements
- `strong` : represents a strong importance by nesting strong elements, each one increases the strenght
- `alt` : is an attribute that is present when the image can't be displayed
- `link`: allows a connection between the current document and external sources
#### Html attributes

Attributes can be added inside a tag in order to increase semantics, helping the machine "understand" better the content.
exe: source: https://github.com/becodeorg/Swartz-9/tree/main/1.The-Field/8.Html-CSS/progressive-enhancement
```HTML
<p>
Steven Paul Jobs, known as Steve Jobs, (San Francisco, February 24, 1955 - Palo Alto, October 5, 2011) is an entrepreneur...
</p>
```
We can, with attributes, describe this human being to differentiate him from others.
```HTML
<p class="human" name="Steve Job" nationality="USA" origin="Syria" job="CEO" company="Apple" hair="grey">
</p>
```
Steven Paul Jobs, known as Steve Jobs, (San Francisco, February 24, 1955 - Palo Alto, October 5, 2011) is an entrepreneur...

In this way, by increasing the semantics of the tags with attributes, we have clarified for a machine that is this human being.

Here is a one-line summary of the syntax of tags, attributes and values:
```HTML
<tag attribute="value">content</tag>
```
#### Alt exercice

for: Make sure that when you click on the links, the page opens in a new browser tab.
do: `target = "_blank"` to your clicable element

for:Find the attribute to display a small text box when hovering over links
do: `add a Title = "name"` this will show the text when hovering
    a more detailled hovering:
```HTML
    <a class="previous aa nv"><strong>&laquo;</strong> Previous <span class="tooltip">Unavailable</span></a>
```

```CSS

.tooltip {
    display: none;
  }
  
  .nv {
    display: relative;
  }
  .nv:hover .tooltip {
    display: block;
    position: absolute;
    top: -10;
    left: 20;
    padding: .5em;
    background-color: red;
    color: white;
  }

```
---

# CSS

Allows the addiction of styles and "beautification" of the HTML bare bones page.

Syntax

```CSS
selector {
	property :  value ;
	property :  value ;
	/* This is a comment */
	property :  value ;
	...
}
```
**notice that we end by** ***;***

To connect to HTML:

- in your html file, in a `<style>` tag
- in an external css file, linked to your html via the `<link>` tag\
    exe: `<link rel="stylesheet" href ="style.css">`

## Concept 1: CSS selectors

CSS selectors allow you to select in your html the content to be stylized via the tag containing it.

### Exercice
Back to your html version of the Chinese farmer :

[x] Style the paragraphs: use a Serif font, increase the spacing a little, use a basic size that makes it easy to read. Give the text a dark color, but not black.\
possible solution:
```CSS
p {
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    color: darkgrey;
}
```

[x] Style links so that they are easily readable.\
```CSS
a {
    font-size: 20px;
    color: blueviolet;
    letter-spacing: 5px;
    background-color: yellow;
}
```
[x] Style the "hover" and "visited" state of the links.
```CSS
a:hover {
    color: blue;
    background-color: red;
}

a:visited {
    color: aqua;
}
```

## Concept 2: block model

All tags are rendered visually as a "block". This is called the [box model](https://www.w3schools.com/css/css_boxmodel.asp). Each block includes margin, padding border properties.

![The bloc](css-block.png)

We can control the dimension and spacing of this block:
- `width`/`heigth`
- border: exe: `border:1px solid #FF0000;` 
- `padding` : space between content and border
- margin : the last most outer layer

### Exercices

[x] Back to your html version of the Chinese farmer :
[x] Give the body a maximum width of 90%.
```CSS
body {
    max-width: 90%;
}
```
[x] Then, center the body by playing with the margin property
```CSS
body {
    max-width: 90%;
    margin-right: 5%;s
    margin-left: 5%;
}
```
[x] Make sure that the quotes are only half the pages width
```CSS
q {
    display: block;
    width: 50%;
}
```
[x] Using only the margin property, place the quotes in the middle.
```CSS
q {
    display: block;
    width: 50%;
    margin-left: 25%;
}
```
[x] Increase the text size in quotations to 160% of the default text size
```CSS
q {
    display: block;
    width: 50%;
    margin-left: 25%;
    font-size: 160%;
}
```
[x] Give a slightly greyish colour to the background of the quotations
```CSS
q {
    display: block;
    width: 50%;
    margin-left: 25%;
    font-size: 160%;
    background-color: lightgray;
}
```
[x] Add a 3px Firebrick border to the left of each quotation
```CSS
q {
    display: block;
    width: 50%;
    margin-left: 25%;
    font-size: 160%;
    background-color: lightgray;
    border-left-style: solid;
    border-left-color: firebrick;
    border-left-width: 3px;
}
```
[x] The text of the quotations touches the border, it's not pretty. Add a 30px space between the border and the text of the quotation.
```CSS
q {
    display: block;
    width: 50%;
    margin-left: 25%;
    font-size: 160%;
    background-color: lightgray;
    border-left-style: solid;
    border-left-color: firebrick;
    border-left-width: 3px;
    padding-left: 30px;
}
```
[x] Make sure that the quotes have an empty space of 80 pixels above and below.
```CSS
q {
    display: block;
    width: 50%;
    margin-left: 25%;
    font-size: 160%;
    background-color: lightgray;
    border-left-style: solid;
    border-left-color: firebrick;
    border-left-width: 3px;
    padding-left: 30px;
    margin-top: 80px;
    margin-bottom: 80px;
}
```
[x] Find out how to add a background color to your body
```CSS
body {
    background:color;
}
```
[x] Change the background color to use a color gradient (go to http://www.colinkeany.com/blend/)
```CSS
body {
    max-width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    background: linear-gradient(206deg, #00eeff, #f52981);
    /*  https://colinkeany.com/blend/  */
    ;
}
```
[] Add a background image to your body
```CSS
body {
    max-width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    /* background: linear-gradient(206deg, #00eeff, #f52981); */
    background-image: url(win.gif);
}
```
[x] Make sure that the image does not repeat itself
```CSS
body {
    max-width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    /* background: linear-gradient(206deg, #00eeff, #f52981); */
    background-image: url(win.gif); /*image in my directory, could use url as well*/
    background-repeat: no-repeat;
}
```
[x] Change its positioning to bottom right
```CSS
body {
    max-width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    /* background: linear-gradient(206deg, #00eeff, #f52981); */
    background-image: url(win.gif);
    background-repeat: no-repeat;
    background-position: bottom right;
}
```
[x] Changes its size to cover
```CSS
body {
    max-width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    /* background: linear-gradient(206deg, #00eeff, #f52981); */    
    background-image: url(win.gif);
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: cover;
    /* background-size: contain; will stretch to accomodate width*/
}
other version with image:

body {
    max-width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    /* background: linear-gradient(206deg, #00eeff, #f52981); */
    /* background-image: url(win.gif); */
    background-image: url(images.jpg);
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: contain;
}
```

## CSS selectors (part 2) :