import { useState } from 'react'

import { TodoList } from './Components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      </div>
      <h1>Lista de tareas</h1>
      <div className="card">

       
       <TodoList />

      </div>

    </>
  )
}

export default App
