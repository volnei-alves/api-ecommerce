import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getUserId = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({ where: { id: Number(req.params.id) } });
    res.send(user);
}