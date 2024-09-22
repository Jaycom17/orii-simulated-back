import {Router} from 'express';
import { formData } from '../data/form.data.js';
import { validateForm } from '../middleware/form.middleware.js';

const router = Router();

router.get("/", (_req, res) => {
    res.status(200).json(formData);
});

router.post("/", validateForm, (req, res) => {
    let id = formData.length + 1;
    formData.push({...req.body, id});
    res.status(201).json(req.body);
});

export default router;