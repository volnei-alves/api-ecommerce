import { Request, Response } from "express";
import { userAddService } from "../../services/userService";

export const addUser = async (req: Request, res: Response) => {
    const response = await userAddService(req.body);
    res.send(response);
};
