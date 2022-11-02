//GET hämta archive
//POST lägg till från orders till archive
import express, { Request, Response } from 'express';
const router = express.Router();

import db from '../db.js';
import { data as defaultData } from '../defaultData.js';
import { ArchiveItem } from '../models.js';
import { isValidOrder } from '../validation.js';

router.get('/', (req, res) => {
	if (db.data?.archive) {
		res.send(db.data.archive);
	} else {
		res.sendStatus(404);
	}
});

router.post('/', async (req, res) => {
	let newOrder: ArchiveItem = req.body;
	if (!newOrder) {
		res.status(400).send('No data');
    console.log(newOrder)

	} else if (isValidOrder(newOrder)) {
		if (!db.data) {
			db.data = defaultData;
		}
		db.data.archive.push(newOrder);
		await db.write();
		res.sendStatus(200);
	} else {
		res.status(400).send('Invalid Order');
	}
});

export default router;
