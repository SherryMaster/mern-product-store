import { create } from "zustand";
import { Product, ProductResponse } from "@/types";

type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  createProduct: (product: Product) => Promise<ProductResponse>;
  fetchProducts: () => Promise<void>;
  deleteProduct: (productId: string) => Promise<ProductResponse>;
  updateProduct: (product: Product) => Promise<ProductResponse>;
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
    if (!data.success) {
      return { success: false, message: data.message };
    }
    set((state: ProductStore) => ({
      products: [...state.products, data.data],
    }));
    return {
      success: true,
      message: data.message,
      data: data.data,
    };
  },
  fetchProducts: async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    set({ products: data.data });
  },
  deleteProduct: async (productId: string) => {
    const response = await fetch(`/api/products/${productId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }
    set((state: ProductStore) => ({
      products: state.products.filter((product) => product._id !== productId),
    }));
    return {
      success: true,
      message: data.message,
    };
  },
  updateProduct: async (product: Product) => {
    const response = await fetch(`/api/products/${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }
    set((state: ProductStore) => ({
      products: state.products.map((p) => (p._id === product._id ? product : p)),
    }));
    return {
      success: true,
      message: data.message,
    };
  },
}));
