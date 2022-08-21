import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import postsRoutes from "./routes/posts.js";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
// app.use("/posts", () => {
//   console.log("This is middleware running");
// });
app.use("/", postsRoutes);
app.use("/posts", postsRoutes);

// Connect to DB
dotenv.config();
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("connected to DB!");
});

app.listen(port, console.log(`Server running on port ${port}`));
