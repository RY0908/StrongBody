import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import usersrouter from "./routes/users.js";
import profilerouter from "./routes/profile.js";
dotenv.config();
const app = express();
mongoose.set("strictQuery", true);
mongoose.connect(
  process.env.MONGODB_Secret,

  (err) => {
    if (err) return console.log(err);
    console.log("connected to the database");
  }
);
//body parser
app.use(express.json());
app.use(bodyParser.json());
// define routers
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
//routes
app.use("/users/profile", cors(corsOptions), profilerouter);
app.use("/users", cors(corsOptions), usersrouter);
app.get("/ping", (req, res) => {
  res.send("pong");
});
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
