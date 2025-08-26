import { Router } from "express";
import ScheduleModel from "../models/Bookings.js";
const scheduleRouter = Router();

// Sample GET
// scheduleRouter.get("/t", (req, res) => {
//   res.json([
//     {

//       service: "Web Design",
//       customerName: "John Doe",
//       status: "pending",
//     },
//   ]);
// });

scheduleRouter.post("/addSchedule", async (req, res) => {
  const myData = req.body;

  const schedule = new ScheduleModel(myData);
  await schedule.save();

  res.json({
    mySevice: myData.service,
    mycustomerName: myData.customerName,
    mycustomerEmail: myData.customerEmail,
    myStatus: myData.status
  });
});

export default scheduleRouter;
