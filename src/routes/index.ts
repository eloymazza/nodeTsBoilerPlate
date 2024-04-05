import { Router } from "express";
import homeRouter from "./home.routes";
import menuesRouter from "./menues.routes";

const router = Router();

router.use("/", homeRouter);
router.use("/menues", menuesRouter);

export default router;
