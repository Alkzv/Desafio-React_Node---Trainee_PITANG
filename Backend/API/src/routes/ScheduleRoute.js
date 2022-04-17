import { Router } from "express";
import { controller } from "../controller/ScheduleController.js";

const router = Router();

router.get("/schedule", controller.getAll);
router.get("/schedule/:id", controller.getOne);
router.post("/schedule", controller.create);
router.put("/schedule/:id", controller.update); 
router.delete("/schedule/:id", controller.remove);

export { router }