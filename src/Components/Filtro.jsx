
import { Text, Box} from '@chakra-ui/react'



export const Filtro = ({ filtro, setFiltro }) => {
   



  return (
    <Box display="flex" alignItems="center" gap={2} mb={10} mt={4}>
      <Text fontSize="lg"> Filtrar por:</Text>
      <select name="filtro" id="filtro" value={filtro} onChange={(e) => setFiltro(e.target.value)}>
        <option value="todas">Todas</option>
        <option value="completadas">Completadas</option>
        <option value="pendientes">Pendientes</option>
      </select>

    </Box>
  )
}
