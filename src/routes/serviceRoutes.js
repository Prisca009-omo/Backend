import { Router } from "express";
const router = Router();
import { find, findById } from "../models/Service";

// GET all services
router.get("/", async (req, res) => {
    const services = await find();
    res.json(services);
});

// GET service by ID (Week 2 refinement)
router.get("/:id", async (req, res) => {
    try {
        const service = await findById(req.params.id);
        if (!service) return res.status(404).json({ error: "Service not found" });
        res.json(service);
    } catch (err) {
        res.status(400).json({ error: "Invalid ID format" });
    }
});

export default router;
