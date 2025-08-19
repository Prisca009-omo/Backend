import express from "express";

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("My sample data");
});

app.listen(PORT, () => {
  console.log("App is listening on port", PORT);
});
