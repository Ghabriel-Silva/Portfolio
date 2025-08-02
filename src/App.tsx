//Componentes do chakra ui
import { Box } from "@chakra-ui/react"

import Header from "@/componentsPage/Header"

function App() {
  return (
    <Box 
      px={{base: "16px", md:"32px", lg:"144px"}}
      py="8"
    >
      <Header />
    </Box>
  )
}


export default App
