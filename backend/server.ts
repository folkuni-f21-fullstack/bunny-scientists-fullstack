import express, { Request, Response } from "express";
const app = express();
const PORT = 1337;
import cors from "cors"
// const cors = require("cors")
import menuRoute from "./routes/menu.js";
import ordersRoute from "./routes/orders.js";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const staticPath = join(__dirname, "../../dist");


//Middleware
app.use(express.json());

app.use(cors())

app.use((req, res, next) => {
  console.log(`${req.method}  ${req.url} `, req.body);
  next();
});

// Obs! express.static bör ligga först, när man får många statiska filer
app.use(express.static(staticPath));

// Routes / endpoints

app.use("/api/menu", menuRoute);
app.use('/api/orders', ordersRoute)
// app.use('/api/archive', archiveRoute)
// app.use('/api/credentials', credentialsRoute)

// Starta servern
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
