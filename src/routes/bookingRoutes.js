import { Router } from "express";
const scheduleRouter = Router();

// Sample GET
scheduleRouter.get("/t", (req, res) => {
  res.json([
    {
      id: 1,
      service: "Web Design",
      customerName: "John Doe",
      status: "pending",
    },
  ]);
});
scheduleRouter.post("/addSchedule", (req, res) => {
  const myData = req.body;
  res.json({
    mySevice: myData.service,
    mycustomerName: myData.customerName,
    myStatus: myData.status,
  });
});

export default scheduleRouter;
