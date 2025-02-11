import express from "express";
const app = express();
app.use = express.json();
app.get("/", (req, res) => {
  res.send("HI from server on  / route");
});
app.get("/test", (req, res) => {
  res.send("aaaaaa");
});
app.listen(1010, () => {
  console.log("Server running at PORT 1010");
});
