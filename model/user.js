import mongoose from "mongoose";
import bcrypt from "bcrypt"
const Schema = mongoose.Schema({
 
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
    },
    blogs: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "BlogPost",
        },
      ],

})

Schema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});




export const User = mongoose.model("User", Schema)