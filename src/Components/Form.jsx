
import { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";

export const Form = ({ onAgregarTarea }) => {

  const [tarea, setTarea] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();

    if (tarea.trim() === "") return;

    onAgregarTarea(tarea);
    setTarea("");
  };

  return (
    
    <Box  as="form"
      onSubmit={agregarTarea}
      display="flex"
      gap={2}
      p={4}
      bg="gray.100"
      borderRadius="md"
      boxShadow="md">
      <Input
        type="text"
        placeholder="Ingrese nueva tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        
      />
      <Button colorScheme="teal" type="submit">Agregar tarea</Button>
    </Box>
  );
};
