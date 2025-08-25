import { Router } from "express";
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

contactRouter.post("/addContact", (req, res) => {
  const myData = req.body;
res.json({myName: myData.name, myEmail: myData.email});
});

export default contactRouter;
