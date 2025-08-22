import express from "express";
import { MongoClient } from "mongodb";

const app = express();

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from Express + MongoDB!");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
