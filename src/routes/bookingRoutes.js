import { Router } from "express";
import ScheduleModel from "../models/Bookings.js";
import { bookingValidation } from "../validation/bookingValidation.js";
const scheduleRouter = Router();

scheduleRouter.get("/schedules", async (req, res) => {
  const allSchedules = await ScheduleModel.find();
  res.json(allSchedules);
});

scheduleRouter.get("/schedules/:id", async (req, res) => {
  const theId = req.params.id;
  const idSchedule = await ScheduleModel.findById(theId);
  res.json(idSchedule);
});

scheduleRouter.post("/addSchedule", async (req, res) => {
  let myData = req.body;
  const valid = bookingValidation(myData);

  // const schedule = new ScheduleModel(myData);
  // await schedule.save();
  if (valid) {
    myData = {
      service: myData.service?.trim(),
      customerName: myData.customerName?.trim(),
      customerEmail: myData.customerEmail?.trim(),
      status: myData.status?.trim(),
    };

    return res.json({
      myService: myData.service,
      myCustomerName: myData.customerName,
      myCustomerEmail: myData.customerEmail,
      myStatus: myData.status,
    });
  }

  return res.status(404).send();
});

export default scheduleRouter;
