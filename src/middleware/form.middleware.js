import { Form } from "../models/form.model.js";

export const validateForm = (req, res, next) => {
    try {
        Form.parse(req.body);
        next();
    } catch (error) {
        res.status(400).send(error.errors);
    }
};