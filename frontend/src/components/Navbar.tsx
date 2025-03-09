import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BiMoon, BiPlusCircle, BiSun } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useColorMode } from "@/components/ui/color-mode";

type Props = {};

const Navbar = (_props: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Container maxW={"container.xl"} px={"4"} py={"4"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text
          fontSize="2xl"
          fontWeight={"bold"}
          textTransform={"uppercase"}
          bgGradient="to-r"
          gradientFrom={"cyan.400"}
          gradientTo={"blue.500"}
          textAlign={"center"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spaceX={"4"} alignItems={"center"}>
          <Link to={"/create"}><Button><BiPlusCircle /></Button></Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <BiSun /> : <BiMoon />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
