# Hoisting
## Function expressions
```js
const ftn = function () {
    console.log("Hello")
}
```
```js
const ftn = ()=> {
    console.log("Hello")
}
```

<br>
<br>

# DOM
Document Object Model
Nodes

<!-- HTMLCollection not array but it looks like array -->
<!-- Below will be most of array like but not actually array -->
console.log(document.documentElement)
console.log(window)
console.log(this)
console.log(document)

<!-- Root Node -->
console.log(document.documentElement)
console.log(document.body)
console.log(document.head)
<!-- Children Nodes -->

console.log(document.body.children)
console.log(document.body.childNodes)
console.log(document.body.firstChild)
console.log(document.body.lastChild)

<!-- convert to aray -->
const childrens = Array.from(document.body.children)
console.log(childrens)