import { userData } from "../data/user.data.js";
import { validateUser } from "../middleware/user.middleware.js";
import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
    res.status(200).json(userData);
});

router.post("/", validateUser, (req, res) => {
    let id = userData.length + 1;
    userData.push({...req.body, id});
    res.status(201).json(req.body);
});

export default router;