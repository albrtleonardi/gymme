import mongoose from "mongoose";

const Schema = mongoose.Schema;
const TransactionHeaderSchema = new Schema(
  {
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    TransactionDate: {
      type: Date,
      required: true,
    },
    Status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("TransactionHeaders", TransactionHeaderSchema);
