import { Schema, model } from "mongoose";

const contactSchema = new Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);
const ContactModel = model("Contact", contactSchema);

export default ContactModel;
