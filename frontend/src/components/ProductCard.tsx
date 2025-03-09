import { Button, Card, Image, Text } from "@chakra-ui/react";
import { Product } from "@/types";
import { BiEdit, BiTrash } from "react-icons/bi";
import { toaster } from "./ui/toaster";

type Props = {
  product: Product;
  onDelete: () => void;
};

const ProductCard = (props: Props) => {
  const { product, onDelete } = props;
  return (
    <Card.Root w="full" h="full">
      <Image
        src={product.image}
        alt={product.name}
        aspectRatio={"landscape"}
        objectFit="cover"
        h="200px"
        w="full"
      />
      <Card.Body gap="2">
        <Card.Title textStyle={"2xl"}>{product.name}</Card.Title>
        <Text
          textStyle={"2xl"}
          fontWeight={"medium"}
          letterSpacing={"tight"}
          mt={"2"}
        >
          ${product.price}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid" colorPalette={"cyan"}>
          <BiEdit />
        </Button>
        <Button
          variant="solid"
          colorPalette={"red"}
          onClick={() => {
            onDelete();
            toaster.create({
              title: `${product.name} deleted`,
              description: `The product "${product.name}" has been successfully removed from the inventory.`,
              type: "success",
              duration: 3000,
            });
          }}
        >
          <BiTrash />
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductCard;
