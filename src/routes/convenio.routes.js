import { convenioData } from "../data/convenio.data.js";
import { validateConvenio } from "../middleware/convenio.middleware.js";
import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
    res.status(200).json(convenioData);
});

router.post("/", validateConvenio, (req, res) => {
    let id = convenioData.length + 1;
    convenioData.push({...req.body, id});
    res.status(201).json(req.body);
});

export default router;
