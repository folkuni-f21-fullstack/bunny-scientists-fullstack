import express from "express";
const router = express.Router();

import db from "../db.js";
import { data as defaultData } from "../defaultData.js";
import { Order } from "../models.js";
import { isValidOrder } from "../validation.js";

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

router.post("/", async (req, res) => {
  let newOrder: Order = req.body;

  if (!newOrder) {
    console.log("no data");
    res.status(400).send("No data");
  } else if (isValidOrder(newOrder)) {
    if (!db.data) {
      db.data = defaultData;
    }
    addOrderNumber(newOrder);
    console.log(newOrder)
    db.data.orders.push(newOrder);
    await db.write();
    res.send(newOrder);
  } else {
    console.log("invalid Order");
    res.status(400).send("Invalid Order");
  }
});

function addOrderNumber(newOrder: Order) {
  if (typeof db.data?.baseOrderNumber === "string") {
    newOrder["orderNumber"] = db.data.baseOrderNumber;
  }
}


router.delete("/:id", async (req, res) => {
  if (!db.data) {
    res.sendStatus(404);
    return;
  }
  let id = req.params.id;
  let newOrders: Order[] = db.data.orders.filter((order) =>
    order.orderNumber !== id
  );
  if (newOrders.length < db.data.orders.length) {
    db.data.orders = newOrders;
    await db.write();
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

export default router;
