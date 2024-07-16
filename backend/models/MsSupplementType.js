import mongoose from "mongoose";

const Schema = mongoose.Schema;
const SupplementTypeSchema = new Schema(
  {
    SupplementTypeName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("SupplementTypes", SupplementTypeSchema);