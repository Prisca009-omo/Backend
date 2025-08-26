import { Router } from "express";

import ServiceModel from "../models/Service.js";

// import { find, findById } from "../models/Service.js";

const serviceRouter = Router();

// GET all services
// serviceRouter.get("/", async (req, res) => {
//   const services = await find();
//   res.json(services);
// });

// GET service by ID (Week 2 refinement)
// serviceRouter.get("/:id", async (req, res) => {
//   try {
//     const service = await findById(req.params.id);
//     if (!service) return res.status(404).json({ error: "Service not found" });
//     res.json(service);
//   } catch (err) {
//     res.status(400).json({ error: "Invalid ID format" });
//   }
// });

serviceRouter.post("/addService", async (req, res) => {
  const myData = req.body;

  const service = new ServiceModel(myData);
  await service.save();

  res.json({
    myTitle: myData.title,
    myDescription: myData.description,
    myPrice: myData.price,
    myCategory: myData.category,
    myImage: myData.image,
  });
});

export default serviceRouter;
