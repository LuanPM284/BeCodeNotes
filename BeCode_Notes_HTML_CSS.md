# Intro do HTML and CSS
# HTML
## Using GitHub Pages
<!-- in order to create my own developer landing page -->
> Source: https://dev.to/flexdinesh/create-your-developer-landing-page-with-github-pages---42jk

Resources: 
- https://www.w3.org/ 
    - https://validator.w3.org/#validate_by_uri
- https://pagespeed.web.dev/?hl=fr
- google lighthouse
- https://docs.google.com/presentation/d/1ZncEV7bkCz3BcAS4gZYSneXz1jJB_PC0IiD-CMe2VRU/edit#slide=id.g2df84913ed4_0_72

Bonus:

- Attention au dimension d'images, **bonne taille** pour mon site, car images sont lourdes pour le telechargement. Images déja redimensionnée avant le site c'est l'idéale. (photoshop, gimp, online)

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

> https://dotnetinter.livejournal.com/78240.html

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

```HMTL
<!-- basic syntax for HTML 5 now adays -->
<html>
    <head>
        <meta>
        <title> Title here, for tab text</title>
    </head>
    <body>
        <header>
            <nav> navigation bar or menu here </nav>
        </header>
        <article>
            <section>stuff here</section>
            <section>stuff here</section>
            <section>stuff here</section>
        </article>
        <aside> the publicity!!</aside>
        <footer> contats and stuff I guess</footer>
    </body>
</html>

<!-- mini resume -->
    head
        title
    body
        header
            nav
        article
            section
            section
        article
            section
            section
        aside
        footer

```

![Exemple de page HTML5](exemple_HMTL5.jpg)

![Exemple de code HTML5](exempleSyntax_HTML5.jpg)

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

Elements to be stylized:

- `class` (`.name-of-class`)
- `id` (`#name-of-id`)

### Exercises

Back to your html version of the Chinese farmer :

[x] Using only the tag as a selector, italicize all quotations.
```CSS
q {
    /* display: block;
    width: 50%;
    margin-left: 25%;
    font-size: 160%;
    background-color: lightgray;
    border-left-style: solid;
    border-left-color: firebrick;
    border-left-width: 3px;
    padding-left: 30px;
    margin-top: 80px;
    margin-bottom: 80px; */
    font-style: italic;
}
```
[x] Identify the quotes of the villagers and the farmer by assigning each a corresponding class.
```CSS
class ="villager"
class ="farmer"
```
[x] Change the color of the left edge of the quotes according to the person speaking.
```CSS
.villager {
    border-left-color: blue;
}

.farmer {
    border-left-color: greenyellow;
}

```
[x] Select using parents and children elements
```CSS
p>.farmer {
    background-color: aqua;
}

p>.villager {
    background-color: pink;
}
/* here the parent element p and we act on the children nested inside, this case the classes farmer and villager */
```

### Exercise

Back to your html version of the Chinese farmer :

[x] Select an element of the `header` and gives it a yellow background (use the child selector)
```CSS
header article {
    background-color: beige;
}
/* here the parent being the header and article being another element inside so it comes after */
```
[x] All other selectors
`+` and `>`
[For a complete list](https://www.w3schools.com/cssref/css_selectors.php)

The simplest is one following the other, with a comma this just does both at the same time
`p, h1{}`

Other common options are `>`:
`p > h1 {will only change h1 that are inside a p}`\
This goes from parent>child and only modifies the childs indented on parents

Same idea with spaces `header article{}` will only change articles inside the header

For all elements we use: `* {}`

For the `+`, it selects the first element that appears in the parent:
`div + p {selects the first p in div}`

For `~` it selects backwards to the parent


Select via the attribute `[attribute]`
There are a few others. To get an idea of what they allow, go read the [W3Schools documentation](https://www.w3schools.com/cssref/css_selectors.php), then play with [CSS Dinner](https://flukeout.github.io/)

### Exercises

Back to your html version of the Chinese farmer :

[x] Italics the text of the quotations
```CSS
q {
    /* display: block;
    width: 50%;
    margin-left: 25%;
    font-size: 160%;
    background-color: lightgray;
    border-left-style: solid;
    border-left-color: firebrick;
    border-left-width: 3px;
    padding-left: 30px;
    margin-top: 80px;
    margin-bottom: 80px; */
    font-style: italic;
}
```
[x] Capitalize all instances of the words "good" and "bad".
```CSS
.villager {
    border-left-color: blue;
    text-transform: capitalize;
}

.farmer {
    border-left-color: greenyellow;
    text-transform: capitalize;
}
```
[x] Put the words "Bad" in red
```CSS
.bad {
    color: red;
}
/* multiple classes are separated by a space: class ="villager bad" */
```
x[] Put the words "Good" in green
```CSS
.good {
    color: green;
}

```
[x] Style the table so that the background color of each row is alternating grey 
or white
```CSS
source: https://www.w3schools.com/css/css_table_style.asp
tr:nth-child(even) {
    background-color: gray;
}
/* this changes automatic */
tr:nth-child(odd) {
    background-color: beige;
}
/* this is to choose the odd number cells color*/
th {
    background-color: #04AA6D;
    color: white;
}
/* for a header color */
```
[x] At the first item in the list (types of people), play with background-image and padding-right to make the image appear good
```CSS
/* with gepeto help sice I had been stuck for quite sometime */
/* the important part is that I understand how it was made*/
/* if I comment the ul style I end up with the original points for the list */
ul {
    list-style-type: none;
    padding: 0;
}

li.good_image {
    background-image: url('bien.png');
    /* Replace with your image path */
    background-repeat: no-repeat;
    background-size: 20px 20px;
    /* Adjust size as needed */
    background-position: right center;
    /* Adjust position as needed */
    padding-right: 30px;
    /* Add padding to make space for the image */
}
```
x[x] At the second item of the list (types of people), play with background-image and padding-right to make the image appear wrong
```CSS
li.bad_image {
    background-image: url(mal.png);
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: right center;
    padding-right: 30px;
}
```
[x] At the third item of the list (types of people), play with background-image and padding-right to make the image appear chat
```CSS
li.cat_image {
    background-image: url(chat.png);
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: right center;
    padding-right: 30px;
}
```
[x] Put the first paragraph in bold
```CSS
li.bad_image {
    background-image: url(mal.png);
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: right center;
    padding-right: 30px;
}
```
## Concept 3: CSS positioning
### Understanding the Browser Rendering flow

Each html block has a "display" property which is either: `display: inline | inline-block | block` and is displayed according to its order of appearance in the html file.
This is called the **natural positioning **  or more simply the flow.

![Display explained](exemple_inline_block.png)

**The flexbox model**

Flexbox is the commonly-used name for the CSS Flexible Box Layout Module, a layout model for displaying items in a single dimension — as a row or as a column.

In the specification, Flexbox is described as a layout model for user interface design. The key feature of Flexbox is the fact that items in a flex layout can grow and shrink. Space can be assigned to the items themselves, or distributed between or around the items.

Flexbox also enables alignment of items on the main or cross axis, thus providing a high level of control over the size and alignment of a group of items.

[The flexbox model summary (FR)](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Flexbox)\
[The properties explained (FR)](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

***Most common flex commands***

Source: https://flexboxfroggy.com/

*Always start with: `display:flex;`*
- `justify-content`: creates an imaginary line fills all horizon
    - `flex-start`: Items align to the left side of the container.
    - `flex-end`: Items align to the right side of the container.
    - `center`: Items align at the center of the container.
    - `space-between`: Items display with equal spacing between them.
    - `space-around`: Items display with equal spacing around them.

- `align-items` : aligns items vertically

    - `flex-start`: Items align to the top of the container.
    - `flex-end`: Items align to the bottom of the container.
    - `center`: Items align at the vertical center of the container.
    - `baseline`: Items display at the baseline of the container.
    - `stretch`: Items are stretched to fit the container.

- `flex-direction` : defines the direction items are placed in the container

    - `row`: Items are placed the same as the text direction.
    - `row-reverse`: Items are placed opposite to the text direction.
    - `column`: Items are placed top to bottom.
    - `column-reverse`: Items are placed bottom to top.

- `order`:property of individual items. 

    - the element has an individual order number of 0, we can move up and down 1,2 -1,-2

-`align-self`: property of individual items. 
    - This property accepts the same values as align-items and its value for the specific item.

- `flex-wrap`: property, which accepts the following values:

    - `nowrap`: Every item is fit to a single line.
    - `wrap`: Items wrap around to additional lines.
    - `wrap-reverse`: Items wrap around to additional lines in reverse.

- `flex-direction` and `flex-wrap` together `flex-flow` combine them.\
    This shorthand property accepts the value of the two properties separated by a space.
    - For example, you can use `flex-flow`: `row wrap` to set rows and wrap them. Or `column wrap`
    
- `align-content` to set how multiple lines are spaced apart from each other, **only available once I have `wrap`**.

    - `flex-start`: Lines are packed at the top of the container.
    - `flex-end`: Lines are packed at the bottom of the container.
    - `center`: Lines are packed at the vertical center of the container.
    - `space-between`: Lines display with equal spacing between them.
    - `space-around`: Lines display with equal spacing around them.
    - `stretch`: Lines are stretched to fit the container.

- extra:
    - `gap`; adds gaps in between containers
    - on an item element:
        - `flex-grow`: it fills up the available space; set to 1 it will be distributed equaly
        - `flex-shrink`: 0 to refuse to shrink, over 1 and it will be first to shrink when page changes size
        - `flex-basis`: set the item, element to new dimensions, 0 being shrink to max
    - all of these combine on `flex`: 1 will fill up space and set other items automaticly
This can be confusing, but align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect.

#### Exercise :

Back to your html version of the Chinese farmer :

[x] Make the text run around the images, using the `flexbox model` property on the images (adjusted with `justify-content` to distance the text from the image).
flexbox
```CSS
.first_part {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* will only fill space that it has, if no space then no changes */
}
```

**Breaking the flow**

The flow is the default behavior. You may need an element to exit the position flow.

`position : static | relative | absolute | fixed ;`

The `position` property allows you to position an element anywhere (via the `top` and `left` properties), from the coordinates of its first parent in `position: relative` or `static`. Experiment via this Pen.

#### Exercises :

[Put the notification block in the bottom right corner of the browser, even if you scroll](https://codepen.io/pixeline/pen/dWqMxe)
```CSS
.notification{
  position:sticky;
  top:95%;
  left:95%;
}
/* a better option */
.notification {
  position: fixed;
  bottom: 0;
  right: 0;
}
```
**Going further**

More information on CSS positioning: http://learnlayout.com

**Extra**

#### Learning Grid
source: https://youtu.be/EiNiSFIPIQE?si=AVDyc45lc5WTXS12
fun tool: https://cssgridgarden.com/

## 3. Web fonts

## 4. Useful tools

## 5. Exercises to finish this sprint