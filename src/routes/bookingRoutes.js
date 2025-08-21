const express = require("express");
const router = express.Router();

// Sample GET
router.get("/", (req, res) => {
    res.json([{ id: 1, service: "Web Design", customerName: "John Doe", status: "pending" }]);
});

module.exports = router;
