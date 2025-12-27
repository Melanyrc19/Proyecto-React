import { Text, Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
export const CardEditar = (props) => {
  const { abierta, onCerrar, tarea, onGuardar } = props;
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const guardarCambios = (e) => {
    e.preventDefault();
    if (!abierta || !tarea) return null;
    if (texto.trim() === "") {
      setError("El texto no puede estar vacío.");
      return;
    }
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
    
    <Box
  as="form"
  onSubmit={guardarCambios}
  position="fixed"
  top="50%"
  left="50%"
  transform="translate(-50%, -50%)"
  w={["90%", "70%", "400px"]}
  bg="gray.100"
  shadow="2xl"
  borderRadius="xl"
  display="flex"
  flexDirection="column"
  justifyContent="space-between"
  p={[4,6,8]}
>
      <Box >
        <Text fontSize={["md", "lg", "2xl"]} p={4}>
          Editar Tarea:
        </Text>
        <Text fontSize={["md", "md", "lg"]} p={4}>
          Ingrese nueva tarea:
        </Text>
         <Input
         fontSize={["lg", "xl", "xl"]}
          m={2}
          type="text"
          bg={"white"}
          color={"black"}
          placeholder="???"
          flex="1"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        {error && <Text color="red.500" mb={2}>{error}</Text>}



      </Box>

      
        <Box mt={4} display="flex" gap={2}>
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
