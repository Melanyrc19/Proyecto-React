
import { useState } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";

export const Formulario = ({ onAgregarTarea }) => {

  const [tarea, setTarea] = useState("");
  const [error, setError] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();

    if (tarea.trim() === "") {
      setError("El texto de la tarea no puede estar vacío.");
      return;
    }

    onAgregarTarea(tarea);
    setTarea("");
    setError("");
  };

  return (
    <Box
      as="form"
      onSubmit={agregarTarea}
      flexDirection="column" 
      display="flex"
      gap={2}
      mb={4}
      w="100%"        
      maxW="600px"  >
        <Box display="flex" gap={2}>
      <Input fontSize={["md", "lg", "xl"]}  type="text" bg={"white"} color={"black"}
        placeholder="Ingrese nueva tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
     flex="1" 
     />
        
      <Button minW="" flex={1} fontSize={["md", "lg", "xl"]}   colorScheme="teal" type="submit">Agregar tarea</Button>
         </Box>
      {error && <Text color="red.500" mb={2}>{error}</Text>}
    </Box>
  );
};
