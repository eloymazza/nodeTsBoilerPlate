import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Menues route!");
});

router.get("/:id", (req: Request, res: Response) => {
  res.send(`Menues ${req.params.id} route!`);
});

export default router;
