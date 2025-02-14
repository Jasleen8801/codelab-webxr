const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/workshop/index.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
