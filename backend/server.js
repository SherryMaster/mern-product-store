import express from "express";
import dotenv from "dotenv";
import { connentDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

const _dirname = path.resolve();

// API routes should be defined BEFORE the static file handling
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  connentDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
