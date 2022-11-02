import express, { Request, Response } from 'express';
import db from "../db.js";
const router = express.Router();

type IdObject = { id: string };
type IdParam = Request<IdObject>;

router.get("/", (req, res) => {
  if (typeof db.data?.baseOrderNumber === "string") {
    res.send(JSON.stringify(db.data.baseOrderNumber));
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
});

router.put("/:id", async (req: IdParam, res) => {
  if (!db.data) {
		res.sendStatus(404)
		return
	}
  let id: string = req.params.id
  let compareID:number = parseInt(id)
  compareID++
  id = JSON.stringify(compareID)
	if( compareID > 1000 ) {
		db.data.baseOrderNumber = id
		await db.write()
		res.sendStatus(200)
	} else {
		res.sendStatus(400)
	}
});

export default router;
