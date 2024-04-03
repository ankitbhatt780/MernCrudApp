// const mongoose = require("mongoose")
// const userSchema = new mongoose . Schema({
//     name:{
//         type:String,
//         required:true
//     },

// }, {
//     timestamps:true,
// });

// const UserModel  =mongoose.model("user",userSchema)
// module.exports = UserModel;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    age: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
