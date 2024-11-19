const express = require("express");
const { Item } = require("../models");

const router = express.Router();
router.use(express.json());

// GET all items
router.get("/items", async (req, res) => {
    const items = await Item.findAll(); // Fetch all items from the db
    res.json(items); // Send the items as a JSON response
})

module.exports = router;
