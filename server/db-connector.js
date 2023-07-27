import mongoose from "mongoose";

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
