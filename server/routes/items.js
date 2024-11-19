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

router.delete('/:id', async (req, res) => { 
  const { id } = req.params; 
  await Item.destroy({ where: { id } }); 
  res.status(204).send('DELETE request received');
})
module.exports = router;
