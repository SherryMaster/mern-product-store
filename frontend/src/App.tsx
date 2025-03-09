import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import CreatePage from "@/pages/CreatePage";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.200", "gray.800")}>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
