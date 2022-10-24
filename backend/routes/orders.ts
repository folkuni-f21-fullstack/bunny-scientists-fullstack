import express, {Request, Response} from 'express'
const router = express.Router()

import db from '../db.js'
import { Order } from '../models.js'
// import { isValidOrder } from '../validation.js'
import { data as defaultData} from '../defaultData.js'

// Exempel: frontend skickar "GET /api/data", backend tar emot och servar ett svar
// HTTP methods: GET, POST, PUT, DELETE -> motsvarar CRUD = Create, Read, Update, Delete
// Dessa fyra används när vi bygger ett RESTful API
// GET    - hämta data
// POST   - lägga till ny data
// PUT    - uppdatera data
// DELETE - ta bort data
