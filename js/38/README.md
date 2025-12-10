# **DOM (Document Object Model)**

The **DOM** is a programming interface for HTML and XML documents. It represents the page in a structured way so JavaScript can change the **content**, **structure**, and **styling** dynamically.

DOM falls under the broader **BOM (Browser Object Model)**, which represents the entire browser environment.

## **DOM vs BOM (Short & Clear)**

| Feature    | BOM                                          | DOM                                                              |
| ---------- | -------------------------------------------- | ---------------------------------------------------------------- |
| Stands For | Browser Object Model                         | Document Object Model                                            |
| Scope      | Deals with the browser environment           | Deals with the webpage content                                   |
| Root       | `window`                                     | `document`                                                       |
| Standard   | Not fully standardized                       | Fully standardized by W3C                                        |
| Examples   | `window.location`, `alert()`, `setTimeout()` | `document.getElementById()`, `.innerHTML`, `.addEventListener()` |

<br>
<br>

## **DOM SELECTORS METHODS**

| Selector / Method          | Syntax                                     | Returns          | Notes                      |
| -------------------------- | ------------------------------------------ | ---------------- | -------------------------- |
| **getElementById**         | `document.getElementById("id")`            | Single Element   | Fastest, selects by ID     |
| **getElementsByClassName** | `document.getElementsByClassName("class")` | *HTMLCollection* | Live collection, NOT array |
| **getElementsByTagName**   | `document.getElementsByTagName("tag")`     | *HTMLCollection* | Live, requires index       |
| **querySelector**          | `document.querySelector("cssSelector")`    | First Element    | Uses full CSS selectors    |
| **querySelectorAll**       | `document.querySelectorAll("cssSelector")` | *NodeList*       | Supports forEach           |
| **getElementsByName**      | `document.getElementsByName("name")`       | NodeList         | Usually for inputs         |
| **CSS ID Selector**        | `#id`                                      | Element          | Used inside querySelector  |
| **CSS Class Selector**     | `.class`                                   | Element(s)       | Used inside QS / QSA       |
| **CSS Attribute Selector** | `input[type="password"]`                   | Element(s)       | Used inside QS/QSA         |
| **CSS Child Selectors**    | `div > p`, `ul li:first-child`             | Element(s)       | Full CSS support           |

## **CONTENT ACCESSING METHODS**

| Property        | Example          | Returns                     | Notes                         |
| --------------- | ---------------- | --------------------------- | ----------------------------- |
| **textContent** | `el.textContent` | All text (including hidden) | Shows even `display:none`     |
| **innerText**   | `el.innerText`   | Visible text only           | Respects CSS visibility       |
| **innerHTML**   | `el.innerHTML`   | HTML + text                 | Returns HTML structure        |
| **outerHTML**   | `el.outerHTML`   | Element + innerHTML         | Useful for copying whole node |

## **MODIFYING CONTENT**

| Operation            | Syntax                          | Effect              |
| -------------------- | ------------------------------- | ------------------- |
| **Set text**         | `el.textContent = "Hello"`      | Replaces text only  |
| **Set visible text** | `el.innerText = "Hello"`        | Affected by CSS     |
| **Set HTML**         | `el.innerHTML = "<b>Hello</b>"` | Parses HTML         |
| **Append HTML**      | `el.innerHTML += "More"`        | Adds inside element |

## **ATTRIBUTE METHODS**

| Method                    | Example                                    | Purpose                |
| ------------------------- | ------------------------------------------ | ---------------------- |
| **getAttribute**          | `el.getAttribute("class")`                 | Get attribute value    |
| **setAttribute**          | `el.setAttribute("class", "heading test")` | Overwrites attribute   |
| **removeAttribute**       | `el.removeAttribute("id")`                 | Remove attribute       |
| **el.id**                 | `el.id = "title"`                          | Direct property access |
| **el.className**          | `el.className = "heading red"`             | Replaces class list    |
| **el.classList.add()**    | `el.classList.add("active")`               | Add class safely       |
| **el.classList.remove()** | `el.classList.remove("old")`               | Remove class           |
| **el.classList.toggle()** | `el.classList.toggle("dark")`              | Toggle on/off          |

## **STYLE MANIPULATION**

| Property          | Syntax                                         | Notes           |
| ----------------- | ---------------------------------------------- | --------------- |
| Direct Style      | `el.style.color = "red"`                       | Inline style    |
| Background        | `el.style.backgroundColor = "green"`           | camelCase only  |
| Padding           | `el.style.padding = "10px"`                    | Only inline     |
| Border Radius     | `el.style.borderRadius = "10px"`               | camelCase style |
| Full style string | `el.style.cssText = "color:red; padding:10px"` | Sets multiple   |

## **NODE LIST vs HTML COLLECTION**
Both are array like collections/structures, but different in contents and behaviors.

| Feature                | NodeList           | HTMLCollection                                   |
| ---------------------- | ------------------ | ------------------------------------------------ |
| Content                | Any type of node like elements or text or comment or attribute or document  | Only elements                                    | 
| Returned by            | `querySelectorAll` | `getElementsByClassName`, `getElementsByTagName` |
| Type                   | Array-like         | Array-like                                       |
| Live?                  | ❌ No               | ✔️ Yes (auto-updates)                            |
| Supports forEach       | ✔️ Yes             | ❌ No                                             |
| Needs index            | ✔️ Yes             | ✔️ Yes                                           |
| Must convert to Array? | Optional           | Often needed                                     |

## **CONVERTING TO ARRAY**

| Task                   | Syntax                   |
| ---------------------- | ------------------------ |
| NodeList → Array       | `Array.from(nodeList)`   |
| HTMLCollection → Array | `Array.from(collection)` |
| Spread operator        | `[...nodeList]`          |

## **LOOPING SELECTED ELEMENTS**

| Loop Type    | Example                             | Works On              |
| ------------ | ----------------------------------- | --------------------- |
| **forEach**  | `nodes.forEach(el => {})`           | NodeList only         |
| **for..of**  | `for (el of nodes) {}`              | Both                  |
| **for loop** | `for (let i=0; i<n.length; i++) {}` | Both                  |
| **for..in**  | ❌ Avoid                             | Not correct for lists |

<br>
<br>

## **DOM Properties**

| Property                                                | Returns            | Includes Text Nodes? |
| ----------------------------------------------- | ------------------ | -------------------- |
| `childNodes`                                    | All nodes          | ✔ Yes                |
| `children`                                      | Only elements      | ❌ No                 |
| `firstChild` / `lastChild`                      | First/last node    | ✔ Yes                |
| `firstElementChild` / `lastElementChild`        | First/last element | ❌ No                 |
| `nextSibling` / `previousSibling`               | Adjacent node      | ✔ Yes                |
| `nextElementSibling` / `previousElementSibling` | Adjacent element   | ❌ No                 |
| `parentElement`                                 | Parent element     | ❌ No                                    |

