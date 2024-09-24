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

router.get("/:id", (req, res) => {
    let convenio = convenioData.find(c => c.id == req.params.id);
    if (convenio) {
        res.status(200).json(convenio);
    } else {
        res.status(404).json({ message: "Convenio not found" });
    }
});

router.put("/:id", validateConvenio, (req, res) => {
    let index = convenioData.findIndex(c => c.id == req.params.id);
    if (index != -1) {
        convenioData[index] = {...req.body, id: parseInt(req.params.id)};
        res.status(200).json(req.body);
    } else {
        res.status(404).json({ message: "Convenio not found" });
    }
});

router.delete("/:id", (req, res) => {
    let index = convenioData.findIndex(c => c.id == req.params.id);
    if (index != -1) {
        convenioData.splice(index, 1);
        res.status(200).end();
    } else {
        res.status(404).json({ message: "Convenio not found" });
    }
});

export default router;
