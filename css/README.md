# What is CSS?

CSS (Cascading Style Sheets) is a **style sheet language** used to describe the **presentation** (look and formatting) of a document written in a markup language like **HTML** or **XML** (including XML-based languages like **SVG**, **MathML**, or **XHTML**).

It allows developers to control the layout, colors, fonts, spacing, and many other aspects of how elements appear on a web page.

---

## CSS Syntax

A basic CSS rule (also called a "rule set") looks like this:

```css
selector {
  property: value;
}
```

Example:

```css
p {
  color: red;
}
```

### CSS Rule Components:

* **Selector**: Specifies which HTML element(s) the rule applies to (`p` in the example).
* **Property**: The aspect of the element you want to change (`color`).
* **Value**: The setting for that property (`red`).

---

## How to Use CSS

There are three main ways to apply CSS to HTML:

1. **Inline CSS**

   * Added directly to an HTML element using the `style` attribute.
   * Example:

     ```html
     <p style="color: blue;">This is a blue paragraph.</p>
     ```

2. **Internal CSS**

   * Written inside a `<style>` tag within the `<head>` section of the HTML document.
   * Example:

     ```html
     <head>
       <style>
         p {
           font-size: 18px;
         }
       </style>
     </head>
     ```

3. **External CSS**

   * Written in a separate `.css` file and linked to the HTML document using a `<link>` tag in the `<head>`.
   * Example:

     ```html
     <head>
       <link rel="stylesheet" href="styles.css">
     </head>
     ```
---