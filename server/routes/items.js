const express = require("express");
const { Item } = require("../models");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
    const items = await Item.findAll(); 
    res.json(items); 
})

module.exports = router;
