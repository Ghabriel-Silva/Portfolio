//Componentes do chakra ui
import { Box } from "@chakra-ui/react"

import Header from "@/componentsPage/Header"
import Home from "./componentsPage/home-animation/home"

function App() {
  return (
    <Box 
      px={{base: "16px", md:"32px", lg:"144px"}}
      py="4"
    >
      <Header />
     <Home />
    </Box>
  )
}


export default App
