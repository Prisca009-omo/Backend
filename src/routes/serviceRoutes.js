import { Router } from "express";

import ServiceModel from "../models/Service.js";

const serviceRouter = Router();

serviceRouter.get("/services", async (req, res) => {
  const allServices = await ServiceModel.find();
  res.json(allServices);
});

serviceRouter.get("/services/:id", async (req, res) => {
  const theId = req.params.id;
  const idService = await ServiceModel.findById(theId);
  res.json(idService);
});

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
