
import { Button, Box, VStack, HStack, Text } from "@chakra-ui/react";
import { CheckIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";


export const TodoList = ({
  tareas,
  onAgregarTarea,
  onToggleCompletada,
  onEditarTarea,
  onEliminarTarea
}) => {


  return (
    <Box>
    
      <VStack>
        <Text fontSize="xl" p={4}>Mis tareas:</Text>
        {tareas.map((tarea, id) => (
          <HStack shadow="md" bg="gray.100" rounded="md" m={1}  p={3} key={id}>
            <Text fontFamily="mono"  bg="white" p={1}  minW="150px"  rounded="md" color="black">{tarea.texto}</Text>
            <Button leftIcon={<EditIcon />} size="xs" colorScheme="blue" onClick={() => onEditarTarea(tarea.id)}>Editar</Button>
            <Button leftIcon={<DeleteIcon />} size="xs" colorScheme="red" onClick={() => onEliminarTarea(tarea.id)}>Eliminar</Button>
            <Button leftIcon={<CheckIcon />} size="xs" colorScheme="green" onClick={() => onToggleCompletada(tarea.id)}>Hecho</Button>

          </HStack>

        ))}
      </VStack>

    </Box>
  )
}
