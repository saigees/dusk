const { Dusk } = require("../dist");

const url = new Dusk("https://localhost:5432/:user", {
  user: "saige",
  admin: true,
}).format()

console.log(url)
