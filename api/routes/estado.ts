import { Router } from "express";
import { getEstadoAll } from "../controller/estadoController/getEstadoAll";
import { getEstadoId } from "../controller/estadoController/getEstadoId";
import { addEstado } from "../controller/estadoController/addEstado";

const router = Router();

router.get("/", getEstadoAll);

router.get("/:id", getEstadoId);

router.post("/", addEstado);

export default router;
