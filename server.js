import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import magicSpellRoutes from "./routes/magicSpell.js";
import wizardRoutes from "./routes/wizard.js";

dotenv.config();
import "./lib/mongoose.js"

// const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
// const dbConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
app.use(express.json());
app.use(cors({origin: "*"}))

import logMiddleware from "./middlewares/log.js";
app.use(logMiddleware);
app.use(cors({origin:"*"}));
app.use("/magic-spell", magicSpellRoutes);
app.use("/wizard", wizardRoutes);

console.log("Casting Mongoose database connection spell... 🪄");

app.use((err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send(err.message);
});
