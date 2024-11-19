const express = require("express");
const { Item } = require("../models");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

router.post("/", async (req, res) => {
  const { name, description, price, category, image } = req.body;
  const newItem = await Item.create({ name, description, price, category, image });

  res.json(newItem);
});

module.exports = router;
