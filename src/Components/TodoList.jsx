import { useState } from "react";
import { Form } from "./Form";


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
            <button onClick={() => editarTarea(tarea.id)}>Editar</button>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>

          </li>

        ))}
      </ul>

      </div>
  )
}
