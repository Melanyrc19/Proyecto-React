# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


------------------------------------------------------------------------------------

# TodoList
Esta aplicación permite gestionar tareas de manera sencilla: crear, editar, marcar como completadas y eliminar.  
Los datos se almacenan localmente en el navegador usando **LocalStorage**, en formato **JSON**.  
Es parte del Trabajo Práctico Integrador del curso de Front End.


![Badge de Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow)
![Badge de Versión](https://img.shields.io/badge/versión-1.0.0-blue)

## 📋 Descripción

Esta aplicación proporciona un sistema de gestión de tareas que permite:
- Listar tareas almacenadas localmente en el navegador
- Filtrar tareas por estado (completas / incompletas)
- Agregar, editar y eliminar tareas
- Visualizar detalles de cada tarea

## 🛠️ Tecnologías Utilizadas
- **React.js** (para manejar el estado y la lógica de la aplicación con hooks como `useState` y `useEffect`)
- **Chakra UI** (para el diseño y componentes de la interfaz de usuario)

## ✅ Características
- **Gestión de Tareas**:
  - Agregar nuevas tareas
  - Marcar tareas como completadas o pendientes
  - Editar tareas existentes
  - Eliminar tareas con confirmación
 

- **Filtrado y Visualización**:
  - Filtrar tareas por estado: completa / incompleta
  - Mostrar todas las tareas
  - Listado ordenado con tarjetas visuales para cada tarea

- **Interfaz de Usuario**:
  - Diseño responsive con Chakra UI
  - Uso de botones e íconos para acciones de forma clara
  - Modal para edición de tareas centrado y accesible
  - AlertDialog para confirmación de eliminación
  - Tarjetas de tareas con diseño limpio y moderno
 
## 🚀 Cómo ejecutar el proyecto
1.Clona este repositorio:

git@github.com:Melanyrc19/Proyecto-React.git
cd Proyecto-React

2.Instala las dependencias:

3.npm run dev

Alternativamente, puedes ver la versión desplegada en: https://proyectoreact-jet.vercel.app


## 📁 Estructura del proyecto
```
src/
 ├─ App.jsx
 ├─ componentes/
 │   ├─ Formulario.jsx
 │   ├─ TodoList.jsx
 │   ├─ ModalEditar.jsx
 │   ├─ Filtro.jsx
 │   └─ Footer.jsx


```




## 📸 Capturas de pantalla

### Página de Inicio

<img width="1819" height="886" alt="image" src="https://github.com/user-attachments/assets/a12921a2-ef19-4d24-b057-0536d4779b85" />



### Página de Inicio E-mobile
<img width="559" height="595" alt="image" src="https://github.com/user-attachments/assets/7b3ca9d4-7fb8-459c-b0a8-97a291f8febf" />


### Página de Inicio Tablet
<img width="559" height="595" alt="image" src="https://github.com/user-attachments/assets/62b4b957-f085-4160-84a5-32e639be3406" />



### Modal de edicion

<img width="837" height="581" alt="image" src="https://github.com/user-attachments/assets/dd92a4e5-e9b8-4541-bea0-e0321ad8b5af" />




### Alerta para eliminar

<img width="837" height="581" alt="image" src="https://github.com/user-attachments/assets/fe27abf8-5f74-4fc2-a7e9-8b59995b1b48" />






## 🤝 Contribuir


Este proyecto es parte de un trabajo práctico académico. Si deseas contribuir:

Haz un fork del repositorio
Crea una nueva rama para tu funcionalidad:``` git checkout -b nueva-funcionalidad```

Realiza tus cambios y haz commit: ```git commit -m 'Añade nueva funcionalidad'```

Haz push a tu rama: ```git push origin nueva-funcionalidad```
Crea un Pull Request


## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

##  ✒️ Autor

Melany Rodriguez- Trabajo Final - Melanyrc19
## 🎓 Agradecimientos

-Gracias 
---

Hecho con ❤️ por Melany
