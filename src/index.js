import express from "express";
import cors from "cors";

import FormRouter from "./routes/form.routes.js";
import UserRouter from "./routes/user.routes.js";
import ConvenioRouter from "./routes/convenio.routes.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}
));

app.use("/api/v1/form", FormRouter);
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/agreement", ConvenioRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    }
);