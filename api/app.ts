import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import users from "./routes/users";
import endereco from "./routes/endereco";
import cidade from "./routes/cidade";
import estado from "./routes/estado";

const app: Express = express();
app.use(express.json());
app.use("/api/v1/users", users);
app.use("/api/v1/endereco", endereco);
app.use("/api/v1/cidade", cidade);
app.use("/api/v1/estado", estado);

export default app;
