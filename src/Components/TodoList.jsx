
import { Button, Box, VStack, HStack, Text } from "@chakra-ui/react";
import { CheckIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";


export const TodoList = ({
  tareas,
  onToggleCompletada,
  onEditarTarea,
  onEliminarTarea,
}) => {


  return (
    <Box>
    
      <VStack>
        <Text fontSize="xl" pt={4}>Mis tareas:</Text>
        {tareas.map((tarea) => (
          <HStack shadow="md" wrap="wrap"  bg="gray.100" rounded="md" m={1}  p={["2", "2", "4"]} key={id}>
            <Text textDecoration={tarea.completada ? "line-through" : "none"} fontFamily="mono"  bg="white" p={1}  minW={[280, 200, 250]}  rounded="md" color="black">{tarea.texto}</Text>
            <Button leftIcon={<EditIcon />}  p={["1", "1", "1"]} size={["xs", "xl", "xl"]} colorScheme="blue" key={tarea.id} onClick={() => onEditarTarea(tarea.id)}>Editar</Button>
            <Button leftIcon={<DeleteIcon />} p={["1", "1", "1"]} size={["xs", "xs", "xl"]} colorScheme="red" onClick={() => onEliminarTarea(tarea.id)}>Eliminar</Button>
            <Button leftIcon={<CheckIcon />} p={["1", "1", "1"]} size={["xs", "xs", "xl"]} colorScheme="green" onClick={() => onToggleCompletada(tarea.id)}>Hecho</Button>
          </HStack>

        ))}
      </VStack>

    </Box>
  )
}
