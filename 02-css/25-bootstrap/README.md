# Bootstrap

Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.

In plain CSS, we have to build every thing ourselves (writing width, color, padding manually).
But with Bootstrap, we get pre-made components (buttons, navbars, grids) that we just have to assemble or copy paste.

# Why Use Bootstrap?

1.  **Fast Development**: You don't need to write thousands of lines of CSS. Just use class names.
2.  **Responsive**: It automatically adjusts your website for Mobile, Tablet, and Desktop.
3.  **Consistent**: Your website looks good and uniform.

# How to Use?

There are two main ways to include Bootstrap in your project:

### 1. CDN (Content Delivery Network)

You just copy a link and paste it into your `<head>` tag. It downloads Bootstrap from the internet.

```html
<link href="https://cdn.jsdelivr.net..." rel="stylesheet" />
```

### 2. Local File

You download the `bootstrap.css` file and link it manually.

```html
<link rel="stylesheet" href="./bootstrap.css" />
```

# Grid System

Bootstrap divides the screen into **12 Columns**. Bootstrap grid system uses flexbox to create a responsive layout.

We use rows and columns to arrange elements.

- `container`: A box to hold everything.
- `row`: A wrapper for columns.
- `col-x`: Takes x slots out of 12.

Example:

```html
<div class="row">
  <div class="col-4">Column 1</div>
  <!-- Takes 4 spaces -->
  <div class="col-4">Column 2</div>
  <!-- Takes 4 spaces -->
  <div class="col-4">Column 3</div>
  <!-- Takes 4 spaces -->
</div>
```

# Components

Bootstrap gives us ready-made components.

### 1. Buttons

Instead of writing CSS for a button, just add classes:

```html
<button class="btn btn-primary">Click Me</button>
```

### 2. Tables

Just add `.table` class to your `<table>` tag.

```html
<table class="table table-bordered">
  ...
</table>
```

### 3. Forms

Make inputs look good with `.form-control`.

```html
<input type="text" class="form-control" />
```

You may explore more components in the Bootstrap Documentation from below link.

# Reference

[Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

---