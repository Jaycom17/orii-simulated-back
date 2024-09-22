import express from "express";
import FormRouter from "./routes/form.routes.js";
import UserRouter from "./routes/user.routes.js";
import ConvenioRouter from "./routes/convenio.routes.js";

const app = express();

app.use(express.json());

app.use("/form", FormRouter);
app.use("/user", UserRouter);
app.use("/convenio", ConvenioRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    }
);