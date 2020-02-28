import { Request, Response, NextFunction } from "express";
import { isUserIDinSession } from "../helpers";

export const isUserLogged = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isUserLogged = isUserIDinSession(req);
  res.locals.isUserLogged = isUserLogged;
  next();
};
