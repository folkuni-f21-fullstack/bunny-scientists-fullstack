import express, { Request, Response } from 'express';
import db from '../db.js';
import { Credentials } from '../models.js';
const router = express.Router();

//jämför om vad som skickas in är lika med vad som finns i databasen
function compareCredentials(credentials: Credentials) {
	if (db.data) {
		console.log(db.data.credentials)
		//result fel?
		//const result = db.data.credentials.find((user) => user.username === credentials.username && user.password === credentials.password);
		const result = db.data.credentials.filter((user) => user.username === credentials.username && user.password === credentials.password);
		return result;
	} else {
		return false;
	}
}

//get funkar och hämtar användarna som finns i databasen
router.get('/', (req, res) => {
	if (db.data?.credentials) {
		res.send(db.data.credentials);
	} else {
		res.sendStatus(404);
	}
});

router.post('/', (req, res) => {
	const credentials = req.body
	const result = compareCredentials(credentials)
	console.log(result)
	if (result !== false && credentials.hasOwnProperty('username') && credentials.hasOwnProperty('password')) {
		if (result.length === 0) {
			//skicka true?
			res.sendStatus(404)
		} else {
			res.send(result)
			//skicka false?
		}
	}
});

export default router;

//	let users: Credentials = db.get('credentials').value()
//	res.send(users);

//router.post('/', (req, res) => {
//    const credentials = req.body;
//    const result: any = compareCredentials(credentials);
//    const resObj = {success: false};
//    
//    if (credentials.hasOwnProperty('username') && credentials.hasOwnProperty('password')) {
//        if (result.length === 1) {
//            resObj.success = true;
//            //resObj.message = `Logged in as ${credentials.username}`
//        } else {
//            //resObj.message = 'Error. Wrong username and/or password'
//        }
//    } else {
//        //resObj.message = 'Wrong input'
//    }
//
//    res.json(resObj);
//});
