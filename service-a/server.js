const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World, fix lai format, dug ghrc.iofa update, fix fasdfafasfxem co chay dung khongfafaf fix  ");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});