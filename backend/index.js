const express = require("express");
const { default: mongoose } = require("mongoose");
// const dbConnect = require("./DbConnect");
const UserRouter = require("./Routes/UserRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

require("./DbConnect");
app.use(bodyParser.json());
// -------------------------------------------><---------------------------------------------
// mongoURI =
//   "mongodb+srv://ankit:ankit@780@cluster0.usnrmg6.mongodb.net/mernstacks?retryWrites=true&w=majority&appName=Cluster0";
// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// ---------------------------------><---------------------------------------------------------------------
// const DB =
//   "mongodb+srv://ankit:ankit@780@cluster0.usnrmg6.mongodb.net/mernstacks?retryWrites=true&w=majority&appName=Cluster0";
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true,
//     // useFindAndModify: false,
//   })
//   .then(() => {
//     console.log(`connection successfull`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const PORT = 6060;
// dbConnect('mongodb://127.0.0.1:27017/mernStackCrud')
// dbConnect('mongodb://127.0.0.1:27017/mernStackCrud')
// mongoose.connect('mongodb://127.0.0.1:27017/mernStackCrud').then(()=>{
//     console.log("db Conneted succesfully");
// })
// .catch((error)=>{
//     console.log(error)
// })
app.use(cors());
// app.use(dbConnect)

app.use("/api", UserRouter);

app.listen(PORT, () => console.log(`server is  runnning at the ${PORT} port `));

// module.exports = {
//   uri: "mongodb+srv://ankit:ankit@780@cluster0.usnrmg6.mongodb.net/mernstacks?retryWrites=true&w=majority&appName=Cluster0",
// };
