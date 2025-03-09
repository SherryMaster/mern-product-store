import ProductCard from "@/components/ProductCard";
import { useProductStore } from "@/store/product";
import {
  Container,
  For,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

type Props = {};

const HomePage = (_props: Props) => {
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const deleteProduct = useProductStore((state) => state.deleteProduct);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container>
      <VStack spaceY={"4"}>
        <Heading
          as="h1"
          size="4xl"
          textAlign="center"
          mb="8"
          bgGradient={"to-r"}
          gradientFrom={"cyan.400"}
          gradientTo={"blue.500"}
          bgClip={"text"}
        >
          Current Products 🚀
        </Heading>

        {products.length > 0 ? (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={"4"}
            w="full"
            alignItems="stretch"
          >
            {products.map((product) => (
              <ProductCard
                product={product}
                onDelete={() => deleteProduct(product._id)}
                key={product._id}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Text
            fontSize={"xl"}
            textAlign={"center"}
            fontWeight={"bold"}
            color={"gray.500"}
          >
            No Products found 😢{" "}
            <RouterLink to={"/create"}>
              <Text
                as={"span"}
                bgGradient={"to-r"}
                gradientFrom={"cyan.400"}
                gradientTo={"blue.500"}
                bgClip={"text"}
                _hover={{
                  textDecoration: "underline",
                  textDecorationColor: "cyan.400",
                }}
              >
                Create one!
              </Text>
            </RouterLink>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
