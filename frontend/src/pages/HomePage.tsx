import { useProductStore } from "@/store/product";
import { Container, Heading, VStack } from "@chakra-ui/react";

type Props = {};

const HomePage = (_props: Props) => {
  const products = useProductStore((state) => state.products);

  return (
    <Container>
      <VStack spaceY={"4"}>
        <Heading as="h1" size="2xl" textAlign="center" mb="8">
          Items
        </Heading>
        <Container>
          {products.map((product) => (
            <div key={product.name}>{product.name}</div>
          ))}
        </Container>
      </VStack>
    </Container>
  );
};

export default HomePage;
