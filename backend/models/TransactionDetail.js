import mongoose from "mongoose";

const Schema = mongoose.Schema;
const TransactionDetailSchema = new Schema(
  {
    TransactionID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TransactionHeaders",
      required: true,
    },
    SupplementID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplements",
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("TransactionDetails", TransactionDetailSchema);
