import mongoose from "mongoose";

const Schema = mongoose.Schema;
const CartSchema = new Schema(
  {
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
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

export default mongoose.model("Carts", CartSchema);