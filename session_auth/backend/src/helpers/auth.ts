import { Request, Response } from "express";

export const checkUserIDinSession = (req: Request) => {
  return !!req.session!.userId;
};
export const logIn = (req: Request, userId: string) => {
  req.session!.userId = userId;
};
export const logOut = (req: Request, res: Response) => {
  new Promise((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) reject(err);
      res.clearCookie(process.env.SESSION_NAME!);
      resolve();
    });
  });
};
