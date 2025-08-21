const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

// GET all services
router.get("/", async (req, res) => {
    const services = await Service.find();
    res.json(services);
});

// GET service by ID (Week 2 refinement)
router.get("/:id", async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) return res.status(404).json({ error: "Service not found" });
        res.json(service);
    } catch (err) {
        res.status(400).json({ error: "Invalid ID format" });
    }
});

module.exports = router;
