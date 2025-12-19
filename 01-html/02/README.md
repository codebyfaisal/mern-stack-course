# Structure of a Website

## HTML: The Building Block of Websites

HTML (HyperText Markup Language) is like the **ABCs** of a website. It's the core language used to create and display content on the web. Every website uses HTML — it tells the browser what to show.

---

### Elements

- Elements are the **parts** that make up a web page.
- Each element has a **meaning or purpose**.
- Elements are made using **tags**.

---

### Tags

Tags are the **syntax** used to write HTML elements.

#### Syntax:
- **Opening tag**: `<tagname>`
- **Closing tag**: `</tagname>`
- **Self-closing tag** (no content): `<tagname />`

#### Types of Tags:
- **Paired Tags**: Have content inside (like `<p>hello</p>`)
- **Self-closing Tags**: Don’t have closing tag (like `<br />`)

---

### Nesting Elements

You can **place tags inside other tags**. This is called *nesting*.  
Example:
```html
<p>This is <strong>bold</strong> text inside a paragraph.</p>
```

---

### White Space

Extra spaces (even many in a row) are usually **ignored** by the browser.

---

### What HTML Looks Like Alone

If you only use HTML, the web page will look **plain** — like a basic document or text file.

---

## Attributes: Extra Info for Elements

Attributes give **extra information** to an element.

* Written **inside the opening tag**
* Syntax: `<tagname attribute="value">`

Example:

```html
<img src="image.jpg" />
```

Here, `src="image.jpg"` is an attribute.

---

## Text Formatting in HTML

You can format text using different tags:

* **Headings**: `<h1>` to `<h6>`
* **Paragraphs**: `<p>`
* **Line Breaks**: `<br />`
* **Horizontal Line**: `<hr />`
* **Bold/Italic**: `<b>`, `<i>`, `<strong>`, `<em>`
* **Other tags**:

  * `<small>`, `<s>`, `<u>`, `<sub>`, `<sup>`, `<code>`, `<kbd>`

> Again, extra **spaces are ignored** by default.

---

## Comments in HTML

* Syntax: `<!-- This is a comment -->`
* **Not shown** on the webpage
* Useful for **notes and reminders**
* Almost **every programming language** supports comments

---