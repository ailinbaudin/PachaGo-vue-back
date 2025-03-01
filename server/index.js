require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const user = require("./routes/user");
const announcement = require("./routes/announcement");
const requireAuth = require('./middleware/requireAuth');

app.use(cors({ origin: "http://localhost:5173", methods: ["GET", "POST", "DELETE", "PUT"], credentials: true }));
app.use(express.json());
app.use(user);
app.use(announcement);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`)))
    .catch(error => console.log(error));
