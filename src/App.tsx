//Componentes do chakra ui
import { Box } from "@chakra-ui/react"

import Header from "@/componentsPage/Header"
import Home from "@/componentsPage/home-animation/home"
import CodeAnimation from "@/componentsPage/CodeAnimation"


function App() {
  return (
    <Box
      px={{ base: "16px", md: "32px", lg: "144px" }}
      py="4"
    >
      <Header />
      <Home />
      <CodeAnimation/>
    </Box>
  )
}


export default App
