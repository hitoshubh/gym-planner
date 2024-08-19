import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <BrowserRouter>
          <Box position="fixed" top="0" left="0" right="0" zIndex="1000">
            <Navbar />
          </Box>

          <Box flex="1" mt="60px" mb="60px" p={4}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Box>

          <Box position="fixed" bottom="0" left="0" right="0" zIndex="1000">
            <Footer />
          </Box>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
