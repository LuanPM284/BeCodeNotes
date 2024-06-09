# Learning Sass

## Source Youtube
I will be using this [video](https://youtu.be/Zz6eOVaaelI?si=k9_9ZA2ULTeSEYtN).

## Learn Sass In 20 Minutes | Sass Crash Course

Basic HTML template for this video 
`HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test-site</title>
</head>

<body>
    <header>
        <h1>Hello my dear</h1>
        <button>Hello</button>
    </header>
    <div class="contact">
        <button>Our contact info</button>
        <p>This is our info</p>
    </div>
</body>
</html>
`
Needs a Sass compiler, we can find it on the extensions for VS code.

We will need to create a new file named `style.scss` that thanks to the help of the extension will translate to normal css.

For a variable we use `$var_name`, we can for exemple chose a color as in red and use the varible for every time we want to used the color. No longer need to change every single instance of the previous color.

Exe:
```SCSS
/* This is the normal behaviour */
$primaryBtn: red;

header button {
    background: blue;
}

.contact button {
    background: blue;
}
/* with scss variable */
$primaryBtn: red;
header button {
    background:$primaryBtn: ;
}

.contact button {
    background: $primaryBtn;
}
```

We can nest different things. As before we could so `header button {}` now we can also just insert he button inside the header statement. 
`header{ button {... }}` and continue to add other elements that will onlybe styled when inside the parent, nested.

For pseudo-classes we can add them with a `&` symbole followed by the element. `header{button{&:hover{...}}`

We can separate the code in different chunks by creating a new file named `_chunk.scss`. For it to work on the main file we will need to import, by doing `@import './chunk'`. This can also work for storing our variables. `_variables.scss`

Creating `mixin` or functions, we can congregate several often used bits of code and paste it instead. To call for them a `@include` is nedded inside the element.

To create a mixin we do as follows:

```SCSS
/* As exemple using flexbox to center content and align */
@mixin flexCenter{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

header{
    @include flexCenter();
}
```

We also add parameters to our *mixins* by creating local variables inside paratheses.
```SCSS
@mixin flexCenter($direction){
    heifht:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:$direction;
}
header{
    @include flexCenter(row);
}
```
