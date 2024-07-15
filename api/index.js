import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

try {
  await mongoose.connect(process.env.MONGO);
  console.log("Connected to Database!");
} catch (error) {
  console.log(error);
}
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});
