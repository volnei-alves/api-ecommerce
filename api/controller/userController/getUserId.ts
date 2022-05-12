import { Request, Response } from "express";


export const getUserId = async (req: Request, res: Response) => {
    res.send('user');
}