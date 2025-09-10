# HTML
HTML (HyperText Markup Language) is the standard markup language for creating web pages.

## HTML History
> HTML was created by the World Wide Web Consortium (W3C) in 1993.
> HTML is used to structure and display content on the World Wide Web.
> HTML is a markup language used to create web pages.
> HTML elements are the building blocks of HTML pages.
> HTML elements are represented by tags, which are used to wrap and describe different types of content.

## Markup Language
A markup language is a language used to describe the structure and content of a document.

## Markup vs Programming Language
Markup languages are used to describe the structure and content of a document, while programming languages are used to create programs that perform specific tasks.

## Basic Structure  
The basic layout of a webpage using `<html>`, `<head>`, and `<body>` tags.

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

## Doctype

`<!DOCTYPE html>` tells the browser we are using HTML5.

## Types of Tags

### Pair Tags

Tags that come in pairs: an opening tag and a closing tag with `/`.
Example: `<p>content</p>`

### Self-Closing Tags

Tags that don’t need a closing tag, often used for empty elements or with attributes.
Example: `<img src="image.jpg" />`

## Head

Contains page info like title, links to CSS, and other metadata.

```html
<head> </head>
```

### Title

Sets the page title shown on the browser tab.

```html
<title>My First Page</title>
```

### Meta Tags

Provide extra info about the page, like charset or mobile settings.

### Links

Used to connect external files like CSS stylesheets.

## Body

The main visible part of the webpage.

```html
<body> 
    <!-- content -->
</body>
```

### Headings

Page titles or subtitles from `<h1>` (biggest) to `<h6>` (smallest).

### Paragraphs

Blocks of text wrapped in `<p>` tags.

### Bold

Makes text bold using `<b>` or `<strong>`.

### Italic

Makes text italic using `<i>` or `<em>`.

### Superscript

Text shown slightly above the line using `<sup>` (e.g., x²).

### Subscript

Text shown slightly below the line using `<sub>` (e.g., H₂O).

### Whitespace

Multiple spaces are reduced to one in HTML; use `&nbsp;` for extra spaces.
