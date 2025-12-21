import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

import { useState } from 'react'

import { TodoList } from './Components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
     <Box p={8}>
         <VStack spacing={4}></VStack>
    
      <Heading color="purple.600">
          ¡Lista de tares! 🎉
        </Heading>
   

       
       <TodoList />

     
      <VStack spacing={4}></VStack>
   </Box>
  )
}

export default App
