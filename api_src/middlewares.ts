import { NextFunction, Request, Response } from "express";

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  const isLoggedIn = true; // Simulating a session..
  if (isLoggedIn) {
    next();
  } else {
    res.status(401).json("You must login");
  }
};

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.path);
  console.log(req.body);
  next();
};

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json(err.message);
};

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json("404, the resource you are trying to reach does not exist!");
};
