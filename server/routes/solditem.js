const express = require("express");
const router = express.Router();
const SoldItem = require("../models/soldItem");


router.get("/find", async (req, res) => {
  try {
    const userId = req.headers.userid;
    const Ewaste = req.headers.ewaste;
    
    if (userId) {
      const soldItems = await SoldItem.find({ userId});
      res.json(soldItems);
    } else if (Ewaste) {
      // If only 'userId' is presentß
      // Query your data based on only 'userId'
      const soldItems = await SoldItem.find({ Ewaste });
      res.json(soldItems);
    }else {
      // Handle the case where either 'userId' or 'Ewaste' is missing in the header
      res.status(400).json({ message: "Bad Request: Both 'userId' and 'Ewaste' should be present in the headers" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



router.post("/add", async (req, res) => {
  try {
    const { name, credit, userId , model, Ewaste } = req.body;

    const newSoldItem = new SoldItem({ name, credit, userId , model, Ewaste });

    await newSoldItem.save();

    res.status(201).json(newSoldItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;