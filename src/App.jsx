import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { TodoList } from "./Components/TodoList";
import { Filtro } from "./Components/Filtro";
import { Form } from "./Components/Form";
import { CardEditar } from "./Components/CardEditar";


function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  const [abierta, setAbierta] = useState(false);
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);
  const [mensajeError, setMensajeError] = useState("");



  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "completadas") {
      return tarea.completada;
    }
    if (filtro === "pendientes") {
      return !tarea.completada;
    }
    return true;
  });

  const agregarTareas = (texto) => {
    if (!texto.trim()) {
      setMensajeError("El texto de la tarea no puede estar vacío.");
      return;
    }


    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
    setMensajeError("");
  };

  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };
  const abrirEditor = (id) => {
    const tarea = tareas.find((t) => t.id === id);
    setTareaSeleccionada(tarea);
    setAbierta(true);
  };

  const guardarCambios = (id, nuevoTexto) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, texto: nuevoTexto } : t))
    );
    setAbierta(false);
    setTareaSeleccionada(null);
  };

  return (
    <div>
      <Box
        w={["100%", "50%", "100%"]}
        p={8}
        display="flex"
        flexDirection="column"
        alignItems="center"
        bg="gray.400"
        fontFamily="mono"
      >
        <Heading color="black" mb={6}>
          <Text>Lista de tareas</Text>
        </Heading>

        <Filtro filtro={filtro} setFiltro={setFiltro} />
        <Form flex="1" onAgregarTarea={agregarTareas} />
      </Box>
      <Box
        w={["100%", "50%", "100%"]}
        minH={"60vh"}
        p={8}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyItems="center"
        bg="gray.200"
        fontFamily="mono"
      >
        <TodoList
          tareas={tareasFiltradas}
          onToggleCompletada={toggleCompletada}
          onEditarTarea={abrirEditor}
          onEliminarTarea={eliminarTarea}
          onAgregarTarea={agregarTareas}
        />
        <CardEditar abierta={abierta}
          onCerrar={() => { setAbierta(false); setTareaSeleccionada(null); }}
          tarea={tareaSeleccionada}
          onGuardar={guardarCambios}
        />

      </Box>
    </div>
  );
}

export default App;
