//Componentes do chakra ui
import { Box } from "@chakra-ui/react"

import Header from "@/componentsPage/Header"
import TextAnimation from "@/componentsPage/shared/TextAnimation"

function App() {
  return (
    <Box 
      px={{base: "16px", md:"32px", lg:"144px"}}
      py="4"
    >
      <Header />
      <TextAnimation/>
    </Box>
  )
}


export default App
