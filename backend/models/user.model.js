import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
  fullname : {
    type : "String",
    required: "true",
  },
  username : {
    type : "String",
    required: "true",
    unique: "true",
  },
  password: {
    type: "String",
    required: "true",
    minlength: 6,
  },
  gender: {
    type: "String",
    required: "true",
    enum: ["male", "female"],
  },
  profilePic: {
    type: "String",
    default: "",
  },
}, // createdAt, updatedAt => member since <createdAt>
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// model.exports = User;
export default User;