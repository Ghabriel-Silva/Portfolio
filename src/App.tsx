//Componentes do chakra ui
import { Box } from "@chakra-ui/react"

//importando componentes
import Header from "@/componentsPage/Header"
import Home from "@/componentsPage/home-animation/home"
import CodeAnimation from "@/componentsPage/CodeAnimation"
import CardContainer from "@/componentsPage/card/CardContainer"
import ContainerSkils from "@/componentsPage/skills/ContainerSkils"
import Acordeao from "@/componentsPage/Acordeao"
import RotatingIcons from "@/componentsPage/iconsAnimate/RotatingIcons"
import ContainerCardsBlogs from "@/componentsPage/blogCard/ContainerCardsBlogs"



function App() {
  return (
    <Box maxW="1536px" w="100%" mx="auto" px={{ base: "16px", md: "32px", lg: "144px" }} py="4">
      <Header />

      <section id="home"  style={{ scrollMarginTop: "72px" }} >
        <Home />
      </section>

      <section  >
        <CodeAnimation />
      </section>
      <section  id="Rotating" style={{ scrollMarginTop: "72px" }}>
        <RotatingIcons />
      </section>

      <section id="projetos"  style={{ scrollMarginTop: "72px" }}>
        <CardContainer />
      </section>

      <section id="skills"  style={{ scrollMarginTop: "72px" }}>
        <ContainerSkils />
      </section>
      <section  id="acordeao" style={{ scrollMarginTop: "72px" }}>
        <Acordeao />
      </section>
      <section  id="cardsblogs" style={{ scrollMarginTop: "72px" }}>
        <ContainerCardsBlogs />
      </section>
    </Box>
  )
}


export default App
