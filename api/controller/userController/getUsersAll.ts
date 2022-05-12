import { Request, Response } from "express";
import { userAllService } from "../../services/userService";

export const getUsersAll = async (req: Request, res: Response) => {
    const response = await userAllService();
    res.send(response);
}