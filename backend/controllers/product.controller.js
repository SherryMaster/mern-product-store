import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const product = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, product, {
      new: true,
    });
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.json({
      success: true,
      data: updatedProduct,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Name, price and image are required" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res
      .status(201)
      .json({
        success: true,
        data: newProduct,
        message: "Product created successfully",
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createDummyProducts = async (req, res) => {
  const dummyProducts = [
    { name: "iPhone 14 Pro", price: 999, image: "iphone14.jpg" },
    { name: "MacBook Air M2", price: 1199, image: "macbook-air.jpg" },
    { name: "iPad Pro 12.9", price: 799, image: "ipad-pro.jpg" },
    { name: "Samsung Galaxy S23", price: 899, image: "galaxy-s23.jpg" },
    { name: "Sony WH-1000XM4", price: 349, image: "sony-headphones.jpg" },
    { name: "Nintendo Switch OLED", price: 349, image: "switch-oled.jpg" },
    { name: "PS5 Digital Edition", price: 399, image: "ps5.jpg" },
    { name: "Dell XPS 13", price: 999, image: "dell-xps.jpg" },
    { name: "Apple Watch Series 8", price: 399, image: "apple-watch.jpg" },
    { name: "AirPods Pro", price: 249, image: "airpods-pro.jpg" },
    { name: 'LG C2 OLED TV 65"', price: 1799, image: "lg-c2.jpg" },
    { name: "Canon EOS R6", price: 2499, image: "canon-r6.jpg" },
    { name: "DJI Mini 3 Pro", price: 759, image: "dji-mini.jpg" },
    { name: "Kindle Paperwhite", price: 139, image: "kindle.jpg" },
    { name: "Bose QuietComfort 45", price: 329, image: "bose-qc45.jpg" },
  ];

  try {
    const insertedProducts = await Product.insertMany(dummyProducts);
    res.status(201).json({
      success: true,
      message: "Dummy products created successfully",
      count: insertedProducts.length,
      data: insertedProducts,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
