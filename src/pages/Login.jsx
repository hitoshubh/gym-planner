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

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && password) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/login`,
          {
            username,
            password,
          }
        );

        localStorage.setItem("token", response.data.token);

        toast({
          title: "Login successful.",
          description: "Welcome back!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        navigate("/");
      } catch (err) {
        toast({
          title: "Login failed.",
          description: "Invalid Pass",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }

      setUsername("");
      setPassword("");
    } else {
      toast({
        title: "Login failed.",
        description: "Please provide both username and password.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
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

          <Link
            to={"/signup"}
            style={{ textDecoration: "underline", color: "blue" }}
          >
            Sign Up
          </Link>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
