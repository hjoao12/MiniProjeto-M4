import express from "express";
import { bookRouter } from "./src/routes/routes.js";
import { deforestationRouter } from "./src/routes/antiracism-router.js";
import { pollutionRouter } from "./src/routes/RacialIncidentReport-router.js";

const app = express();

app.use(express.json());
app.use('/book', bookRouter);  //--> book/all
app.use('/desmatacao', deforestationRouter);
app.use('/pollution', pollutionRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(` app está rodando na porta: http://localhost:${PORT}`);
});
