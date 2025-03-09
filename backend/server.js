import express from "express";
import dotenv from "dotenv";
import { connentDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const PORT = process.env.PORT || 5000; // Default port is 5000 in case the environment variable is not set.

const app = express();
app.use(express.json()); // This middleware parses the json data from request body to req.body object.

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connentDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
