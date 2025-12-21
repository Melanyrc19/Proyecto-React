
import { Button, Box, VStack, HStack, Text } from "@chakra-ui/react";


export const TodoList = ({
  tareas,
  onAgregarTarea,
  onToggleCompletada,
  onEditarTarea,
  onEliminarTarea
}) => {


  return (
    <Box >
    
      <VStack>
        {tareas.map((tarea, id) => (
          <HStack key={id}>
            <Text>{tarea.texto}</Text>
            <Button  size="xs" colorScheme="blue" onClick={() => onEditarTarea(tarea.id)}>Editar</Button>
            <Button  size="xs" colorScheme="red" onClick={() => onEliminarTarea(tarea.id)}>Eliminar</Button>
            <Button  size="xs" colorScheme="green" onClick={() => onToggleCompletada(tarea.id)}>Hecho</Button>

          </HStack>

        ))}
      </VStack>

    </Box>
  )
}
