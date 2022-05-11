import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    res.send('get users all');
});

router.get("/:id", async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({ where: { id: Number(req.params.id) } });
    res.send(user);
});

router.post("/", async (req: Request, res: Response) => {
    res.send("sign-up user");
});

export default router;
