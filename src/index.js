import express from "express";
import FormRouter from "./routes/form.routes.js";

const app = express();

app.use(express.json());

app.use("/form", FormRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    }
);