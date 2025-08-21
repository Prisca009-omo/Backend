const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    status: { type: String, enum: ["pending", "confirmed"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
