import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
mongoose.set('strictQuery', false);

mongoose.connect(
    process.env.MONGODB_URI,
    {

        dbName: process.env.DATABASE,
    }
).then(() => console.log("connected via mongoose"))
.catch(console.error);

mongoose.connection.on("error", error => console.error(error));
