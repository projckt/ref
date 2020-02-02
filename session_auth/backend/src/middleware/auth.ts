import { Request, Response, NextFunction } from "express";
import { checkUserIDinSession } from "../helpers";

export const isUserGuest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isGuest = checkUserIDinSession(req);
  if (isGuest) {
    return next(new Error("you are already logged in!"));
  }
  next();
};

export const isUserLogged = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isLogged = checkUserIDinSession(req);
  if (!isLogged) {
    return next(new Error("you must be logged in!"));
  }
  next();
};
