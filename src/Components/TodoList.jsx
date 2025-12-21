import { useState } from "react";
import { Form } from "./Form";
import { Button } from "@chakra-ui/react";


export const TodoList = () => {

  const [tareas, setTareas] = useState([]);

  const agregarTareas = (tarea) => {
    const nuevaTarea = {
      id: Date.now(),
      texto: tarea,
    };
    setTareas([...tareas, nuevaTarea]);};


  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t=>t.id !==id))
  };
  const editarTarea = (id) => {
    const tarea = tareas.find(t => t.id ===id)

    const nuevoTexto = prompt("Editar tarea:", tarea.texto);

    if(nuevoTexto !==null && nuevoTexto.trim() !==""){
      setTareas(
        tareas.map(t =>
          t.id ===id ? {...t, texto:nuevoTexto} : t
        )
      )
    }



  }



  return (
    <div>
     <Form onAgregarTarea={agregarTareas} />
      <ul>
        {tareas.map((tarea, id) => (
          <li key={id}>
            {tarea.texto}
            <Button  size="xs" colorScheme="teal" onClick={() => editarTarea(tarea.id)}>Editar</Button>
            <Button  size="xs" colorScheme="red" onClick={() => eliminarTarea(tarea.id)}>Eliminar</Button>

          </li>

        ))}
      </ul>

      </div>
  )
}
