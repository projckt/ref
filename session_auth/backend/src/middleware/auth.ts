import { Request, Response, NextFunction } from "express";
import { isLoggedIn } from "../helpers";

export const guest = (req: Request, res: Response, next: NextFunction) => {
  if (isLoggedIn(req)) {
    return next(new Error("you are already logged in!"));
  }
  next();
};

export const user = (req: Request, res: Response, next: NextFunction) => {
  if (isLoggedIn(req)) {
    return next(new Error("you must be logged in!"));
  }
  next();
};
