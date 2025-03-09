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
  Box,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";
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
  const { resolvedTheme } = useTheme();

  const { updateProduct } = useProductStore();

  return (
    <Card.Root 
      w="full" 
      h="full"
      overflow="hidden"
      borderRadius="xl"
      boxShadow="md"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "xl",
      }}
      position="relative"
    >
      <Box 
        position="relative" 
        overflow="hidden"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "full",
          height: "full",
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 100%)",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
        }}
        _hover={{
          _after: {
            opacity: 1,
          }
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          aspectRatio={"landscape"}
          objectFit="cover"
          h="200px"
          w="full"
          transition="transform 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
      </Box>
      <Card.Body 
        gap="2" 
        bg={resolvedTheme === "dark" ? "gray.800" : "white"}
        p="6"
      >
        <Card.Title 
          textStyle={"2xl"}
          transition="color 0.2s ease"
          _hover={{ color: "cyan.500" }}
        >
          {product.name}
        </Card.Title>
        <Text
          textStyle={"2xl"}
          fontWeight={"medium"}
          letterSpacing={"tight"}
          mt={"2"}
          color={resolvedTheme === "dark" ? "cyan.300" : "cyan.600"}
        >
          ${product.price.toFixed(2)}
        </Text>
      </Card.Body>
      <Card.Footer 
        gap="2" 
        bg={resolvedTheme === "dark" ? "gray.700" : "gray.50"}
        p="4"
        borderTop="1px"
        borderColor={resolvedTheme === "dark" ? "gray.600" : "gray.100"}
      >
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button 
              variant="solid" 
              colorPalette={"cyan"}
              transition="all 0.2s"
              _hover={{
                transform: "translateY(-2px)",
                shadow: "md",
              }}
            >
              <BiEdit />
            </Button>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content
                shadow="xl"
                borderRadius="lg"
                p="4"
              >
                <Popover.Arrow />
                <Popover.Body>
                  <Stack gap="4">
                    <Field.Root>
                      <Field.Label>Name</Field.Label>
                      <Input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        _focus={{
                          borderColor: "cyan.400"
                        }}
                      />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Price</Field.Label>
                      <Input 
                        value={price} 
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        _focus={{
                          borderColor: "cyan.400"
                        }}
                      />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Image URL</Field.Label>
                      <Input 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)}
                        _focus={{
                          borderColor: "cyan.400"
                        }}
                      />
                    </Field.Root>
                    <Button
                      variant="solid"
                      colorPalette={"cyan"}
                      w="full"
                      transition="all 0.2s"
                      _hover={{
                        transform: "translateY(-2px)",
                        shadow: "md",
                      }}
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
                    >
                      <BiSave />
                    </Button>
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
          transition="all 0.2s"
          _hover={{
            transform: "translateY(-2px)",
            shadow: "md",
          }}
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
