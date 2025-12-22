import { Text, Box, Input, Button } from "@chakra-ui/react";

export const CardEditar = () => {
  return (
    <Box
      position="fixed"
      top="0"
      right="0"
      h="100vh"
      w="400px"
      bg="gray.100"
      shadow="lg"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Text fontSize="xl" p={4}>
          Editar Tarea:
        </Text>
        <Text fontSize="xl" p={4}>
          Ingrese nueva tarea:
        </Text>
         <Input
          type="text"
          bg={"white"}
          color={"black"}
          placeholder="???"
          flex="1"
        />



      </Box>

      
        <Box m={4} display="flex" gap={2}>
          <Button colorScheme="teal" flex={1} type="submit">
            Guardar cambios
          </Button>
          <Button bg={"gray.300"} flex={1} onClick={() => setTarea("")}>
            Cancelar
          </Button>
        </Box>
     
    </Box>
  );
};
