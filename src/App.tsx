//Componentes do chakra ui
import { Box } from "@chakra-ui/react"

import Header from "@/componentsPage/Header"
import Home from "@/componentsPage/home-animation/home"
import CodeAnimation from "@/componentsPage/CodeAnimation"
import TitleDescription from "@/componentsPage/TitleDescription"
import CardFull from "@/componentsPage/card/CardFull"

function App() {
  return (
    <Box
      px={{ base: "16px", md: "32px", lg: "144px" }}
      py="4"
    >
      <Header />
      <Home />
      <CodeAnimation/>
      <TitleDescription title="Projetos." text="Meus projetos são focados em design e desenvolvimento, sempre alinhados com os princípios da boa programação."/>
       <CardFull />
    </Box>
  )
}


export default App
