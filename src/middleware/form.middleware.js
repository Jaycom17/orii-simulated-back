import { Form } from "../models/form.model.js";

export const formMiddleware = (req, res, next) => {
    try {
        Form.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({
        message: error.errors[0].message
        });
    }
};