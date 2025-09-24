# HTML Forms
Form, a powerful tool to collect information from users(name, email, message, etc.)
Forms are used when you want to collect information from users, like their name, email, or message. Forms in HTML are made with the `<form>` tag.

Here’s how you start:

```html
<form>
  <!-- form elements go here -->
</form>
```
---

## Form Elements

Forms are made of different input fields. Here are the basics:
In forms elements mostly we will use input fields/elements and they have similar types of attributes like `type`, `name`, `placeholder`.

Input fields are made with the `<input>` tag and it is a self-closing tag.

> `type` is used to specify the type of input field.
> `name` is used to specify the name of the input field.
> `placeholder` is used to specify the placeholder text of the input field.

* **Text input**: For short text, like a name or email.

```html
<input type="text" name="username" placeholder="Enter your name">
```

* **Email input**: For emails (has built-in validation).

```html
<input type="email" name="email" placeholder="Your email">
```

* **Password input**: Hides the text you type (for passwords).

```html
<input type="password" name="password" placeholder="Your password">
```

* **Submit button**: Sends the form when clicked.

```html
<button type="submit">Submit</button>
```
> button is a pair tag and it has content in it like "submit" or "save" etc.

---

### Example Form

Here’s a simple form that asks for a name and email:

```html
<form action="/submit" method="POST">
  <input type="text" name="name" placeholder="Your name">
  <input type="email" name="email" placeholder="Your email">
  <button type="submit">Submit</button>
</form>
```

---

# Id and Class Selectors/Attributes

## Class

In HTML, `class` is like a tag you stick on similar things. You can give class to multiple elements.

For example:
```html
<h1 class="big-heading">Big Heading</h1>
<p class="big-heading">Big Paragraph</p>
```

Here, both will share the same styling because they have the class `big-heading`. Easy, right?

---

## Id

`id` is for **one specific element**. It’s like giving a unique name to something. You can't repeat an `id` on multiple elements.

For example:

```html
<h1 id="unique-heading">Unique Heading</h1>
```

Each `id` should be different from others!

---