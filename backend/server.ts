import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5174;

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import archiveRoute from "./routes/archive.js";
import credentialsRoute from "./routes/credentials.js";
import menuRoute from "./routes/menu.js";
import ordersRoute from "./routes/orders.js";
import orderNumberRoute from "./routes/ordernumber.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
const staticPath = join(__dirname, "../../dist");

//Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.httpVersion);
  next();
});

app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method}  ${req.url} `, req.body);
  next();
});

app.use(express.static(staticPath));

// Routes / endpoints
app.use("/api/ordernumber", orderNumberRoute);
app.use("/api/menu", menuRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/credentials", credentialsRoute);
app.use("/api/archive", archiveRoute);

// Starta servern
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
