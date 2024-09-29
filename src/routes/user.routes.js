import { userData } from "../data/user.data.js";
import { validateUser } from "../middleware/user.middleware.js";
import { Router } from "express";
import { getId } from "../util/getId.js";

const router = Router();

router.get("/", (_req, res) => {
    res.status(200).json(userData);
});

router.post("/", validateUser, (req, res) => {
    let id = getId(userData);
    userData.push({...req.body, id});
    res.status(201).json(req.body);
});

export default router;