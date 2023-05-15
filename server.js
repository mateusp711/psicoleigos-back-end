const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const routes = require("./server/routes");
const connectDB = require("./server/database/connect");
var cors = require("cors");
const app = express();

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 4000;

//cors //
const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));

//log requests//
app.use(morgan("tiny"));

// mongodb connection //
connectDB();

//parse request to body parser //
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes//
routes(app);

app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});
