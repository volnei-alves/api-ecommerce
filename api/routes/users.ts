import { Router } from "express";

import { addUser } from "../controller/userController/addUser";
import { getUserId } from "../controller/userController/getUserId";
import { getUsersAll } from "../controller/userController/getUsersAll";

const router = Router();


router.get("/", getUsersAll);

router.get("/:id", getUserId);

router.post("/", addUser);

export default router;
