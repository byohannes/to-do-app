import express, { Express } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoutes from "../routes";

const app: Express = express();
app.use(cors());
app.use(todoRoutes);
dotenv.config();

const URI: string = process.env.DATABASE_URI!;
const PORT = process.env.PORT || 4000;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as any;

mongoose
  .connect(URI, options)
  .then(() =>
    app.listen(PORT, () => console.log(`Api is running on port ${PORT}.`))
  )
  .catch((err) => console.log(err));
