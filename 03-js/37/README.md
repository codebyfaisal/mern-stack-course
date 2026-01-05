## DOM (Document Object Model)

The **DOM** is a programming interface for HTML and XML documents. It represents the page in a structured way so JavaScript can change the **content**, **structure**, and **styling** dynamically.

DOM falls under the broader **BOM (Browser Object Model)**, which represents the entire browser environment.

## DOM vs BOM

| Feature    | BOM                                          | DOM                                                              |
| ---------- | -------------------------------------------- | ---------------------------------------------------------------- |
| Stands For | Browser Object Model                         | Document Object Model                                            |
| Scope      | Deals with the browser environment           | Deals with the webpage content                                   |
| Root       | `window`                                     | `document`                                                       |
| Standard   | Not fully standardized                       | Fully standardized by W3C                                        |
| Examples   | `window.location`, `alert()`, `setTimeout()` | `document.getElementById()`, `.innerHTML`, `.addEventListener()` |

<br>

## DOM selector methods

| Selector / Method          | Syntax                                     | Returns        | Notes                  |
| -------------------------- | ------------------------------------------ | -------------- | ---------------------- |
| **getElementById**         | `document.getElementById("id")`            | Single Element | Fastest, selects by ID |
| **getElementsByClassName** | `document.getElementsByClassName("class")` | HTMLCollection | Live collection        |
| **getElementsByTagName**   | `document.getElementsByTagName("tag")`     | HTMLCollection | Live, needs index      |
| **querySelector**          | `document.querySelector("cssSelector")`    | First Element  | Uses CSS selectors     |
| **querySelectorAll**       | `document.querySelectorAll("cssSelector")` | NodeList       | Supports forEach       |
| **getElementsByName**      | `document.getElementsByName("name")`       | NodeList       | Mostly used for inputs |

## Css selectors

| Selector Type                | Example                     | Purpose              |
| ---------------------------- | --------------------------- | -------------------- |
| **ID Selector**              | `#id`                       | Select by ID         |
| **Class Selector**           | `.class`                    | Select by class      |
| **Attribute Selector**       | `input[type="password"]`    | Select by attribute  |
| **Child / Pseudo Selectors** | `div > p`, `li:first-child` | Structural selection |

## Content accessing methods

| Property        | Example          | Returns                 | Notes                   |
| --------------- | ---------------- | ----------------------- | ----------------------- |
| **textContent** | `el.textContent` | All text (incl. hidden) | Ignores CSS             |
| **innerText**   | `el.innerText`   | Visible text only       | Respects CSS            |
| **innerHTML**   | `el.innerHTML`   | HTML + text             | Parses HTML             |
| **outerHTML**   | `el.outerHTML`   | Element + innerHTML     | Includes element itself |

## Modifying content

| Operation        | Syntax                          | Effect        |
| ---------------- | ------------------------------- | ------------- |
| Set text         | `el.textContent = "Hello"`      | Text only     |
| Set visible text | `el.innerText = "Hello"`        | CSS affected  |
| Set HTML         | `el.innerHTML = "<b>Hello</b>"` | Replaces HTML |

## Attribute methods

| Method                  | Example                               | Purpose              |
| ----------------------- | ------------------------------------- | -------------------- |
| getAttribute            | `el.getAttribute("class")`            | Read attribute       |
| setAttribute            | `el.setAttribute("class", "heading")` | Overwrites attribute |
| removeAttribute         | `el.removeAttribute("id")`            | Removes attribute    |
| `el.id`                 | `el.id = "title"`                     | Direct property      |
| `el.className`          | `el.className = "box red"`            | Replaces classes     |
| `el.classList.add()`    | `el.classList.add("active")`          | Safe add             |
| `el.classList.remove()` | `el.classList.remove("old")`          | Remove class         |
| `el.classList.toggle()` | `el.classList.toggle("dark")`         | Toggle class         |

## Style Manipulation

| Property      | Syntax                               | Notes       |
| ------------- | ------------------------------------ | ----------- |
| Color         | `el.style.color = "red"`             | Inline only |
| Background    | `el.style.backgroundColor = "green"` | camelCase   |
| Padding       | `el.style.padding = "10px"`          | Inline      |
| Border Radius | `el.style.borderRadius = "10px"`     | camelCase   |

## Nodelist vs HTMLcollection

| Feature     | NodeList         | HTMLCollection |
| ----------- | ---------------- | -------------- |
| Content     | All nodes        | Elements only  |
| Live        | ❌ No             | ✔️ Yes         |
| forEach     | ✔️ Yes           | ❌ No           |
| Returned By | querySelectorAll | getElements*   |

## DOM traversal properties

| Property                 | Returns          |
| ------------------------ | ---------------- |
| `parentElement`          | Parent element   |
| `children`               | Child elements   |
| `childNodes`             | All child nodes  |
| `firstElementChild`      | First child      |
| `lastElementChild`       | Last child       |
| `nextElementSibling`     | Next sibling     |
| `previousElementSibling` | Previous sibling |
## References
- [MDN DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
