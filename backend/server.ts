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

//app.use('/api/fruits', fruitsRoute)

// Wildcard route, fångar alla övriga requests
app.get('*', (req, res) => {
	console.log('Wildcard route aktiverad för GET ' + req.url)
	const indexPath: string = staticPath + '/index.html'
	console.log('Path to index.html: ' + indexPath)
	res.sendFile(indexPath)
})

// Starta servern
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`)
})