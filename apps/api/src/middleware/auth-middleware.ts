import dotenv from "dotenv";
dotenv.config();

import { NextFunction, Request, Response } from "express";

const SECRET_KEY = process.env.API_KEY;

export function verifySecretKey(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (authorization !== `Bearer ${SECRET_KEY}`) {
    res.status(403).json({ message: "Acceso denegado" });
    return;
  }

  next();
}
