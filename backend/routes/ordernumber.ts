import express from "express";
const router = express.Router();
import db from "../db.js";

router.get("/", (req, res) => {
  if (db.data?.baseOrderNumber) {
    res.send(db.data.baseOrderNumber);
  } else {
    res.sendStatus(404);
  }
});

export default router;
