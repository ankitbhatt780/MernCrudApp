const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const UserRouter = require("./Routes/UserRoute")
const dbConnect = require("./DbConnect")
PORT = 6060;
dbConnect("mongodb://localhost:27017//mernStack")
const app = express();
app.use(cors)
app.use(bodyParser.json)

app.use("api", UserRouter)

app.listen(PORT, () => console.log("server is running at " + PORT + "port"))