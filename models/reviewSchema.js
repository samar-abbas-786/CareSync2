import mongoose from "mongoose";
import { Schema } from "mongoose";
const reviewSchema = new mongoose.Schema({
  feedback: {
    type: String,
  },
});

const review = new mongoose.model("review", reviewSchema);
export default review;
