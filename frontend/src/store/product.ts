import { create } from "zustand";

type Product = {
  id?: string; // Make id optional by adding ? to the type definition to avoid errors in the store when creating a new product
  name: string;
  price: number;
  image: string;
};

type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  createProduct: (product: Product) => Promise<{
    success: boolean;
    message?: string;
    data?: Product;
  }>;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }),
  createProduct: async (product: Product) => {
    if (!product.name || !product.price || !product.image) {
      return { success: false, message: "Name, price and image are required" };
    }
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    set((state: ProductStore) => ({
      products: [...state.products, data.data],
    }));
    return {
      success: true,
      message: "Product created successfully",
      data: data.data,
    };
  },
}));
