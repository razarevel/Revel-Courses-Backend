const express = require("express");
const router = express.Router();
router.get("/goals", (req, res) => {
  res.send("Hellow from user");
});
module.exports = router;
