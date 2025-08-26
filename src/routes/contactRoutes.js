import { Router } from "express";
import ContactModel from "../models/Contact.js";
// import { router } from "../server";
const contactRouter = Router();

// Sample GET
contactRouter.get("/prisca", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Jane Doe",
      email: "jane@email.com",
      message: "Interested in services",
    },
  ]);
});

contactRouter.post("/addContact", async (req, res) => {
  const myData = req.body;

  const contact = new ContactModel(myData);
  await contact.save();

  res.json({
    myName: myData.name,
    myEmail: myData.email,
    myMessage: myData.message,
  });
});

export default contactRouter;
