import {
  Button,
  Card,
  Field,
  Image,
  Input,
  Popover,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Product } from "@/types";
import { BiEdit, BiSave, BiTrash } from "react-icons/bi";
import { toaster } from "./ui/toaster";
import { useState } from "react";
import { useProductStore } from "@/store/product";

type Props = {
  product: Product;
  onDelete: () => void;
};

const ProductCard = (props: Props) => {
  const { product, onDelete } = props;
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);

  const { updateProduct } = useProductStore();

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
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button variant="solid" colorPalette={"cyan"}>
              <BiEdit />
            </Button>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content>
                <Popover.Arrow />
                <Popover.Body>
                  <Stack gap="4">
                    <Field.Root>
                      <Field.Label>Name</Field.Label>
                      <Input placeholder="40px" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Price</Field.Label>
                      <Input placeholder="32px" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Comments</Field.Label>
                      <Input placeholder="Start typing..." value={image} onChange={(e) => setImage(e.target.value)} />
                    </Field.Root>
                    <Button
                      variant="solid"
                      colorPalette={"cyan"}
                      onClick={async () => {
                        const { success, message } = await updateProduct({
                          ...product,
                          name,
                          price,
                          image,
                        });
                        toaster.create({
                          title: success ? "Success" : "Error",
                          description: message,
                          type: success ? "success" : "error",
                          duration: 3000,
                        });
                      }}
                    ><BiSave /></Button>

                  </Stack>
                </Popover.Body>
                <Popover.CloseTrigger />
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>

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
