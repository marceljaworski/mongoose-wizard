import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import magicSpellRoutes from "./routes/magicSpell.js";

dotenv.config();
import "./lib/mongoose.js"

// const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
// const dbConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}`));

import logMiddleware from "./middlewares/log.js";
app.use(logMiddleware);
app.use(express.json());
app.use("/magic-spell", magicSpellRoutes);

console.log("Casting Mongoose database connection spell... 🪄");

