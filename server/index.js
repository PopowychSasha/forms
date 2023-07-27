import express from "express";
import authRoutes from "./route/auth.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { passport } from "./authentication/passport.js";

dotenv.config();

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wzyg4bb.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Помилка підключення до MongoDB:"));
db.once("open", () => {
  console.log("Підключено до MongoDB!");
});

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(passport.initialize());

app.use("/api", authRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is started on PORT ${process.env.APP_PORT}`);
});
