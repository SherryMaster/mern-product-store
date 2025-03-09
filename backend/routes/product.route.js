import express from "express";
import {
  getAllProducts,
  updateProduct,
  createProduct,
  deleteProduct,
  createDummyProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.put("/:id", updateProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.post("/dummy", createDummyProducts);

export default router;
