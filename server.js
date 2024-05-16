// Import dependancy
const express = require("express");
const cors = require("cors");

// creating instance
const app = express();
const httpPort = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import necessary routes
const userCotactData = require("./routes/userContactData");

//Routes
app.use("/api/user/", userCotactData);

// listen on HTTP server
app.listen(httpPort, (req, res) => {
  console.log(`Fusion server listening on http://localhost:${httpPort}`);
});

// Endpoints
app.get("/", (req, res) => {
  try {
    res.send("Server is running successfully");
  } catch (error) {
    console.log("Error in / ", error.message);
  }
});
