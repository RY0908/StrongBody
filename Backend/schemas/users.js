import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: Object,
      required: false,
    },
    role: {
      type: String,
      enum: ["admin", "user", "coach"],
      required: true,
    },
  },
  { timestamps: true }
);
const Users = mongoose.model("users", usersSchema);

export default Users;
