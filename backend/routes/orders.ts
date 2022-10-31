import express, { Request, Response } from 'express';
const router = express.Router();

import db from '../db.js';
import { data as defaultData } from '../defaultData.js';
import { Order } from '../models.js';
import { isValidOrder } from '../validation.js';

//GET hämta ordrar
//POST kund lägger order från varukorg
//DELETE ta bort ordrar när man skickar vidare till archieve
//DELETE ta bort order om användare vill ändra sin order

// ändra ordrar lokalt innan man skickar vidare till archieve

router.get('/', (req, res) => {
	if (db.data?.orders) {
		res.send(db.data.orders);
	} else {
		res.sendStatus(404);
	}
});

router.post('/', async (req, res) => {
	let newOrder: Order = req.body;

	if (!newOrder) {
		res.status(400).send('No data');
	} else if (isValidOrder(newOrder)) {
		if (!db.data) {
			db.data = defaultData;
		}
		db.data.orders.push(newOrder);
		await db.write();
		res.sendStatus(200);
	} else {
		res.status(400).send('Invalid Order');
	}
});

router.delete('/:id', async (req, res) => {
	if (!db.data) {
		res.sendStatus(404);
		return;
	}
  console.log(typeof req.params.id)
	let id: number = parseInt(req.params.id)
	let newOrders: Order[] = db.data.orders.filter(order => order.orderNumber !== id);
  console.log(id)
  console.log(newOrders)
	if (newOrders.length < db.data.orders.length) {
		db.data.orders = newOrders;
		await db.write();
		res.sendStatus(200);
	} else {
		res.sendStatus(404);
	}
});

export default router;
