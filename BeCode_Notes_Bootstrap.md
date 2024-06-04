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


Basic HTML syntax
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
#### Grid system
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

    We can also add gaps in between the columns, `row row-cols-2 gy-2` this will add a gap of 2 in between rows, it goes from 1 to 5.

    We can always use it for breack-points by writting `gy-lg-5`, add gap of 5 once screen size is lg.
    Same for the x axis, `gx-2`

    And `g` for a gap in both directions.

    Nesting rows, one inside another. By adding `<div class="row">` inside a `<div class="col">`.


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

#### Tables
Exemple code for the modifications:
```HTML
    <table>
        <thead>
            <tr>
                <th>first</th>
                <th>last </th>
                <th>age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>kyle</td>
                <td>cook</td>
                <td>27</td>
            </tr>
            <tr>
                <td>sally</td>
                <td>thorn</td>
                <td>13</td>
            </tr>
            <tr>
                <td>jim</td>
                <td>smith</td>
                <td>48</td>
            </tr>
        </tbody>
    </table>
```

We can add the `class="table"` to add BS basic styles to it.

We can add colors, there are 8 themes in BS. They are:

```
.text-primary => blue

.text-secondary => gray

.text-success => green

.text-danger => red

.text-warning => yellow

.text-info => lightblue

.text-light => lightgray

.text-dark => darkgray

.text-muted => text lightgray

.text-white => white
```

This colors are accepted on all class types elements, including rows, columns and cells.

We also have `class="table table-striped"` that will create a on/off color throughout the table, on the rows direction, for columns we d `class="table table-striped-columns"`.

Table hover will darker the row that cursor hovers, `class="table table-hover"`. For an always hover style we can use `class="table table-active"` on a row or column.

Add or remove borders by `class="table table-bordered"`, `class="table table-borderless"`

Change sizes with `class="table table-sm"`.

If we have a lot of data, that it doesn't fit on the window we can create a box with slidebars by wraping the whole table on a responsive class, `class="table-responsive"`, we can also say at which screen size it will become the case by addind the break points after `reponsive-lg`=> this is it will become responsive when smaller than lg size.

Fot the `head`,`body` and ` foot` we can add dividers.

#### Forms

Basic structure for an email form:
```HTML
    <div class="container">
        <form action="">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-control">
            <button>Submit</button>
            </input>
        </form>
    </div>
```
We will add classes to our `label` and `input`, using the follwing `class="form-label"` and `class="form-control"`
_
Controling the `form-control-_`, with `sm` it's a smaller input box and `lg` is a larger one.

For a style of input as plain-text, we can use `class ="form-control-plaintext"`. We can also add other properties, like `readonly`(for no allow modification) and a `value`(will fill up the box with a generix text), even the `desabled`(will stop any input).

If we have as input a colorpicker, `type="color"` we need to add a `class="form-control-color"` so that is becomes a right style.

Same idea for a range input, `type="range" "class="form-range"`

The select input we use `class="form-select"` for a beter style.

Checkboxes we will use `class="form-check-input"`, the label will recieve the `class="form-check-label"` and we can wrap all that into a `<div class="form-chek">"`. We can also transform it into a toogle switch with an extra `form-switch` and we can have them be inline, in case we have several checkboxes.

#### Input groups

It allows us to have multiple inputs in a same row. As an exmple of code:
```HTML
    <div class="container">
        <form action="">
            <label for="text" class="form-label">Amount</label>
            <div class="input-group">
                <div class="input-group-text">$</div>
                <input type="number" id="text" class="form-control">
                <div class="input-group-text">.00</div>
            </div>
        </form>
    </div>
```

#### Floating Labels

An extra, a cool type of animation for your form labels. `Label` must come after the `input` and `input` must have a `placeholder`.
```HTML
    <form>
        <div class="form-floating">
            <input type="email" id="email" class="form-control" placeholder="Email">
            <label for="email" class="form-label">Email</label>
        </div>
        <button>Submit</button>
    </form>
```
#### Form Validation

A form accepts the `required` statement that will force the user to input something. For BS we have a class that will show if invalid or valid, `classic="is-invalid"` or`classic="is-valid"`.

For an automation we can add into the form tag `novalidate`, a javasript will be necessary.
```js
    <script>
        const form = document.querrySelector('form')

        form.addEventListener('submit', e => {
            if (!form.checkValidity()) {
                e.preventDefault()
            }
            form.classList.add('was-validated')
        })
    </script>
```

Under label we can add more feedback as `<div class="invalid-feedback">Invalid Email</div>` and `<div class="valid-feedback">Correct Email</div>`

#### Buttons
