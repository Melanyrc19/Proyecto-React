import { Text, Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
export const CardEditar = () => {

  const [texto, setTexto] = useState("");

  const guardarCambios = () => {
    e.preventDefault();
    if (texto.trim() === "") return;
    onGuardar(tarea.id, texto);

  }
  
  return (
    <Box as="form"
    onSubmit={guardarCambios}
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
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />



      </Box>

      
        <Box m={4} display="flex" gap={2}>
          <Button colorScheme="teal" flex={1} type="submit">
            Guardar cambios
          </Button>
          <Button bg={"gray.300"} flex={1} onClick={() => setTexto("")}>
            Cancelar
          </Button>
        </Box>
     
    </Box>
  );
};
