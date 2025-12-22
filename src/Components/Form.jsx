
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
    <Box
      as="form"
      onSubmit={agregarTarea}
      display="flex"
      gap={2}
      mb={4}
      w="100%"        
      maxW="600px"  >
      <Input
        type="text" bg={"white"} color={"black"}
        placeholder="Ingrese nueva tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
     flex="1" 
     />
      <Button flex={1} colorScheme="teal" type="submit">Agregar tarea</Button>
    </Box>
  );
};
