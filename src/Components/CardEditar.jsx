import { Text, Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
export const CardEditar = (props) => {
  const { abierta, onCerrar, tarea, onGuardar } = props;
  const [texto, setTexto] = useState("");

  const guardarCambios = (e) => {
    e.preventDefault();
    if (!abierta || !tarea) return null;
    if (texto.trim() === "") return;
    onGuardar(tarea.id, texto);
    onCerrar();

  }
useEffect(() => {
    if (tarea) {
      setTexto(tarea.texto);
    }
  }, [tarea]);
  
  if (!abierta) return null;
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
          <Button type="submit" colorScheme="teal" flex={1}>
            Guardar cambios
          </Button>
          <Button bg={"gray.300"} flex={1} onClick={onCerrar} >
            Cancelar
          </Button>
        </Box>
     
    </Box>
  );
};
