import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useProductStore } from "@/store/product";
import { toaster, Toaster } from "@/components/ui/toaster";

type Props = {};

type Product = {
  id?: string;
  name: string;
  price: number;
  image: string;
};

const CreatePage = (_props: Props) => {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: 0,
    image: "",
  });

  const createProduct = useProductStore((state) => state.createProduct);

  const handleCreateProduct = async (product: Product) => {
    const { success, message } = await createProduct(product);
    setProduct({ name: "", price: 0, image: "" });
    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      type: success ? "success" : "error",
      duration: 3000,
    });
  };

  return (
    <Container maxW={"md"}>
      <Toaster />
      <VStack py={"6"}>
        <Heading as="h1" size="2xl" textAlign="center" mb="8">
          Create New Product
        </Heading>

        <Box
          w="full"
          bg={useTheme().resolvedTheme === "dark" ? "gray.800" : "white"}
          p="6"
          rounded="ls"
          shadow="md"
        >
          <VStack spaceY={"4"}>
            <Input
              placeholder="Name"
              name="name"
              bg={useTheme().resolvedTheme === "dark" ? "gray.700" : "gray.100"}
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <Input
              placeholder="Price"
              name="price"
              type="text"
              bg={useTheme().resolvedTheme === "dark" ? "gray.700" : "gray.100"}
              value={
                product.price === 0 && !product.price.toString().includes(".")
                  ? ""
                  : product.price.toString()
              }
              onChange={(e) => {
                const value = e.target.value;
                // Allow empty input, numbers, one decimal point, and prevent multiple dots
                if (value === "" || /^\d*\.?\d*$/.test(value)) {
                  if (value === "") {
                    setProduct({ ...product, price: 0 });
                  } else if (value === ".") {
                    setProduct({ ...product, price: 0 });
                  } else {
                    setProduct({ ...product, price: parseFloat(value) });
                  }
                }
              }}
            />
            <Input
              placeholder="Image"
              name="image"
              bg={useTheme().resolvedTheme === "dark" ? "gray.700" : "gray.100"}
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            />
            <Button
              fontWeight={"bold"}
              colorPalette={"blue"}
              w="full"
              onClick={() => handleCreateProduct(product)}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
