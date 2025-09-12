# Structure of a Website

A website is built using different layers. The most basic and essential layer is **HTML**.

---

## HTML – The Foundation of a Website

- HTML stands for **HyperText Markup Language**.
- It is like the **ABCD** of a website — the most basic building block.
- **Without HTML, a website cannot exist**.
- It tells the browser **what content to show** and **how it's structured**.

---

## What is a Markup Language?

- A **markup language** uses **tags** to define elements on a page.
- These **tags** tell the browser how to display content (like headings, paragraphs, images, etc.).

---

## HTML Tags

Tags are special keywords used in angle brackets `< >` that define elements.

### Syntax of Tags:

Most HTML tags come in **pairs**:

- **Opening tag**: `<tagname>`
- **Closing tag**: `</tagname>`

Example:
```html
<p>This is a paragraph.</p>
````

Some tags are **self-closing**, which means they don’t need a closing tag:

Example:

```html
<br>   <!-- Line break -->
<img src="image.jpg">  <!-- Image -->
```

> Note: In modern HTML, self-closing tags do **not** require a `/` like `</tagname>`. Just `<img ...>` is fine.

---

## Paired vs Self-Closing Tags

* **Paired Tags**: Used when content is placed between an opening and a closing tag.

  * Example: `<p>Hello</p>`
* **Self-Closing Tags**: Used when no content goes inside the tag.

  * Example: `<img src="photo.jpg">`

---

## Nesting of Elements

**Nesting** means placing one HTML element inside another.

Example:

```html
<div>
  <p>This is a nested paragraph inside a div.</p>
</div>
```

> Always make sure to close inner tags before closing outer tags.

---

## Why HTML Alone Looks Plain

If you use only HTML, your webpage will look like a **basic Word document** — plain and simple.

That’s why we use **attributes** and other technologies (like CSS and JavaScript) to add design and functionality.

---

## HTML Attributes

Attributes give **extra information** about HTML elements.

* They are written inside the **opening tag**.
* Attributes follow a **key="value"** format.
* Multiple attributes are separated by **spaces**.

### Syntax:

```html
<tagname attributeName="value">Content</tagname>
```

Example:

```html
<a href="https://www.google.com">Go to Google</a>
```

---

## Tags That Require Attributes

Some tags **must have attributes** to work properly.

### Common Example:

```html
<img src="image.jpg" alt="A sample image">
```

* `src` defines the image file to show.
* `alt` provides alternate text if the image can't load.

Another example:

```html
<a href="https://example.com">Click here</a>
```

* `href` defines the link destination.

---

## Font and Text Formatting

HTML provides a variety of tags to control **how text appears** on the webpage.

### Headings

HTML has **six levels of headings**, from `<h1>` (most important) to `<h6>` (least important):

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
...
<h6>Smallest Heading</h6>
```

### Paragraphs

To add text blocks, use the `<p>` tag:

```html
<p>This is a paragraph of text.</p>
```

### Line Breaks and Horizontal Rules

* `<br>` – Adds a **line break** (moves to a new line).
* `<hr>` – Adds a **horizontal line** (used to separate content).

```html
<p>First line<br>Second line</p>
<hr>
```

### Text Styling Tags

You can emphasize or style text using these tags:

| Tag        | Purpose                         |
| ---------- | ------------------------------- |
| `<b>`      | Bold (no semantic meaning)      |
| `<strong>` | Bold with importance (semantic) |
| `<i>`      | Italic (no semantic meaning)    |
| `<em>`     | Emphasized (semantic italic)    |
| `<u>`      | Underlined text                 |
| `<s>`      | Strikethrough                   |
| `<small>`  | Smaller text                    |
| `<sub>`    | Subscript                       |
| `<sup>`    | Superscript                     |
| `<code>`   | Inline code formatting          |
| `<kbd>`    | Keyboard input                  |

Example:

```html
<p><strong>Important:</strong> Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
```

---

## White Space in HTML

* HTML **ignores extra spaces** and line breaks.
* Whether you add 1 or 10 spaces, the browser renders it as **one**.
* Use `<br>` for manual line breaks or `&nbsp;` for non-breaking spaces.

Example:

```html
<p>This     text     has     extra     spaces.</p>
```

Will render as:

> This text has extra spaces.

---

## Comments in HTML

Comments are used to add **notes**, **explanations**, or **temporary code disabling**.

### Syntax:

```html
<!-- This is a comment -->
```

### Notes:

* Comments are **not visible** in the browser.
* They are useful for **documenting** your code or **reminding yourself** of something.

Example:

```html
<!-- TODO: Add navigation bar here -->
```