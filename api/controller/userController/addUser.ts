import { Request, Response } from "express";

export const addUser =  async (req: Request, res: Response) => {
    res.send("sign-up user");
}