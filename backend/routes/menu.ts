//GET menu
//mappa ut från databas istället för data.jsonimport express, { Request, Response } from "express";

import express, { Request, Response } from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", (req, res) => {
  if (db.data?.menu) {
    res.send(db.data.menu);
  } else {
    res.sendStatus(404);
  }
});

export default router;
