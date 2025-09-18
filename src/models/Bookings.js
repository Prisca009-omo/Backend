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
    customerPhoneNumber: { type: Number, required: true },
    additionalInformation: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed"],
      default: "pending",
    },
  },
  { timestamps: true }
);
const ScheduleModel = model("Booking", bookingSchema);

export default ScheduleModel;
