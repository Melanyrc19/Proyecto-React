import { Text, Box } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      as="footer"
      w="100%"
      h={["100px", "200px", "200px"]}
      bg="gray.800"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      
    >
      <Text fontSize={["sm", "md", "lg"]} fontFamily="mono" textAlign="center">
        Hecho por Melany Rodriguez
      </Text>
    </Box>
  );
};
