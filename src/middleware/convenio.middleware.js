import { Convenio } from "../models/convenios.model.js";

export const validateConvenio = (req, res, next) => {
    try {
        Convenio.parse(req.body);
        next();
    } catch (error) {
        res.status(400).send(error.errors);
    }
};