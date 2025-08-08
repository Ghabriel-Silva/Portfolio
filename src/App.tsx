//Componentes do chakra ui
import { Box } from "@chakra-ui/react"

import Header from "@/componentsPage/Header"
import Home from "@/componentsPage/home-animation/home"
import CodeAnimation from "@/componentsPage/CodeAnimation"
import CardContainer from "@/componentsPage/card/CardContainer"
import ContainerSkils from "@/componentsPage/skills/ContainerSkils"


function App() {
  return (
    <Box
      maxW="1536px"
      w="100%"
      mx="auto"

      px={{ base: "16px", md: "32px", lg: "144px" }}
      py="4"
    >
      <Header />
      <Home />
      <CodeAnimation />
      <CardContainer />
      <ContainerSkils />
    </Box>
  )
}


export default App
