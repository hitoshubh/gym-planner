import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/userContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const { settingUserData } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "123") {
      settingUserData({ username, password });
      toast({
        title: "Login successful.",
        description: "Welcome back!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/");

      setUsername("");
      setPassword("");
    } else {
      toast({
        title: "Login failed.",
        description: "Please provide both username and password.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt="10"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button colorScheme="blue" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
