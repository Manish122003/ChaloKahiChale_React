//  connect to database using mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sakhisdesai:i4tjVRFbafwbNg86@city.yuggjnh.mongodb.net/?retryWrites=true&w=majority&appName=city')
    .then(()=>console.log("db connected"));


