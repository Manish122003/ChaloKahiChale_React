// server.js
const express = require("express");
const app = express();
const port = 4000;
const insertData = require("./Routes/insert_data");
const fetchData = require("./Routes/fetch_data");
const { default: mongoose } = require("mongoose");
const cors = require('cors');
app.get("/", (req, res) => {
  res.send("This is the homepage");
});
app.use(express.json());
app.use(cors())
app.use("/api/v1", insertData);
app.use("/api/v1", fetchData);
mongoose
  .connect(
    "mongodb+srv://sakhisdesai:i4tjVRFbafwbNg86@city.yuggjnh.mongodb.net/?retryWrites=true&w=majority&appName=city"
  )
  .then(() => console.log("db connected"));
app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}`);
});
