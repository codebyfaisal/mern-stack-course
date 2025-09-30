# Colors

Colors are used in CSS to change the color of text, background, borders, and other elements on the page.

## Types of Colors

There are different ways to add colors in CSS:

### - Color Names

You can use simple names like:

* `red`, `blue`, `green`, `black`, `white`, etc.
* There are around 140+ color names, but it can depend on the browser.

```css
h1 {
  color: red;
}
```

---

### - RGB (Red, Green, Blue)

This lets you create a color by mixing red, green, and blue values.

* Each value goes from 0 to 255.

```css
p {
  color: rgb(255, 0, 0); /* red */
}
```

---

### - RGBA (Red, Green, Blue, Alpha)

Same as RGB but with an extra value for **alpha**, which controls **transparency**.

* `0` = fully transparent
* `1` = fully visible (opaque)

```css
div {
  background-color: rgba(0, 0, 255, 0.5); /* half transparent blue */
}
```

---

### - HEX (Hexadecimal)

Uses `#` followed by 6 characters (numbers and letters) to make a color.

```css
body {
  background-color: #2e6d2eff; /* green */
}
```

Some common ones:

* `#000000` = black
* `#ffffff` = white
* `#ff0000` = red

---

### - HSL (Hue, Saturation, Lightness)

This one uses:

* **Hue**: a number from 0–360 (color wheel)
* **Saturation**: how strong the color is (0%–100%)
* **Lightness**: how light or dark it is (0%–100%)

```css
span {
  color: hsl(120, 100%, 50%); /* green */
}
```

---