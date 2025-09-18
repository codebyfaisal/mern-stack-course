# HTML Tables

Tables in HTML are used to organize data into rows and columns. If you've ever worked with spreadsheets like Microsoft Excel or Google Sheets or simple table on the page/paper, the concept is similar. Tables are helpful when you want to display structured information like product lists, schedules, or simple data sets.

---

## 🧱 Basic Table Structure

Here’s a simple example of a table:

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>24</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>28</td>
  </tr>
</table>
````

### Explanation

* `<table>`: Defines the table. this is the parent element of all the table elements.
* `<tr>` (table row): Creates a row in the table.
* `<th>` (table heading): Same as `<td>`, but creates a header cell (bold by default).
* `<td>` (table data): Defines a standard data cell used in the table row(tr).

---

## Adding More Rows and Columns

You can add as many rows (`<tr>`) and columns (`<td>`) as needed. Each row should have the same number of columns to keep the table consistent.

Example:

```html
<table>
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Available</th>
  </tr>
  <tr>
    <td>Notebook</td>
    <td>$5</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Pen</td>
    <td>$1</td>
    <td>No</td>
  </tr>
</table>
```

---

## 🔀 Merging Cells: `colspan` and `rowspan`

Sometimes you may want a cell or box to span(mean make it bigger or combine one or more cells) across multiple columns or rows. For this, HTML provides two attributes:

### `colspan` Example

```html
<table>
  <tr>
    <th colspan="2">User Info</th>
  </tr>
  <tr>
    <td>Name</td>
    <td>John</td>
  </tr>
</table>
```

This merges two columns into a single cell.

### `rowspan` Example

```html
<table>
  <tr>
    <th rowspan="2">Name</th>
    <td>Alice</td>
  </tr>
  <tr>
    <td>Bob</td>
  </tr>
</table>
```

This merges a cell across two rows.

---
## Semantic Elements for Tables
## 📦 Organizing with `<thead>`, `<tbody>`, and `<tfoot>`

These tags are **semantic elements** that help organize your table into sections:

* `<thead>`: Table header section
* `<tbody>`: Main body of the table
* `<tfoot>`: Table footer section

They are not required for small tables, but they improve structure and accessibility, especially for larger data sets like your header, body, and footer are separated and easier to manage.

### Example:

```html
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Qty</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apples</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Oranges</td>
      <td>5</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>15</td>
    </tr>
  </tfoot>
</table>
```

### Should You Use Semantic Elements/tags for Them?

✅ Recommended for:

* Larger tables
* Tables rendered dynamically
* Improving accessibility and readability

❌ Not required for:

* Small, simple tables

---