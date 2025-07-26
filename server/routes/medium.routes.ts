import { Router } from "express";
import { MediumController } from "../controllers/medium.controller.js";

const router = Router();
const mediumController = new MediumController();

router.get("/medium", mediumController.getMediumPosts.bind(mediumController));

export { router as mediumRoutes };
