import { Request, Response } from "express";
import { addGame, getGames, removeById, updateGameById } from "./gamefileInterface";

export const getAllGames = async (req: Request, res: Response) => {
  const gamesList = await getGames();
  res.status(200).json(gamesList);
};

export const createGame = async (req: Request, res: Response) => {
  await addGame(req.body);
  res.status(201).json();
};

export const deleteGame = async (req: Request, res: Response) => {
  await removeById(req.params.id);
  res.status(204).json(null);
};

export const updateGame = async (req: Request, res: Response) => {
  // TODO: update game
  console.log(req.body)
  await updateGameById(req.body)
  res.status(200).json([]);
}