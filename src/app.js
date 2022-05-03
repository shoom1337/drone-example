const express = require("express");
const app = express();
const port = 3030;

app.get("/:path", (req, res) => {
  console.log(req.params);
  res.send(`hi, i'm express sample! Route: ${req.path}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
