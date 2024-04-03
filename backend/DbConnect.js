// // const express = require("express")
// const { default: mongoose } = require("mongoose")

// const dbConnect=(url)=>{
//      mongoose.connect('mongodb://127.0.0.1:27017//mernStackCrud').then(()=>{
//         console.log("database is connected")

//      })

// }
// module.exports= dbConnect
// const mongoose = require("mongoose");

// function dbConnect(url) {
//     mongoose.connect(url).then(() => console.log(`db Connected`));
// }
// module.exports = dbConnect;



const mongoose = require("mongoose");

const DB =
  "mongodb+srv://ankit:ankit%40780@cluster0.usnrmg6.mongodb.net/mernstacks?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(DB)
  .then(() => {
    console.log(`connection successfull`);
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = {
  DB: "mongodb+srv://ankit:ankit@780@cluster0.usnrmg6.mongodb.net/mernstacks?retryWrites=true&w=majority&appName=Cluster0",
};

// const { default: mongoose } = require("mongoose")
// // const mongoose = require("mongoose")

// const dbConnect = ((url) => {
//   mongoose.connect(url).then(() => console.log("db Connected"))
// })
// module.exports = dbConnect;