
import { Text, Box, Select} from '@chakra-ui/react'



export const Filtro = ({ filtro, setFiltro }) => {
   



  return (
    <Box display="flex" alignItems="center" gap={2} mb={10} mt={4}>
      <Text fontSize={["md", "lg", "2xl"]}  > Filtrar por:</Text>
      <Select name="filtro" id="filtro" value={filtro}   size={["sm", "md", "lg"]}  w="220px"
    bg="white"  fontSize={["md", "md", "md"]}   onChange={(e) => setFiltro(e.target.value)}>
        <option value="todas">Todas</option>
        <option value="completadas">Completadas</option>
        <option value="pendientes">Pendientes</option>
      </Select>
    </Box>
  )
}
