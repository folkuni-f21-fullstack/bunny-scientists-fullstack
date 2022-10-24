import express, { Request, Response } from "express";
const router = express.Router();

import db from "../db.js";
import { Order } from "../models.js";
// import { isValidOrder } from '../validation.js'
import { data as defaultData } from "../defaultData.js";

//GET hämta ordrar
//POST kund lägger order från varukorg
//DELETE ta bort ordrar när man skickar vidare till archieve
//DELETE ta bort order om användare vill ändra sin order

// ändra ordrar lokalt innan man skickar vidare till archieve

router.get("/", (req, res) => {
  if (db.data?.orders) {
    res.send(db.data.orders);
  } else {
    res.sendStatus(404);
  }
});

export default router;
