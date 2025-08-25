import { Schema, model } from "mongoose";

const contactSchema = new Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

export default model("Contact", contactSchema);
