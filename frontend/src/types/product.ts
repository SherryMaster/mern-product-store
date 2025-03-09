export type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ProductResponse = {
  success: boolean;
  message?: string;
  data?: Product;
};