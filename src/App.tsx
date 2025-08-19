//Componentes do chakra ui
import { Box, Flex, Center, Spinner, Text, VStack } from "@chakra-ui/react"

import { useEffect, useState } from "react"

//importando componentes
import Header from "@/componentsPage/Header"
import Home from "@/componentsPage/home-animation/home"
import CodeAnimation from "@/componentsPage/CodeAnimation"
import CardContainer from "@/componentsPage/card/CardContainer"
import ContainerSkils from "@/componentsPage/skills/ContainerSkils"
import Acordeao from "@/componentsPage/Acordeao"
import RotatingIcons from "@/componentsPage/iconsAnimate/RotatingIcons"
import ContainerCardsBlogs from "@/componentsPage/blogCard/ContainerCardsBlogs"
import Form from "@/componentsPage/formContato/Form"
import Section from "@/Section"
import Footer from "@/componentsPage/Footer"
import ContainerGraficos from "@/componentsPage/graficos/ContainerGraficos"



function App() {

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) 

    return () => clearTimeout(timer) // limpa se desmontar o componente
  }, [])


  if (loading) {
    return (
      <Center minH="100vh" bg="gray.100">
        <VStack colorPalette="teal">
          <Spinner color="colorPalette.600" />
          <Text color="colorPalette.600">Carregando Página...</Text>
        </VStack>
      </Center>
    );
  }

  return (
    <Flex direction="column" minH="100vh">
      <Box
        maxW="1536px"
        w="100%"
        mx="auto"
        px={{ base: "16px", md: "32px", lg: "144px" }}
        py="4"
        flex="1" // ocupa o espaço disponível, empurrando o footer pra baixo
      >
        <Header />
        <Section id="home"><Home /></Section>
        <Section><CodeAnimation /></Section>
        <Section id="Rotating"><RotatingIcons /></Section>
        <Section id="projetos"><CardContainer /></Section>
        <Section id="habilidades"><ContainerSkils /></Section>
        <Section id="insights" ><ContainerGraficos/></Section>
        <Section id="acordeao"><Acordeao /></Section>
        <Section id="cardsblogs"><ContainerCardsBlogs /></Section>
        <Section id="contato"><Form /></Section>
      </Box>

      <Footer />

    </Flex>
  )
}


export default App
