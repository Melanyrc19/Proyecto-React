import { Text, Box} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box as="footer" w="100%" h={["100px", "120px", "120px"]}  bg="gray.800" color="white"  display="flex" alignItems="center" justifyContent="center" mt={10} >
      <Text textAlign="center">Hecho por Melany Rodriguez</Text>

    </Box>
  )
}
