import { Router } from "express";

import { getEnderecoAll } from "../controller/enderecoController/getEnderecoAll";
import { getEnderecoId } from "../controller/enderecoController/getEnderecoId";
import { addEndereco } from "../controller/enderecoController/addEndereco";

const router = Router();

router.get("/", getEnderecoAll);

router.get("/:id", getEnderecoId);

router.post("/", addEndereco);

export default router;
