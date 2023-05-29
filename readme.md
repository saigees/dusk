![Dusk Banner](https://cdn.rayna.tech/dusk-banner.png)

A small 90MB~ url library for node applications

---

### Examples

```js
const { Dusk } = require("duskurl");

const url = new Dusk("https://jsonplaceholder.typicode.com/todos/:id", {
  id: 1,
}).format();
// Replaces the :id with 1

console.log(
  await url
    .fetch({
      method: "GET",
    })
    .then((r) => r.json())
) // Returns the json data
```

```js
const { Dusk } = require("duskurl");

const url = new Dusk("https://example.com/:id", {
  id: 1,
  admin: true
}).format();
// Returns "https://example.com/1?admin=true

console.log(url)
```
