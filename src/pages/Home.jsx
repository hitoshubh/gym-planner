import React, { useContext, useEffect } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    if (userData?.username !== "admin" || userData?.password !== "123") {
      navigate("/login");
    }
  }, [userData, navigate]);

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to Your Website
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={6}>
        This is a simple home page built with React and Chakra UI.
      </Text>
      <Button
        colorScheme="teal"
        variant="solid"
        size="lg"
        onClick={() => alert("Button Clicked!")}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
