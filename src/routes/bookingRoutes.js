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
  // try {
  let myData = req.body;
  console.log(myData);
  const valid = bookingValidation(myData);
  console.log(typeof myData.customerPhoneNumber);

  const schedule = new ScheduleModel(myData);
  await schedule.save();

  console.log(valid);

  if (valid) {
    myData = {
      service: myData.service?.trim(),
      customerName: myData.customerName?.trim(),
      customerEmail: myData.customerEmail?.trim(),
      customerPhoneNumber: myData.customerPhoneNumber?.trim(),
      additionalInformation: myData.additionalInformation?.trim(),
    };

    return res.json({
      myService: myData.service,
      myCustomerName: myData.customerName,
      myCustomerEmail: myData.customerEmail,
      myCustomerPhoneNumber: myData.myCustomerPhoneNumber,
      additionalInformation: myData.additionalInformation,
    });
  } else {
    return res.status(404).send();
  }

  // } catch {
  //   return res.status(404).send();
  // }
});

export default scheduleRouter;
