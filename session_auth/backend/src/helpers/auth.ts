import { Request, Response } from "express";

export const isUserIDinSession = (req: Request) => {
  return !!req.session!.userId;
};
export const logIn = (req: Request, res: Response, userId: string) => {
  req.session!.userId = userId;
  res.cookie("is_logged", true, {
    expires: new Date(Date.now() + 31536000),
    httpOnly: false
  });
};
export const logOut = (req: Request, res: Response) => {
  new Promise((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) reject(err);
      res.clearCookie(process.env.SESSION_NAME!);
      res.clearCookie("is_logged");
      resolve();
      let resp = {
        status: "success",
        msg: "User Logged Out"
      };
      res.json(resp);
    });
  });
};
