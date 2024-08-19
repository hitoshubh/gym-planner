import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify="center"
        align="center"
      ></Stack>
      <Text mt={4} textAlign="center" fontSize="sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
