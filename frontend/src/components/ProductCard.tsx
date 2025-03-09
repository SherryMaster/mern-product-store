import { Button, Card, Image, Text } from "@chakra-ui/react"
import { Product } from "@/types"
import { BiEdit, BiTrash } from "react-icons/bi"

type Props = {
    product: Product
    onDelete: () => void
}

const ProductCard = (props: Props) => {
    const { product, onDelete } = props;
  return (
    <Card.Root>
        <Image src={product.image} alt={product.name} height={"200px"}/>
        <Card.Body gap="2">
            <Card.Title>{product.name}</Card.Title>
            <Text textStyle={"2xl"} fontWeight={"medium"} letterSpacing={"tight"} mt={"2"}>${product.price}</Text>
        </Card.Body>
        <Card.Footer gap="2">
        <Button variant="solid" colorPalette={"cyan"}><BiEdit /></Button>
        <Button variant="solid" colorPalette={"red"} onClick={onDelete}><BiTrash /></Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default ProductCard