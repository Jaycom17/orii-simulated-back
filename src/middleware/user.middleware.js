import { User } from "../models/user.model.js";

export const validateUser = (req, res, next) => {
    try {
        User.parse(req.body);
        next();
    } catch (error) {
        res.status(400).send(error.errors);
    }
}