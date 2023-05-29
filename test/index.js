const { Dusk } = require("../dist");

async function main() {
  const url = new Dusk("https://jsonplaceholder.typicode.com/todos/:id", {
    id: 1,
  }).format();

  console.log(
    await url
      .fetch({
        method: "GET",
      })
      .then((r) => r.json())
  );
}

main();
