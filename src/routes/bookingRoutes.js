import { Router } from "express";
import ScheduleModel from "../models/Bookings.js";
const scheduleRouter = Router();

scheduleRouter.get("/schedules", async (req, res) => {
  const allSchedules = await ScheduleModel.find();
  res.json(allSchedules);
});

scheduleRouter.get("/schedules/:id", async (req, res) => {
  const theId = req.params.id;
  const idSchedule= await ScheduleModel.findById(theId);
  res.json(idSchedule);
});


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
