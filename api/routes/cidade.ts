import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getCidadeAll } from "../controller/cidadeController/getCidadeAll";
import { getCidadeId } from "../controller/cidadeController/getCidadeId";
import { addCidade } from "../controller/cidadeController/addCidade";

const prisma = new PrismaClient();

const router = Router();

router.get("/", getCidadeAll);

router.get("/:id", getCidadeId);

router.post("/", addCidade);

export default router;
