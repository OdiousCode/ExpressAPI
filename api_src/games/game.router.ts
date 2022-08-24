import express from "express";
import { createGame, deleteGame, getAllGames, updateGame } from "./game.controller";

const gameRouter = express.Router();
gameRouter.get("/", getAllGames);
gameRouter.post("/", createGame);
gameRouter.delete("/:id", deleteGame);
gameRouter.put("/:id", updateGame);

export default gameRouter;
