import { Request, Response } from "express";
import { add, getGames, removeById } from "./gamefileInterface";

export const getAllGames = async (req: Request, res: Response) => {
  const gamesList = await getGames();
  res.status(200).json(gamesList);
};

export const createGame = async (req: Request, res: Response) => {
  await add(req.body);
  res.status(201).json();
};

export const deleteGame = async (req: Request, res: Response) => {
  await removeById(req.params.id);
  res.status(204).json(null);
};

export const updateGame = (req: Request, res: Response) => {
  // TODO: update game
  res.status(200).json([]);
}