import { convenioData } from "../data/convenio.data.js";
import { validateConvenio } from "../middleware/convenio.middleware.js";
import { getId } from "../util/getId.js";
import { Router } from "express";

const router = Router();

router.get("/allAgreement", (_req, res) => {
    res.status(200).json(convenioData);
});

router.post("/create", validateConvenio, (req, res) => {
    let id = getId(convenioData);
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

router.put("/update/:id", validateConvenio, (req, res) => {
    let index = convenioData.findIndex(c => c.id == req.params.id);
    if (index != -1) {
        convenioData[index] = {...req.body, id: parseInt(req.params.id)};
        res.status(200).json(req.body);
    } else {
        res.status(404).json({ message: "Convenio not found" });
    }
});

router.delete("/delete/:id", (req, res) => {
    let index = convenioData.findIndex(c => c.id == req.params.id);
    if (index != -1) {
        convenioData.splice(index, 1);
        res.status(200).end();
    } else {
        res.status(404).json({ message: "Convenio not found" });
    }
});

export default router;
