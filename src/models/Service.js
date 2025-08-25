import { Schema, model } from "mongoose";

const serviceSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: String,
    image: String,
  },
  { timestamps: true }
);

export default model("Service", serviceSchema);
