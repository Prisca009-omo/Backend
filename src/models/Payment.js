import  { Schema, model } from "mongoose";

const paymentSchema = new Schema({
  transactionId: { type: String, required: true, unique: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: "NGN" },
  status: {
    type: String,
    enum: ["success", "failed", "pending"],
    required: true,
  },
  method: { type: String },
  reference: { type: String },
  timestamp: { type: Date, default: Date.now },
});

const PaymentModel = model("Payment", paymentSchema);

export default PaymentModel;
