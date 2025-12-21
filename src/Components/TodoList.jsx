
import { Form } from "./Form";
import { Button, Box } from "@chakra-ui/react";


export const TodoList = ({
  tareas,
  onAgregarTarea,
  onToggleCompletada,
  onEditarTarea,
  onEliminarTarea
}) => {


  return (
    <Box >
     <Form flex="1" onAgregarTarea={onAgregarTarea} />

        
      <ul>
        {tareas.map((tarea, id) => (
          <li key={id}>
            {tarea.texto}
            <Button  size="xs" colorScheme="blue" onClick={() => onEditarTarea(tarea.id)}>Editar</Button>
            <Button  size="xs" colorScheme="red" onClick={() => onEliminarTarea(tarea.id)}>Eliminar</Button>
            <Button  size="xs" colorScheme="green" onClick={() => onToggleCompletada(tarea.id)}>Hecho</Button>

          </li>

        ))}
      </ul>

    </Box>
  )
}
