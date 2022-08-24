import { Request, Response } from "express";
import { getGames } from "./gamefileInterface";

export const getAllGames = async (req: Request, res: Response) => {
//   throw new Error("Ops...");
    const gamesList = await getGames();
  res.status(200).json(gamesList);
};

export const createGame = (req: Request, res: Response) => {
  // TODO: create post
  res.status(201).json({});
};

export const deleteGame = (req: Request, res: Response) => {
  // TODO: delete post
  res.status(204).json(null);
};

export const updateGame =(req: Request, res: Response) => {
    // TODO: update game
    res.status(200).json([]);
}