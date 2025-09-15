import { Router } from "express";
import PaymentModel from "../models/Payment.js";

const paymentRouter = Router();

paymentRouter.post("/payment", async (req, res) => {
  try {
    const paymentData = req.body;

    console.log("Payment webhook received:", paymentData);

    res.json({ success: true, message: "Payment received and processed" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
paymentRouter.post("/addPayment", async (req, res) => {
  const myData = req.body;

  const payment = new PaymentModel(myData);
  await payment.save();

  res.json({
    myTransactionId: myData.transactionId,
    myUserId: myData.userId,
    myAmount: myData.amount,
    myCurrency: myData.currency,
    myStatus: myData.status,
    myMethod: myData.method,
    myReference: myData.reference,
    myTimestamp: myData.timestamp,
  });
});

export default paymentRouter;
