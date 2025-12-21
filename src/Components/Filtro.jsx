
import { Text } from '@chakra-ui/react'



export const Filtro = ({ filtro, setFiltro }) => {
   



  return (
    <div>
      <Text> Filtrar por:</Text>
      <select name="filtro" id="filtro" value={filtro} onChange={(e) => setFiltro(e.target.value)}>
        <option value="todas">Todas</option>
        <option value="completadas">Completadas</option>
        <option value="pendientes">Pendientes</option>
      </select>

    </div>
  )
}
