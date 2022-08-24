import express from "express";
require("express-async-errors");

import { errorHandler, logger, notFoundHandler } from "./middlewares";
import gameRouter from "./games/game.router";


const app = express();

app.use(express.json());
app.use(logger);

// Add more routers when needed
app.use("/api/games", gameRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(3000, () => console.log("Running on: http://localhost:3000"));
