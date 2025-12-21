import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useState } from 'react'
import { TodoList } from './Components/TodoList'
import { Filtro } from "./Components/Filtro";

function App() {
   const [tareas, setTareas] = useState([]);
   const [filtro, setFiltro] = useState("Todas");

   const tareasFiltradas = tareas.filter(tarea => {
     if (filtro === "completadas") {
       return tarea.completada;
     }
     if (filtro === "pendientes") {
       return !tarea.completada;
     }
     return true;
   });

   const agregarTareas = (tarea) => {
      const nuevaTarea = {
        id: Date.now(),
        texto: tarea,
        completada: false
      };
      setTareas([...tareas, nuevaTarea]);
    };

  
    const toggleCompletada = (id) => {
      setTareas(tareas.map(t=> t.id === id ? {...t, completada: !t.completada} : t));
  
    }
  
    const eliminarTarea = (id) => {
      setTareas(tareas.filter(t => t.id !== id));
    };

    
    const editarTarea = (id) => {
      const tarea = tareas.find(t => t.id === id);
  
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
     <Box   
       w={["100%", "50%", "100%"]}
       p={8}
       display="flex"
        flexDirection="column"
        alignItems="center"
       >
         <VStack spacing={4}></VStack>
    
      <Heading color="green.400" mb={6}>
        <Text>Lista de tareas</Text>
      </Heading>

      <Filtro filtro={filtro} setFiltro={setFiltro} />
      <TodoList
        tareas={tareasFiltradas}
        onToggleCompletada={toggleCompletada}
        onEditarTarea={editarTarea}
        onEliminarTarea={eliminarTarea}
        onAgregarTarea={agregarTareas}
      />
       
      <VStack spacing={4}></VStack>
   </Box>
  )
}

export default App
