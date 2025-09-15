import { Schema, model } from "mongoose";

const serviceSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: String, required: true },
    category: String,
    image: String,
  },
  { timestamps: true }
);

const ServiceModel = model("Service", serviceSchema);

export default ServiceModel;
