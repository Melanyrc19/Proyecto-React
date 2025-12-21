import { useState } from "react";

export const Form = ({ onAgregarTarea }) => {

  const [tarea, setTarea] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();

    if (tarea.trim() === "") return;

    onAgregarTarea(tarea);
    setTarea("");
  };

  return (
    <form onSubmit={agregarTarea}>
      <input
        type="text"
        placeholder="Ingrese nueva tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};
