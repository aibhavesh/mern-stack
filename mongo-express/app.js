const express = require("express");
const routes = express.Router();

// Define the root GET route
routes.get("/", async (req, res) => {
  res.send("Hello World! This is the root route.");
});

// Use the router in your main app
const app = express();
app.use("/", routes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
