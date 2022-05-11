import { Request, Response } from "express";

export const getUsersAll = async (req: Request, res: Response) => {
    res.send('get users all');
}