import express, { Request, Response } from 'express'
const app = express()
const PORT = 2222

import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))
const staticPath = join(__dirname, '../../dist')

//Middleware
app.use(express.json())

app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url} `, req.body)
	next()
})

// Obs! express.static bör ligga först, när man får många statiska filer
app.use(express.static(staticPath))

// Routes / endpoints

// app.use('/api/menu', menuRoute)
// app.use('/api/orders', ordersRoute)
// app.use('/api/archieve', archieveRoute)
// app.use('/api/credentials', credentialsRoute)

// Starta servern
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`)
})