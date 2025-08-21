const express = require("express");
const router = express.Router();

// Sample GET
router.get("/", (req, res) => {
    res.json([{ id: 1, name: "Jane Doe", email: "jane@email.com", message: "Interested in services" }]);
});

module.exports = router;
