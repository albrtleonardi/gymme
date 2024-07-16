import mongoose from "mongoose";

const Schema = mongoose.Schema;
const SupplementSchema = new Schema(
  {
    SupplementName: {
      type: String,
      required: true,
    },
    SupplementExpiryDate: {
      type: Date,
      required: true,
    },
    SupplementPrice: {
      type: Number,
      required: true,
    },
    SupplementTypeID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SupplementTypes",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Supplements", SupplementSchema);
