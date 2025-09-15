import express, { Router } from "express";
import { connect } from "mongoose";
import contactRouter from "./routes/contactRoutes.js";
import scheduleRouter from "./routes/bookingRoutes.js";
import serviceRouter from "./routes/serviceRoutes.js";
import PaymentRouter from "./models/Payment.js";
import path from "path";
import { fileURLToPath } from "url";
import paymentRouter from "./routes/paymentRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/thl_db";

const app = express();

export const imageDirectory = path.join(__dirname, "public");
app.use("/image", express.static(imageDirectory));

app.use(express.json());

app.use("/contact", contactRouter);

app.use("/schedule", scheduleRouter);

app.use("/service", serviceRouter);

app.use("/payment", paymentRouter);

connect(MONGO_URI)
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(3000, () =>
      console.log("Server running on http://localhost:3000")
    );
  })
  .catch((err) => console.error(" DB connection error:", err));
