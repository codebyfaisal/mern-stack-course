# DOM Elements Creation & Manipulation

## Creating Elements

| Method                     | Purpose                    |
| -------------------------- | -------------------------- |
| `document.createElement()` | Creates a new HTML element |

## Element Metadata

| Property   | Description         |
| ---------- | ------------------- |
| `tagName`  | Return Element’s tag name  |
| `nodeName` | Return Node type or name   |
| `hidden`   | Show / hide element without writing css |

## Data Attributes

| Feature           | Usage                  |
| ----------------- | ---------------------- |
| `data-*`          | Custom data storage    |
| `element.dataset` | Access data attributes |

## Inserting Elements

| Method          | Inserts Element Where? |
| --------------- | ---------------------- |
| `append()`      | Insert element at end of parent          |
| `prepend()`     | Insert element at beginning of parent    |
| `before()`      | Insert element before element         |
| `after()`       | Insert element after element          |
| `replaceWith()` | Replace element with another element        |

## Inserting Html strings

| Method                 | Description                |
| ---------------------- | -------------------------- |
| `insertAdjacentHTML()` | Insert HTML using position |

### Positions

* `beforebegin`
* `afterbegin`
* `beforeend`
* `afterend`

## Removing Elements

| Method     | Purpose         |
| ---------- | --------------- |
| `remove()` | Deletes element from dom or slective parent |

## Class Management

| Method               | Purpose             |
| -------------------- | ------------------- |
| `className`          | Get/set all classes  |
| `classList`          | Class list object   |
| `classList.add()`    | Add class           |
| `classList.remove()` | Remove class        |
| `classList.toggle()` | Toggle class        |

## Temporary Dom changes

| Feature                      | Description         |
| ---------------------------- | ------------------- |
| Page refresh                 | Resets DOM changes  |
| `document.designMode = "on"` | Makes page editable |