# This are my personal notes on learning Bootstrap

## Youtube

### Bootstrap 5 Crash Course
[Video](https://www.youtube.com/watch?v=Jyvffr3aCp0)\
[Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)\
A stylessheet is inclued and it will help visualize the brackpoints.
Here is the content:
```CSS
body {
  margin-top: 40px; /* This margin just makes the text easier to read. You can remove it if you want since it can mess with your other styles. */
}

body::before {
  content: "XS";
  color: red;
  font-size: 2rem;
  font-weight: bold;
  position: fixed;
  top: 0;
  right: 0;
}

/* This box class is purely used for explaining how the bootstrap grid system works. */
.box {
  background-color: lightblue;
  border: 1px solid blue;
  min-height: 50px;
  font-size: 2rem;
}

@media (min-width: 576px) {
  body::before {
    content: "SM";
  }
}

@media (min-width: 768px) {
  body::before {
    content: "MD";
  }
}

@media (min-width: 992px) {
  body::before {
    content: "LG";
  }
}

@media (min-width: 1200px) {
  body::before {
    content: "XL";
  }
}

@media (min-width: 1400px) {
  body::before {
    content: "XXL";
  }
}
```


Basic HTML synta
```HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <script refer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```
Bootstrap uses 3 levels of grid system:
- Container
    `<div class="container"></div>`

    It adds a padding that follow the different breack-points defined by BS.
    `<div class="container-md"></div>`

    Same behaviour for larger than md, but it takes up 100% width, or fluid when smaller than md.

    `<div class="container-fluid"></div>`

    This will allow our container to always be 100% width.

- Row
    `<div class="row"></div>`

    It creates a space that occupies the whole width, inside we can add elements.

    A normal `div class="row"` will create a single row thay will allow wraps if the total number of boxes/elements inside is above the 12 limit for a certain window size, unless specified.

    We can also say how many rows it will be set, by using `row row-cols-2` here 2 is the number of columns the row will take.

    We can say from what size (break-point) it will divide by `row-col-lg-4` for exemple once we get to `lg` size the elements distribute 4 per row.

    We can also add gaps in between the columns, `row row-cols-2 gy-2` this will add a gap of 2 in between rows.

- Column
    By default BS is divided in 12 columns system, each row has 12.

    Will always fill up the remaining space, even if total number is larger than 12.

    If the breack point is not specified, it will keep the same sizes.

    We do that by adding the classes:
    This will resize to 4 if size `col-lg` else it will keep a 8 size column.
    
    `class="col-lg-4 col-8"`

    It works for all the break points, `col-xs`,`col-sm`,`col-md`,`col-lg`,`col-xl`,`col-xxl`.

    If `col` is not defined, it will take up the whole width, same as `col-12`

    If there is higher number than 12, it will wrap.

    To offset, or push the columns around e use `offset-number` the number is the space that is displaced



