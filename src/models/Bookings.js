import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default model("Booking", bookingSchema);
