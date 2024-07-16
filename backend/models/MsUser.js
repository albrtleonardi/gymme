import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    UserName: {
      type: String,
      required: true,
    },
    UserEmail: {
      type: String,
      required: true,
    },
    UserDOB: {
      type: Date,
      required: true,
    },
    UserGender: {
      type: String,
      required: true,
    },
    UserRole: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);
