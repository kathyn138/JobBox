/** Route to wake up the Heroku backend. */

const express = require("express");
const router = new express.Router();

router.get("/", async function (req, res, next) {
  try {
    return res.json("backend is awake!");
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
