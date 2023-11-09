import mongoose from "mongoose";

const criteriaSchema = new mongoose.Schema({
  type: String,
  text: String,
  variable: {},
});

const stockDetailsSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    tag: String,
    color: String,
    criteria: [criteriaSchema],
  },
  {
    toJSON: { virtuals: true },
  }
);

export const stockDetails = mongoose.model("stockDetails", stockDetailsSchema);
