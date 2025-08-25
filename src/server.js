import express, { Router } from "express";
import { connect } from "mongoose";
import contactRouter from "./routes/contactRoutes.js";
import scheduleRouter from "./routes/bookingRoutes.js";

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/thl_db";

const app = express();

app.use(express.json());

app.use("/contact", contactRouter);

app.use("/schedule", scheduleRouter)

connect(MONGO_URI)
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(3000, () =>
      console.log("Server running on http://localhost:3000")
    );
  })
  .catch((err) => console.error(" DB connection error:", err));
