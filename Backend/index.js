// server.js
const express = require("express");
const app = express();
const port = 4000;
const addData = require("./Routes/insert_State");
const { default: mongoose } = require("mongoose");
app.get("/", (req, res) => {
  res.send("This is the homepage");
});
app.use(express.json());
app.use("/api/v1", addData);
mongoose
  .connect(
    "mongodb+srv://sakhisdesai:i4tjVRFbafwbNg86@city.yuggjnh.mongodb.net/?retryWrites=true&w=majority&appName=city"
  )
  .then(() => console.log("db connected"));
app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}`);
});
